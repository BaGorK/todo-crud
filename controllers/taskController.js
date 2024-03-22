exports.getAllTasks = (req, res) => {
  res.send('All Tasks');
};

exports.createTask = (req, res) => {
  res.send('create new task');
};

exports.updateTask = (req, res) => {
  res.send('update new task');
};

exports.deleteTask = (req, res) => {
  res.send('task deleted');
};
