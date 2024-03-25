const Task = require('../models/TaskModel');

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    return res.status(200).json({
      status: 'success',
      length: tasks.length,
      data: {
        tasks,
      },
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: err,
    });
  }
};

exports.createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    return res.status(201).json({
      status: 'succes',
      data: {
        task: task,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      error: err,
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    return res.status(200).json({
      status: 'success',
      data: {
        task,
      },
    });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      error: err,
    });
  }
};

exports.updateTask = (req, res) => {
  return res.send('update new task');
};

exports.deleteTask = (req, res) => {
  return res.send('task deleted');
};
