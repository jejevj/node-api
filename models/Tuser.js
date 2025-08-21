const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Database connection

const Tuser = sequelize.define('Tuser', {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  user_fullname: {
    type: DataTypes.STRING,
  },
  user_password: {
    type: DataTypes.STRING,
  },
  user_grup: {
    type: DataTypes.STRING,
  },
  list_office: {
    type: DataTypes.STRING,
  },
  approve: {
    type: DataTypes.STRING,
  },
  profpict: {
    type: DataTypes.STRING,
  },
  gender: {
    type: DataTypes.STRING,
  },
  notelp: {
    type: DataTypes.STRING,
  },
  alamat: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  remarks: {
    type: DataTypes.STRING,
  },
  jabatan_nama: {
    type: DataTypes.STRING,
  },
  jabatan_tmt: {
    type: DataTypes.STRING,
  },
  golongan_abbr: {
    type: DataTypes.STRING,
  },
  is_subscribe: {
    type: DataTypes.STRING,
  },
  is_surveyor: {
    type: DataTypes.STRING,
  },
  provinsi_kode: {
    type: DataTypes.STRING,
  },
  kabkota_kode: {
    type: DataTypes.STRING,
  },
}, {
  tableName: 'tuser', // Table name
  timestamps: false,  // Assuming the table does not have timestamps
});

module.exports = Tuser;
