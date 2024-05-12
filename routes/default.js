const express = require('express');
const router = express.Router();
const defaultController = require('../controllers/defaultController');

router.get('/', defaultController.default);

module.exports = router;