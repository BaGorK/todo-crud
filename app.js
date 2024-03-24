const express = require('express');
const taskRouter = require('./routes/tasksRoute');
const mongoose = require('mongoose');

// const dotenv = require('dotenv');
// dotenv.config(`${__dirname}/config.env`);

const app = express();
// const databaseUrl = process.env.DB.replace('<PASSWORD>', process.env.DB_PASS);

mongoose
  .connect(
    'mongodb+srv://edmealem:1234@task-manager-crud.qywqfbm.mongodb.net/task-manager?retryWrites=true&w=majority'
  )
  .then(() => console.log('database succefully connected'));

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRouter);

const port = 3000;

// server
app.listen(port, console.log(`Server is listening on port ${port}`));
