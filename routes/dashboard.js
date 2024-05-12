const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');

// Login routes
router.get('/', dashboardController.renderDashboard);

module.exports = router;
