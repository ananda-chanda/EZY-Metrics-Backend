const generateReport = async (req, res) => {
    try {
        // Perform ETL to get metrics
        const metrics = await performETL();

        // Send email alert if the total budget exceeds a threshold
        if (metrics.totalBudget > 10000) {
            await sendAlertEmail(`Total budget exceeded the threshold: $${metrics.totalBudget}`);
        }

        // Determine the format from query parameters
        const format = req.query.format || 'pdf'; // Default to PDF if not specified

        if (format === 'csv') {
            // Generate CSV report in memory
            const csvBuffer = await generateCSVReport(metrics);
            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment; filename=metrics_report.csv');
            res.send(csvBuffer);
        } else {
            // Generate PDF report in memory
            const pdfBuffer = await generatePDFReport(metrics);
            res.setHeader('Content-Type', 'application/pdf');
            res.setHeader('Content-Disposition', 'attachment; filename=metrics_report.pdf');
            res.send(pdfBuffer);
        }
    } catch (error) {
        console.error('Error generating report:', error);
        res.status(500).send('An error occurred while generating the report.');
    }
};
