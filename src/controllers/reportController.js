const { performETL } = require('../utils/etl');
const { generatePDFReport } = require('../utils/pdfGenerator');
const { generateCSVReport } = require('../utils/csvGenerator'); // Optional
const { sendAlertEmail } = require('../utils/emailService');
const path = require('path');

// API to generate report and send alerts
const generateReport = async (req, res) => {
    // Perform ETL to get metrics
    const metrics = await performETL();

    // Generate PDF report
    const pdfPath = path.join(__dirname, '..', 'reports', 'metrics_report.pdf');
    generatePDFReport(metrics, pdfPath);

    // Optionally generate CSV report
    const csvPath = path.join(__dirname, '..', 'reports', 'metrics_report.csv');
    await generateCSVReport(metrics, csvPath);

    // Send email alert if the total budget exceeds a threshold
    if (metrics.totalBudget > 10000) {
        sendAlertEmail(`Total budget exceeded the threshold: $${metrics.totalBudget}`);
    }

    // Provide download options
    if (req.query.format === 'csv') {
        res.download(csvPath);
    } else {
        res.download(pdfPath); // Default to PDF
    }
};

module.exports = { generateReport };
