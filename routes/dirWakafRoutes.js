const express = require('express');
const router = express.Router();
const DirWakafController = require('../controllers/DirWakafController');

// Route to filter and get all DirWakaf records (POST for filtering)
router.post('/dir-wakaf', DirWakafController.index);

// Route to get a specific DirWakaf record by ID
router.get('/dir-wakaf/:id', DirWakafController.show);

// Route to update a specific DirWakaf record by ID
router.put('/dir-wakaf/:id', DirWakafController.update);

// Route to delete a specific DirWakaf record by ID
router.delete('/dir-wakaf/:id', DirWakafController.destroy);

module.exports = router;
