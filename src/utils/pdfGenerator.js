const PDFDocument = require('pdfkit');
const fs = require('fs');

// Function to generate a PDF report
const generatePDFReport = (metrics, outputFile) => {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream(outputFile));

    doc.fontSize(20).text('EzyMetrics Report', { align: 'center' });
    doc.moveDown();
    doc.fontSize(14).text(`Total Leads: ${metrics.totalLeads}`);
    doc.text(`Converted Leads: ${metrics.convertedLeads}`);
    doc.text(`Lead Conversion Rate: ${metrics.conversionRate}`);
    doc.text(`Total Campaign Budget: $${metrics.totalBudget}`);

    doc.end();
};

module.exports = { generatePDFReport };
