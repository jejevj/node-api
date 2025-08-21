const TTaskSurveyDetail = require('../models/TTaskSurveyDetail');
const path = require('path');
const fs = require('fs');

// Get all survey details
exports.index = async (req, res) => {
  try {
    const details = await TTaskSurveyDetail.findAll();
    res.json(details);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching survey details', error });
  }
};

// Store a new survey detail
exports.store = async (req, res) => {
  try {
    const data = req.body;

    // Validate task_id
    const taskExists = await TTaskSurveyDetail.findOne({
      where: { task_id: data.task_id }
    });

    if (!taskExists) {
      return res.status(422).json({
        status: false,
        message: 'TaskID not found in t_task_survey.',
      });
    }

    // Normalize id_pertanyaan
    data.id_pertanyaan = data.id_pertanyaan.replace(/-\d+$/, '');

    // Handle file upload if present
    if (req.file) {
      const filename = `${Date.now()}_${req.file.originalname}`;
      const uploadPath = path.join(__dirname, '../uploads/answers', filename);

      fs.renameSync(req.file.path, uploadPath); // Move the file to the desired location
      data.jawaban = filename;  // store filename only
    }

    // Create the new survey detail
    const detail = await TTaskSurveyDetail.create(data);

    res.status(201).json({
      status: true,
      message: 'Success',
      data: detail,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error storing survey detail', error });
  }
};

// Show a specific survey detail by ID
exports.show = async (req, res) => {
  const { id } = req.params;
  
  try {
    const detail = await TTaskSurveyDetail.findByPk(id);

    if (!detail) {
      return res.status(404).json({ message: 'Detail not found' });
    }

    res.json(detail);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching survey detail', error });
  }
};

// Update a specific survey detail by ID
exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const detail = await TTaskSurveyDetail.findByPk(id);

    if (!detail) {
      return res.status(404).json({ message: 'Detail not found' });
    }

    if (data.task_id) {
      const taskExists = await TTaskSurveyDetail.findOne({
        where: { task_id: data.task_id }
      });

      if (!taskExists) {
        return res.status(422).json({
          status: false,
          message: 'TaskID not found in t_task_survey.',
        });
      }
    }

    await detail.update(data);
    res.json(detail);
  } catch (error) {
    res.status(500).json({ message: 'Error updating survey detail', error });
  }
};

// Delete a specific survey detail by ID
exports.destroy = async (req, res) => {
  const { id } = req.params;

  try {
    const detail = await TTaskSurveyDetail.findByPk(id);

    if (!detail) {
      return res.status(404).json({ message: 'Detail not found' });
    }

    await detail.destroy();
    res.json({ message: 'Deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting survey detail', error });
  }
};
