const express = require('express');
const router = express.Router();
const budgetController = require('../controllers/budgetController');
const requireRoles = require('../middlewares/roleMiddleware');

// Route to display all budget items
router.get('/', requireRoles(['teacher', 'Budget Team']), budgetController.listBudgetItems);

// Route to handle posting of the new budget item
router.post('/add', requireRoles(['teacher', 'Budget Team']), budgetController.addBudgetItem);

// Route to delete a budget item
router.post('/delete/:id', requireRoles(['teacher', 'Budget Team']), budgetController.deleteBudgetItem);

module.exports = router;
