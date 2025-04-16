const Clinic = require('../models/Clinic');
const { Op } = require('sequelize');

// Create a new clinic
exports.createClinic = async (req, res) => {
  try {
    const clinic = await Clinic.create(req.body);
    res.status(201).json(clinic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all clinics
exports.getAllClinics = async (req, res) => {
  try {
    const clinics = await Clinic.findAll();
    res.status(200).json(clinics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single clinic by ID
exports.getClinicById = async (req, res) => {
  try {
    const clinic = await Clinic.findByPk(req.params.id);
    if (!clinic) {
      return res.status(404).json({ error: 'Clinic not found' });
    }
    res.status(200).json(clinic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a clinic
exports.updateClinic = async (req, res) => {
  try {
    const [updated] = await Clinic.update(req.body, {
      where: { Clinic_ID: req.params.id }
    });
    if (updated) {
      const updatedClinic = await Clinic.findByPk(req.params.id);
      return res.status(200).json(updatedClinic);
    }
    throw new Error('Clinic not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a clinic
exports.deleteClinic = async (req, res) => {
  try {
    const deleted = await Clinic.destroy({
      where: { Clinic_ID: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Clinic not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
