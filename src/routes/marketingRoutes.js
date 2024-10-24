const express = require('express');
const { getCampaigns } = require('../controllers/marketingController');
const router = express.Router();

router.get('/campaigns', getCampaigns);

module.exports = router;
