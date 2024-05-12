const express = require('express');
const router = express.Router();

// Import other routers
const defualtRouter = require('./default');
const authRouter = require('./auth');
const menuRouter = require('./menu');
const performanceRouter = require('./performance');
const taskRouter = require('./tasks');
const attendanceRouter = require('./attendance');
const budgetRouter = require('./budget');
const dashboardRouter = require('./dashboard');

// Use routers
router.use('/', defualtRouter);
router.use('/auth', authRouter);
router.use('/menu', menuRouter);
router.use('/performances', performanceRouter);
router.use('/tasks', taskRouter);
router.use('/attendance', attendanceRouter);
router.use('/budget', budgetRouter);
router.use('/dashboard', dashboardRouter);

module.exports = router;