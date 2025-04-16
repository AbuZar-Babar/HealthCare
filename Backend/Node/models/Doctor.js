const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Doctor = sequelize.define('Doctor', {
  Doctor_ID: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Specialization: {
    type: DataTypes.STRING,
    allowNull: true
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
  },
  Clinic_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Clinic',
      key: 'Clinic_ID'
    }
  }
}, {
  tableName: 'Doctor',
  timestamps: false
});

module.exports = Doctor;
