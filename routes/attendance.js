const express = require('express');
const router = express.Router();
const requireRoles = require('../middlewares/roleMiddleware');
const attendanceController = require('../controllers/attendanceController');

// Route to view attendance records
router.get('/', requireRoles(['teacher']), attendanceController.viewAttendance);

// Route to post attendance data
router.post('/record', requireRoles(['teacher']), attendanceController.recordAttendance);


module.exports = router;
