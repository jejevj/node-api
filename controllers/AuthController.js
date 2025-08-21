const crypto = require('crypto');
const Tuser = require('../models/Tuser');

// Predefined custom token hash for comparison
const validTokenHash = '32161d706e3ae46ff02084ff33807e6e';

// Handle the login request
exports.login = async (req, res) => {
  const { user_id, password, token } = req.body;

  // Validate the incoming request
  if (!user_id || !password) {
    return res.status(422).json({ error: 'user_id and password are required' });
  }

  // Check if the token is provided and if it matches the predefined hash
  if (!token || token !== validTokenHash) {
    return res.status(403).json({ error: 'Invalid token, please provide a valid token' });
  }

  try {
    // Retrieve the user by user_id
    const user = await Tuser.findOne({ where: { user_id } });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    // Hash the provided password using MD5
    const hashedPassword = crypto.createHash('md5').update(password).digest('hex');

    // Check if the MD5 hashed password matches the one in the database
    if (hashedPassword !== user.user_password) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Check if the user is a Surveyor
    if (user.is_surveyor !== 'Y') {
      return res.status(403).json({ error: 'Only Surveyor accounts can log in' });
    }

    // If successful, return user data in the response structure
    return res.status(200).json({
      message: 'Login successful',
      user: {
        user_id: user.user_id,
        user_fullname: user.user_fullname,
        user_grup: user.user_grup,
        list_office: user.list_office,
        approve: user.approve,
        profpict: user.profpict,
        gender: user.gender,
        notelp: user.notelp,
        alamat: user.alamat,
        email: user.email,
        remarks: user.remarks,
        jabatan_nama: user.jabatan_nama,
        jabatan_tmt: user.jabatan_tmt,
        golongan_abbr: user.golongan_abbr,
        is_subscribe: user.is_subscribe,
        is_surveyor: user.is_surveyor,
        provinsi_kode: user.provinsi_kode,
        kabkota_kode: user.kabkota_kode,
      },
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
