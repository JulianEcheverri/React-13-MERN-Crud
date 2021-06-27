const Task = require('../models/Task');
const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createTask = async (req, res) => {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });

    try {
        const { projectId } = req.body;
        // Verify project
        let project = await Project.findById(projectId);

        // Check if project exists
        if (!project) return res.status(404).json({ msg: "Project not found" });

        // Check userCreator
        if (project.userCreator.toString() !== req.user.id) res.status(401).json({ msg: "Unauthorized: No able to create Task" });

        // Validate task
        let task = new Task(req.body);

        // Save task in db
        await task.save();

        res.json({ task });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.getTasksByProject = async (req, res) => {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });

    try {
        const { projectId } = req.query;
        // Verify project
        let project = await Project.findById(projectId);

        // Check if project exists
        if (!project) return res.status(404).json({ msg: "Project not found" });

        // Check userCreator
        if (project.userCreator.toString() !== req.user.id) res.status(401).json({ msg: "Unauthorized: No able to get Tasks" });

        const tasks = await Task.find({ projectId }).sort({ logDate: -1 });
        res.json({ tasks });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.updateTask = async (req, res) => {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });

    try {
        const { projectId, name, completed } = req.body;

        // Verify id Task
        let task = await Task.findById(req.params.id);

        // Check if Task exists
        if (!task) return res.status(404).json({ msg: "Task not found" });

        // Verify project
        let project = await Project.findById(projectId);

        // Check userCreator
        if (project.userCreator.toString() !== req.user.id) res.status(401).json({ msg: "Unauthorized: No able to update Task" });

        const newTask = {};
        newTask.name = name;
        newTask.completed = completed;

        // Update task
        task = await Task.findOneAndUpdate({ _id: req.params.id }, newTask, { new: true });
        res.json(task);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.deleteTask = async (req, res) => {
    try {
        // Verify id task
        let task = await Task.findById(req.params.id);

        // Check if task exists
        if (!task) return res.status(404).json({ msg: "Task not found" });

        const { projectId } = req.query;

        // Verify project
        let project = await Project.findById(projectId);

        // Check userCreator
        if (project.userCreator.toString() !== req.user.id) res.status(401).json({ msg: "Unauthorized: No able to delete Task" });

        // Update task
        await Task.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "Task deleted successful" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}