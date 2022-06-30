const { Router } = require('express');
const router = Router();

const {getTask, saveTask, deleteTask, updateTask} = require('../controllers/controller');

router.get('/get-task', getTask);
router.post('/save-task', saveTask);
router.post('/delete-task', deleteTask);
router.post('/update-task', updateTask);

module.exports = router;
