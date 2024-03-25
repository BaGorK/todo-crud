const { CustomAPIError, createCustomError } = require('../errors/custom-error');
const asyncWrapper = require('../middleware/async-wrapper');
const Task = require('../models/TaskModel');

exports.getAllTasks = asyncWrapper(async (req, res, next) => {
  const tasks = await Task.find();

  return res.status(200).json({
    status: 'success',
    length: tasks.length,
    data: {
      tasks,
    },
  });
});

exports.createTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.create(req.body);

  return res.status(201).json({
    status: 'succes',
    data: {
      task: task,
    },
  });
});

exports.getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findById(taskID);

  if (!task) {
    return next(
      createCustomError(`there is no task found with id: ${taskID}`, 404)
    );
  }

  return res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.updateTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return next(
      createCustomError(`there is no task found with id: ${req.params.id}`, 404)
    );
  }

  return res.status(200).json({
    status: 'success',
    data: {
      task,
    },
  });
});

exports.deleteTask = asyncWrapper(async (req, res, next) => {
  const task = await Task.findByIdAndDelete(req.params.id);

  if (!task) {
    return createCustomError(
      `there is no task found with id: ${req.params.id}`,
      404
    );
  }

  return res.status(204).json({ status: 'success' });
});
