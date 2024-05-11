const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController');
const roleMiddleware = require('../middlewares/roleMiddleware');

// Route to display all performances
router.get('/', performanceController.listPerformances);

// Route to handle posting of the new performance
router.post('/add', roleMiddleware('student'), performanceController.postPerformance);

// Route to delete a performance (if you want to allow this)
router.post('/delete/:id', roleMiddleware('teacher'), performanceController.deletePerformance);

module.exports = router;
