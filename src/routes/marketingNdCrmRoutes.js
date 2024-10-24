const express = require('express');
const { getCampaigns } = require('../controllers/marketingController');
const { getLeads } = require('../controllers/crmController');
const router = express.Router();

router.get('/campaigns', getCampaigns);


router.get('/leads', getLeads);

module.exports = router;

