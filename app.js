const express = require('express');
const taskRouter = require('./routes/tasksRoute');

const app = express();

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRouter);

module.exports = app;
