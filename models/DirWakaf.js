const { DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Your Sequelize database connection

const DirWakaf = sequelize.define('DirWakaf', {
  ID_Dir: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,  // This will auto-increment the ID
  },
  Lokasi_Prop: {
    type: DataTypes.STRING,
    allowNull: false,  // Field is required
  },
  Lokasi_Kab: {
    type: DataTypes.STRING,
    allowNull: false,  // Field is required
  },
  Lokasi_Kec: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  Lokasi_Kel: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  Lokasi_Desa: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  Kua_Kode: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  Luas: {
    type: DataTypes.DOUBLE,
    allowNull: true,  // This field is optional
  },
  Penggunaan: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  Wakif: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  Nadzir: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  pendidikan: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  Status: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  S_No: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  S_Tgl: {
    type: DataTypes.DATE,
    allowNull: true,  // This field is optional
  },
  AIW_No: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  AIW_Tgl: {
    type: DataTypes.DATE,
    allowNull: true,  // This field is optional
  },
  Lat: {
    type: DataTypes.DOUBLE,
    allowNull: true,  // This field is optional
  },
  Longi: {
    type: DataTypes.DOUBLE,
    allowNull: true,  // This field is optional
  },
  Ket: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  waktu: {
    type: DataTypes.DATE,
    allowNull: true,  // This field is optional
  },
  potensi_id: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  luas_bangunan: {
    type: DataTypes.FLOAT,
    allowNull: true,  // This field is optional
  },
  verifikasi: {
    type: DataTypes.INTEGER,
    allowNull: true,  // This field is optional
  },
  id_b_pemerintah: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  },
  user_survey: {
    type: DataTypes.STRING,
    allowNull: true,  // This field is optional
  }
}, {
  tableName: 'dir_wakaf',  // Name of the table in your database
  timestamps: false,  // Assuming you don't have timestamp fields like `created_at` and `updated_at`
});

module.exports = DirWakaf;
