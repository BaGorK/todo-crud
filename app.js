const express = require('express');
const taskRouter = require('./routes/tasksRoute');
const notFound = require('./middleware/not-found');
const app = express();

// middleware
app.use(express.static(`./public`));
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRouter);
app.use(notFound);

module.exports = app;
