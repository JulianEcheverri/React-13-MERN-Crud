const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');

// Validations
const userCreationValidationArray = [
    check('email', 'Email no valid').isEmail(),
    check('password', 'Password length should be at least 6 characters').isLength({ min: 6 })
];

// Auth
// api/auth
router.post('/', userCreationValidationArray, authController.authUser);

module.exports = router;