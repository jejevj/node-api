const TaskSurvey = require('../models/TaskSurvey');

// Get all surveys
exports.index = async (req, res) => {
    try {
        const surveys = await TaskSurvey.findAll();
        res.json(surveys);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching surveys', error });
    }
};

// Store a new survey or update an existing one
exports.store = async (req, res) => {
    try {
        const data = req.body;

        // Check if the survey already exists
        const [survey, created] = await TaskSurvey.findOrCreate({
            where: {
                TaskID: data.TaskID,
                ID_Dir: data.ID_Dir
            },
            defaults: data
        });

        // If the survey already exists, update it
        if (!created) {
            await survey.update(data);
        }

        res.status(201).json(survey);
    } catch (error) {
        res.status(500).json({ message: 'Error creating or updating survey', error });
    }
};

// Show a survey by ID_Dir
exports.show = async (req, res) => {
    const { idDir } = req.params;

    try {
        const survey = await TaskSurvey.findOne({ where: { ID_Dir: idDir } });
        if (!survey) {
            return res.status(404).json({ message: 'Survey not found' });
        }

        res.json(survey);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching survey', error });
    }
};

// Update an existing survey
exports.update = async (req, res) => {
    const { taskId } = req.params;
    const data = req.body;

    try {
        const survey = await TaskSurvey.findOne({ where: { TaskID: taskId } });

        if (survey) {
            await survey.update(data);
            res.json(survey);
        } else {
            const newSurvey = await TaskSurvey.create(data);
            res.status(201).json(newSurvey);
        }
    } catch (error) {
        res.status(500).json({ message: 'Error updating survey', error });
    }
};

// Delete a survey
exports.destroy = async (req, res) => {
    const { id } = req.params;

    try {
        const survey = await TaskSurvey.findByPk(id);
        if (!survey) {
            return res.status(404).json({ message: 'Survey not found' });
        }

        await survey.destroy();
        res.json({ message: 'Deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting survey', error });
    }
};

// Find all details by task_id
exports.findByTaskId = async (task_id) => {
    try {
        // Query the database to find all survey details where task_id matches
        const details = await TTaskSurveyDetail.findAll({
            where: { task_id: task_id }
        });

        return details;
    } catch (error) {
        throw new Error('Error fetching details by task_id');
    }
};