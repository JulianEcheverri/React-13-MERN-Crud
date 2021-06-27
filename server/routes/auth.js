const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

// Validations
const authValidationArray = [
    check('email', 'Email no valid').isEmail(),
    check('password', 'Password length should be at least 6 characters').isLength({ min: 6 })
];

// Log in
// api/auth
router.post('/', authValidationArray, authController.authUser);

// Get user authenticated
router.get('/', auth, authController.getUserAuthenticated);

module.exports = router;