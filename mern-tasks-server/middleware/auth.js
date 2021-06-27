const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // Read the token from header
    const token = req.header('x-auth-token');

    // Check if the token exists
    if (!token) return res.status(401).json({ msg: "Unauthorized: No Token sent" });

    // Validate the token
    try {
        const validateToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.user = validateToken.user;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Unauthorized: Invalid Token" });
    }
}