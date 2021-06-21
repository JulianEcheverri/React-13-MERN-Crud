const express = require('express');
const connectToDB = require('./config/db');

// Create server
const app = express();

// Database connection
connectToDB();

// Assign the port
const PORT = process.env.PORT || 4000;

// Set routes
app.get('/', (req, res) => {
    res.send('It works');
});

// Run the server
app.listen(PORT, () => {
    console.log(`Server runing at port: ${PORT}`);
});