const exppress = require('express');
const router = exppress.Router();
const { getAllTasks,
  createTask,  
  getTask,
  updateTask, 
  deleteTask
} = require('../controllers/task');


router.route('/').get(getAllTasks).post(createTask); 
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;