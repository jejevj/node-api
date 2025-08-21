const DirWakaf = require('../models/DirWakaf');

// Get all DirWakaf records (with filtering by Lokasi_Prop and Lokasi_Kab)
exports.index = async (req, res) => {
  const { Lokasi_Prop, Lokasi_Kab } = req.body; // Expecting filters in the body for POST

  // Validate required parameters
  if (!Lokasi_Prop || !Lokasi_Kab) {
    return res.status(422).json({
      error: 'Validation Error',
      message: {
        Lokasi_Prop: 'Lokasi_Prop is required',
        Lokasi_Kab: 'Lokasi_Kab is required',
      },
    });
  }

  try {
    // Fetch data filtered by Lokasi_Prop and Lokasi_Kab
    const dirWakafs = await DirWakaf.findAll({
      where: {
        Lokasi_Prop,
        Lokasi_Kab,
      },
    });

    return res.json(dirWakafs);  // Return filtered data
  } catch (error) {
    return res.status(500).json({
      error: 'Database Query Error',
      message: error.message,
    });
  }
};

// Get a specific DirWakaf record by ID
exports.show = async (req, res) => {
  try {
    const dirWakaf = await DirWakaf.findByPk(req.params.id);

    if (!dirWakaf) {
      return res.status(404).json({ message: 'Record not found' });
    }

    return res.json(dirWakaf);  // Return the found record
  } catch (error) {
    return res.status(500).json({
      error: 'Database Query Error',
      message: error.message,
    });
  }
};

// Update a specific DirWakaf record by ID
exports.update = async (req, res) => {
  try {
    const dirWakaf = await DirWakaf.findByPk(req.params.id);

    if (!dirWakaf) {
      return res.status(404).json({ message: 'Record not found' });
    }

    await dirWakaf.update(req.body);  // Update the record
    return res.json(dirWakaf);  // Return the updated record
  } catch (error) {
    return res.status(500).json({
      error: 'Database Query Error',
      message: error.message,
    });
  }
};

// Delete a specific DirWakaf record by ID
exports.destroy = async (req, res) => {
  try {
    const dirWakaf = await DirWakaf.findByPk(req.params.id);

    if (!dirWakaf) {
      return res.status(404).json({ message: 'Record not found' });
    }

    await dirWakaf.destroy();  // Delete the record
    return res.json({ message: 'Record deleted successfully' });
  } catch (error) {
    return res.status(500).json({
      error: 'Database Query Error',
      message: error.message,
    });
  }
};
