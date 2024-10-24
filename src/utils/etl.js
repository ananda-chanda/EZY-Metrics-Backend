const Lead = require('../models/leadModel');
const Campaign = require('../models/campaignModel');

// Extract, Transform, Load (ETL) process to compute metrics
const performETL = async () => {
    // Extract data from the database
    const leads = await Lead.find();
    const campaigns = await Campaign.find();

    // Transform: Calculate lead conversion rate and total campaign budget
    const totalLeads = leads.length;
    const convertedLeads = leads.filter(lead => lead.status === 'converted').length;
    const conversionRate = totalLeads > 0 ? (convertedLeads / totalLeads) * 100 : 0;

    const totalBudget = campaigns.reduce((sum, campaign) => sum + campaign.budget, 0);

    // Return the transformed data
    return {
        totalLeads,
        convertedLeads,
        conversionRate: conversionRate.toFixed(2) + '%',
        totalBudget
    };
};

module.exports = { performETL };
