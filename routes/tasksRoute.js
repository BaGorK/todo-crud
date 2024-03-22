const express = require('express');
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');

const router = express.Router();

router
  .route('/')
  .get(getAllTasks)
  .post(createTask)
  .patch(updateTask)
  .delete(deleteTask);

module.exports = router;
