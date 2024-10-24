const Lead = require('../models/leadModel');


// Dummy data simulation for CRM leads
const getLeads = async (req, res) => {
    const leads = [
        { name: 'John Doe', email: 'john@example.com', status: 'interested' },
        { name: 'Jane Smith', email: 'jane@example.com', status: 'qualified' },
        { name: 'Emily Davis', email: 'emily@example.com', status: 'converted' }
    ];
    
    // Simulate storing the data in DB
    await Lead.insertMany(leads);
    
    res.json(leads);
};



module.exports = { getLeads };
