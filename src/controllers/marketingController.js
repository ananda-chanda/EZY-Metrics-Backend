const Campaign = require('../models/campaignModel');

// Dummy data simulation for Marketing campaigns
const getCampaigns = async (req, res) => {
    const campaigns = [
        { name: 'Summer Campaign', status: 'active', budget: 5000 },
        { name: 'Winter Promo', status: 'paused', budget: 3000 },
        { name: 'Holiday Sale', status: 'active', budget: 7000 }
    ];

    // Simulate storing the data in DB
    await Campaign.insertMany(campaigns);

    res.json(campaigns);
};

module.exports = { getCampaigns };
