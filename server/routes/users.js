const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { check } = require('express-validator')

// Validations
const userCreationValidationArray = [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email no valid').isEmail(),
    check('password', 'Password length should be at least 6 characters').isLength({ min: 6 })
];

// Create an user
// api/users
router.post('/', userCreationValidationArray, userController.createUser);

module.exports = router;