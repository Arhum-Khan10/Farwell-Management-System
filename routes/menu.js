const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Get all menu items
router.get('/', menuController.listMenuItems);

// Handle posting of new menu item
router.post('/add', menuController.postMenuItemSuggestion);

// Handle voting
router.post('/vote/:id', menuController.voteMenuItem);

// Delete menu item
router.post('/delete/:id', menuController.deleteMenuItem);

module.exports = router;
