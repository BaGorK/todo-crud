const express = require('express');
const taskRouter = require('./routes/tasksRoute');
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config(`${__dirname}/.env`);

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('database connected successfully');
  })
  .catch((err) => console.log(err));

// middleware
app.use(express.json());

// routes
app.use('/api/v1/tasks', taskRouter);

const port = 3000;

// server
app.listen(port, console.log(`Server is listening on port ${port}`));
