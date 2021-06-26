const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const taskController = require('../controllers/taskController');
// Import middleware
const auth = require('../middleware/auth');

// Validations
const taskCreationValidationArray = [
    check('name', 'Name is required').not().isEmpty(),
    check('projectId', 'ProjectId is required').not().isEmpty(),
];

const taskGetValidationArray = [
    check('projectId', 'ProjectId is required').not().isEmpty()
];

const taskUpdateValidationArray = [
    check('projectId', 'ProjectId is required').not().isEmpty(),
    check('name', 'Name is required').not().isEmpty(),
    check('completed', 'Completed is required').not().isEmpty(),
];

// Create task
// api/tasks
router.post('/', auth, taskCreationValidationArray, taskController.createTask);

// Get tasks by projectId
// api/tasks
router.get('/', auth, taskGetValidationArray, taskController.getTasksByProject);

// Update task
// api/tasks/id
router.put('/:id', auth, taskUpdateValidationArray, taskController.updateTask);

// Delete task
// api/tasks/id
router.delete('/:id', auth, taskGetValidationArray, taskController.deleteTask);

module.exports = router;