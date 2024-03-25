const Task = require('../models/TaskModel');

exports.getAllTasks = async (req, res) => {
  const tasks = await Task.find();

  return res.status(200).json({
    status: 'success',
    length: tasks.length,
    data: {
      tasks,
    },
  });
};

exports.getTask = (req, res) => {
  return res.json({
    id: req.params.id,
  });
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
    console.log(err);

    res.status(400).json({
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
