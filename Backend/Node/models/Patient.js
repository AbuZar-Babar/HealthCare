const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Patient = sequelize.define('Patient', {
  Patient_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Date_of_Birth: {
    type: DataTypes.DATE,
    allowNull: false
  },
  Gender: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  Contact_Info: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  Password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Patient',
  timestamps: false
});

console.log(Patient);

module.exports = Patient;
