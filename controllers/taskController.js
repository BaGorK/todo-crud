exports.getAllTasks = (req, res) => {
  return res.send('All Tasks');
};

exports.getTask = (req, res) => {
  return res.json({
    id: req.params.id,
  });
};

exports.createTask = (req, res) => {
  const newTask = { ...req.body, id: '1', completed: true };

  return res.status(200).json({
    status: 'succes',
    data: {
      task: newTask,
    },
  });
};

exports.updateTask = (req, res) => {
  return res.send('update new task');
};

exports.deleteTask = (req, res) => {
  return res.send('task deleted');
};
