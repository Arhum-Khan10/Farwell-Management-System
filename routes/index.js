const express = require('express');
const router = express.Router();

// Import other routers
const authRouter = require('./auth');
const menuRouter = require('./menu');
// const performanceRouter = require('./performance');
// const taskRouter = require('./tasks');
// const attendanceRouter = require('./attendance');
// const budgetRouter = require('./budget');
// const reportRouter = require('./reports');

// Use routers
router.use('/', authRouter);
router.use('/menu', menuRouter);
// router.use('/performance', performanceRouter);
// router.use('/tasks', taskRouter);
// router.use('/attendance', attendanceRouter);
// router.use('/budget', budgetRouter);
// router.use('/reports', reportRouter);

module.exports = router;