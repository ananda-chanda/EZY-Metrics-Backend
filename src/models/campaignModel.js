const mongoose = require('mongoose');

const CampaignSchema = new mongoose.Schema({
    name: String,
    status: String,
    budget: Number
});

module.exports = mongoose.model('Campaign', CampaignSchema);
