const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Schedule = sequelize.define('Schedule', {
  Schedule_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Doctor_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Doctor',
      key: 'Doctor_ID'
    }
  },
  Day: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  Start_Time: {
    type: DataTypes.TIME,
    allowNull: false
  },
  End_Time: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, {
  tableName: 'Schedule',
  timestamps: false
});

module.exports = Schedule;
