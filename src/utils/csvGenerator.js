const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// Function to generate a CSV report
const generateCSVReport = async (metrics, outputFile) => {
    const csvWriter = createCsvWriter({
        path: outputFile,
        header: [
            { id: 'totalLeads', title: 'Total Leads' },
            { id: 'convertedLeads', title: 'Converted Leads' },
            { id: 'conversionRate', title: 'Lead Conversion Rate (%)' },
            { id: 'totalBudget', title: 'Total Campaign Budget ($)' }
        ]
    });

    await csvWriter.writeRecords([metrics]); // Writing metrics into CSV
};

module.exports = { generateCSVReport };
