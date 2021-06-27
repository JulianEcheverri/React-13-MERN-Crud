const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const projectController = require('../controllers/projectController');
// Import middleware
const auth = require('../middleware/auth');

// Validations
const projectCreationValidationArray = [
    check('name', 'Name is required').not().isEmpty(),
];

// Create project
// api/projects
router.post('/', auth, projectCreationValidationArray, projectController.createProject);

// Get projects
// api/projects
router.get('/', auth, projectController.getProjects);

// Update project
// api/projects/id
router.put('/:id', auth, projectCreationValidationArray, projectController.updateProject);

// Delete project
// api/projects/id
router.delete('/:id', auth, projectController.deleteProject);

module.exports = router;