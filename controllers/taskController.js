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
    const { id: taskID } = req.params;
    const task = await Task.findById(taskID);

    if (!task)
      return res.status(404).json({
        status: 'fail',
        msg: `there is no task found with id: ${taskID}`,
      });

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

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task)
      return res.status(404).json({
        status: 'fail',
        msg: `there is no task found with id: ${taskID}`,
      });

    return res.status(204).json({ status: 'success' });
  } catch (err) {
    return res.status(400).json({
      status: 'fail',
      error: err,
    });
  }
};
