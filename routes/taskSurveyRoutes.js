const express = require('express');
const router = express.Router();
const TaskSurveyController = require('../controllers/TaskSurveyController');

// Define the API routes
router.get('/', TaskSurveyController.index);
router.post('/', TaskSurveyController.store);
router.get('/:idDir', TaskSurveyController.show);
router.put('/:taskId', TaskSurveyController.update);
router.delete('/:id', TaskSurveyController.destroy);

module.exports = router;
