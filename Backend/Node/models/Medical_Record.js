const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Medical_Record = sequelize.define('Medical_Record', {
  Record_ID: {
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
  Visit_Date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Diagnosis: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  Treatment: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'Medical_Record',
  timestamps: false
});

module.exports = Medical_Record;
