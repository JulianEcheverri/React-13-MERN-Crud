const Project = require('../models/Project');
const { validationResult } = require('express-validator');

exports.createProject = async (req, res) => {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });

    try {
        const { name } = req.body;
        // Validate project
        let project = await Project.findOne({ name });
        if (project) return res.status(400).json({ msg: "Project already exists" });

        // Set project
        project = new Project(req.body);

        // Set user creator in project
        project.userCreator = req.user.id;

        // Save project in db
        await project.save();

        res.json({ msg: "Project created" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.getProjects = async (req, res) => {
    try {
        console.log(req.user);
        const projects = await Project.find({ userCreator: req.user.id }).sort({ logDate: -1 });
        res.json({ projects });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.updateProject = async (req, res) => {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });

    try {
        const { name } = req.body;
        const newProject = {};

        if (name) newProject.name = name;

        // Verify id project
        let project = await Project.findById(req.params.id);

        // Check if project exists
        if (!project) return res.status(404).json({ msg: "Project not found" });

        // Check userCreator
        if (project.userCreator.toString() !== req.user.id) res.status(401).json({ msg: "Unauthorized: No able to update project" });

        // Update project
        project = await Project.findOneAndUpdate({ _id: req.params.id }, { $set: newProject }, { new: true });
        res.json(project);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}

exports.deleteProject = async (req, res) => {
    try {
        // Verify id project
        let project = await Project.findById(req.params.id);

        // Check if project exists
        if (!project) return res.status(404).json({ msg: "Project not found" });

        // Check userCreator
        if (project.userCreator.toString() !== req.user.id) res.status(401).json({ msg: "Unauthorized: No able to update project" });

        // Update project
        await Project.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: "Project deleted successful" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
}