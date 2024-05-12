const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const requireRoles = require('../middlewares/roleMiddleware');

// Route to display all tasks
router.get('/', taskController.listTasks);

// Route to display form to create a new task
router.post('/create', requireRoles(['teacher', 'Menu Manager', 'Performances Manager', 'Budget Team']), taskController.createTask);

// Route to complete a task
router.post('/complete/:id', requireRoles(['student']), taskController.completeTask);

// Route to delete a task
router.get('/delete/:id', requireRoles(['teacher', 'Menu Manager', 'Performances Manager', 'Budget Team']), taskController.deleteTask);

module.exports = router;
