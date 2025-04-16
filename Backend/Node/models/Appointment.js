const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Appointment = sequelize.define('Appointment', {
  Appointment_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Patient_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Patient',
      key: 'Patient_ID'
    }
  },
  Doctor_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Doctor',
      key: 'Doctor_ID'
    }
  },
  Appointment_Date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Reason: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  Status: {
    type: DataTypes.STRING(50),
    allowNull: true
  }
}, {
  tableName: 'Appointment',
  timestamps: false
});

module.exports = Appointment;
