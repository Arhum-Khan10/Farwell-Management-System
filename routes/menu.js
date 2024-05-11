const express = require('express');
const router = express.Router();
const menuController = require('../controllers/menuController');

// Get all menu items
router.get('/', menuController.listMenuItems);

// Display form to add a new menu item
router.get('/suggest', menuController.getMenuItemSuggestion);

// Handle posting of new menu item
router.post('/suggest', menuController.postMenuItemSuggestion);

// Handle voting
router.post('/vote/:id', menuController.voteMenuItem);

module.exports = router;
