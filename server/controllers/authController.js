const User = require('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.authUser = async (req, res) => {
    // Validations
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });

    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: "User does not exists" });

        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) return res.status(400).json({ msg: "Password is not valid" });

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
    }
}