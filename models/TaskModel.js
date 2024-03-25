const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'task must have a name'],
    trim: true,
    maxlength: [20, 'name cannot have over 20 characters'],
    minlength: [5, 'name can not have less than 5 characters'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model('Task', TaskSchema);
