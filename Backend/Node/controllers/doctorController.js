const Doctor = require('../models/Doctor');
const { Op } = require('sequelize');

// Create a new doctor
exports.createDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.create(req.body);
    res.status(201).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all doctors
exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.findAll();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single doctor by ID
exports.getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findByPk(req.params.id);
    if (!doctor) {
      return res.status(404).json({ error: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a doctor
exports.updateDoctor = async (req, res) => {
  try {
    const [updated] = await Doctor.update(req.body, {
      where: { Doctor_ID: req.params.id }
    });
    if (updated) {
      const updatedDoctor = await Doctor.findByPk(req.params.id);
      return res.status(200).json(updatedDoctor);
    }
    throw new Error('Doctor not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a doctor
exports.deleteDoctor = async (req, res) => {
  try {
    const deleted = await Doctor.destroy({
      where: { Doctor_ID: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Doctor not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
