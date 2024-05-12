const express = require('express');
const router = express.Router();
const performanceController = require('../controllers/performanceController');
const requireRoles = require('../middlewares/roleMiddleware');

// Route to display all performances
router.get('/', performanceController.listPerformances);

// Route to handle posting of the new performance
router.post('/add', requireRoles(['teacher', 'Performances Manager', 'Performance Team']), performanceController.postPerformance);

// Route to delete a performance (if you want to allow this)
router.post('/delete/:id', requireRoles(['teacher', 'Performances Manager', 'Performance Team']), performanceController.deletePerformance);

module.exports = router;
