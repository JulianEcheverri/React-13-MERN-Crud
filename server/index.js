const express = require('express');
const connectToDB = require('./config/db');

// Create server
const app = express();

// Database connection
connectToDB();

// Enablin express.json
app.use(express.json({ extended: true }));

// Assign the port
const PORT = process.env.PORT || 4000;

app.use('/api/user', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

// Run the server
app.listen(PORT, () => {
    console.log(`Server runing at port: ${PORT}`);
});