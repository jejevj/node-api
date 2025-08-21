const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const TTaskSurveyDetail = sequelize.define('TTaskSurveyDetail', {
  task_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 't_task_survey',
      key: 'TaskID'
    }
  },
  id_pertanyaan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  group_pertanyaan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipe_pertanyaan: {
    type: DataTypes.STRING,
    allowNull: false
  },
  jawaban: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 't_task_survey_details',
  timestamps: false
});

module.exports = TTaskSurveyDetail;
