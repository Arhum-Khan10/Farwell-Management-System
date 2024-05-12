const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login routes
router.get('/login/student', authController.getStudentLogin);
router.post('/login/student', authController.postStudentLogin);
router.get('/login/teacher', authController.getTeacherLogin);
router.post('/login/teacher', authController.postTeacherLogin);

// Registration routes
router.get('/register/student', authController.getStudentRegister);
router.post('/register/student', authController.postStudentRegister);
router.get('/register/teacher', authController.getTeacherRegister);
router.post('/register/teacher', authController.postTeacherRegister);

// Logout route
router.get('/logout', authController.logout);

module.exports = router;
