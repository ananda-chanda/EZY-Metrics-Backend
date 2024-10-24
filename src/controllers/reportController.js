const { performETL } = require('../utils/etl');
const { generatePDFReport } = require('../utils/pdfGenerator');
const { sendAlertEmail } = require('../utils/emailService');

const generateReport = async (req, res) => {
    try {
        // Perform ETL to get metrics
        const metrics = await performETL();

        // Check for email alerts based on metrics
        if (metrics.totalBudget > 10000) {
            await sendAlertEmail(`Total budget exceeded the threshold: $${metrics.totalBudget}`);
        }

        // Generate PDF report in memory
        const pdfBuffer = await generatePDFReport(metrics);
        
        // Set headers for the response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=metrics_report.pdf');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating report:', error);
        res.status(500).send('An error occurred while generating the report.');
    }
};

module.exports = { generateReport };
