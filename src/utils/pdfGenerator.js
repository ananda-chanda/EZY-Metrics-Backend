const PDFDocument = require('pdfkit');

const generatePDFReport = (metrics) => {
    return new Promise((resolve, reject) => {
        const doc = new PDFDocument();
        const buffers = [];

        // Collect data chunks in the buffers array
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {
            const pdfBuffer = Buffer.concat(buffers);
            resolve(pdfBuffer); // Resolve the promise with the PDF buffer
        });

        // Create PDF content
        doc.fontSize(20).text('EzyMetrics Report', { align: 'center' });
        doc.moveDown();
        doc.fontSize(14).text(`Total Leads: ${metrics.totalLeads}`);
        doc.text(`Converted Leads: ${metrics.convertedLeads}`);
        doc.text(`Lead Conversion Rate: ${metrics.conversionRate}`);
        doc.text(`Total Campaign Budget: $${metrics.totalBudget}`);

        // Finalize the PDF and end the stream
        doc.end();
    });
};

module.exports = { generatePDFReport };
