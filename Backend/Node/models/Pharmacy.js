const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Pharmacy = sequelize.define('Pharmacy', {
  Pharmacy_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Latitude: {
    type: DataTypes.DECIMAL(9, 6),
    allowNull: true
  },
  Longitude: {
    type: DataTypes.DECIMAL(9, 6),
    allowNull: true
  },
  Contact_Info: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'Pharmacy',
  timestamps: false
});

module.exports = Pharmacy;
