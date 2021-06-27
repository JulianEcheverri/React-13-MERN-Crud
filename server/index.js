const express = require('express');
const connectToDB = require('./config/db');
const cors = require('cors');

// Create server
const app = express();

// Database connection
connectToDB();

// Enabling express.json
app.use(express.json({ extended: true }));

// Enablig Cors
app.use(cors());

// Assign the port
const PORT = process.env.PORT || 4000;

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/projects', require('./routes/project'));
app.use('/api/tasks', require('./routes/task'));

// Run the server
app.listen(PORT, () => {
    console.log(`Server runing at port: ${PORT}`);
});