const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.createUser = async (req, res) => {
    try {
        // Validations
        const errors = validationResult(req);
        if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });

        const { email, password } = req.body;
        // Validate user
        let user = await User.findOne({ email });

        if (user) return res.status(400).json({ msg: "User already exists" });

        // Set user
        user = new User(req.body);

        // Hash password
        // Generates unique pass
        const salt = await bcryptjs.genSalt(10);
        user.password = await bcryptjs.hash(password, salt);

        // Save user in db
        await user.save();

        // Creates and sing JWT
        const payload = {
            user: {
                id: user.id
            }
        };

        jwt.sign(payload, process.env.JWT_SECRET_KEY, {
            expiresIn: 3600 // 1 hour
        }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });

    } catch (error) {
        console.log(error);
        res.status(400).send("Something went wrong");
    }
}