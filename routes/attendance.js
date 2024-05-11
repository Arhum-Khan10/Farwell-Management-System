const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');

// Route to view attendance records
router.get('/', attendanceController.viewAttendance);

// Route to post attendance data
router.post('/record', attendanceController.recordAttendance);


module.exports = router;
