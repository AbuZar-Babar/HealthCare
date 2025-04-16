const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Prescription = sequelize.define('Prescription', {
  Prescription_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Appointment_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Appointment',
      key: 'Appointment_ID'
    }
  },
  Doctor_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Doctor',
      key: 'Doctor_ID'
    }
  },
  Patient_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Patient',
      key: 'Patient_ID'
    }
  },
  Pharmacy_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Pharmacy',
      key: 'Pharmacy_ID'
    }
  },
  Date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Medication_Details: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  Notes: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'Prescription',
  timestamps: false
});

module.exports = Prescription;
