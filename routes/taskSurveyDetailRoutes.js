const express = require('express');
const multer = require('multer');
const TaskSurveyDetailController = require('../controllers/TTaskSurveyDetailController');

const router = express.Router();

// Set up multer for file upload
const upload = multer({ dest: 'uploads/temp/' });

// Define routes
router.get('/', TaskSurveyDetailController.index);
router.post('/', upload.single('jawaban'), TaskSurveyDetailController.store);  // Handle file upload
router.get('/:id', TaskSurveyDetailController.show);
router.put('/:id', TaskSurveyDetailController.update);
router.delete('/:id', TaskSurveyDetailController.destroy);
// Route to get survey details by task_id
router.get('/task-survey-data', async (req, res) => {
    const { task_id } = req.query;

    if (!task_id) {
        return res.status(422).json({ error: 'task_id is required' });
    }

    try {
        // Retrieve survey details based on task_id
        const details = await TaskSurveyDetailController.findByTaskId(task_id);

        // Return survey details if found, or an empty array if none are found
        res.json(details);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching task survey details', message: error.message });
    }
});

module.exports = router;
