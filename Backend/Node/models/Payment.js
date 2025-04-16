const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Payment = sequelize.define('Payment', {
  Payment_ID: {
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
  Patient_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Patient',
      key: 'Patient_ID'
    }
  },
  Amount: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  Payment_Method: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  Status: {
    type: DataTypes.STRING(50),
    allowNull: false
  }
}, {
  tableName: 'Payment',
  timestamps: false
});

module.exports = Payment;
