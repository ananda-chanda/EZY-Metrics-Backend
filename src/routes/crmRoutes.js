const express = require('express');
const { getLeads } = require('../controllers/crmController');
const router = express.Router();

router.get('/leads', getLeads);

module.exports = router;
