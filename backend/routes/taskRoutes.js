const express = require('express');
const router = express.Router();
const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask
} = require('../controllers/taskController');
const { protect } = require('../middleware/auth');
const { admin } = require('../middleware/roleCheck');
const {
  validateTask,
  handleValidationErrors
} = require('../validation/validation');

// All task routes are protected
router.use(protect);

router.route('/')
  .get(getTasks)
  .post(validateTask, handleValidationErrors, createTask);

router.route('/:id')
  .get(getTask)
  .put(validateTask, handleValidationErrors, updateTask)
  .delete(deleteTask);

// Admin only route example
router.get('/admin/all', protect, admin, (req, res) => {
  res.json({ message: 'Admin only route' });
});

module.exports = router;
