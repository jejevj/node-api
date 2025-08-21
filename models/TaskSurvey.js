const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the TaskSurvey model
const TaskSurvey = sequelize.define('TaskSurvey', {
    TaskID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    iduser: DataTypes.INTEGER,
    identitas_no: DataTypes.STRING,
    nama_surveyor: DataTypes.STRING,
    ID_Dir: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    StatusTask: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    StatusTanah: DataTypes.STRING,
    KetSurvey: DataTypes.STRING,
    KetVerify: DataTypes.STRING,
    idkuisoner: DataTypes.INTEGER,
    verifikator: DataTypes.STRING,
    verified_at: DataTypes.DATE,
    CreatedDate: DataTypes.DATE
}, {
    tableName: 't_task_survey',
    timestamps: false
});

module.exports = TaskSurvey;
