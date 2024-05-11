const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

// Route to display all tasks
router.get('/', taskController.listTasks);

// Route to display form to create a new task
router.post('/create', taskController.createTask);

// Route to delete a task
router.get('/delete/:id', taskController.deleteTask);

module.exports = router;
