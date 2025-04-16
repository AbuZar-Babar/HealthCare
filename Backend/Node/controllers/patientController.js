const Patient = require('../models/Patient');

// Create a new patient
exports.createPatient = async (req, res) => {
  try {
    console.log("Error from here");
    const patient = await Patient.create(req.body);
    res.status(201).json(patient);
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(400).json({ error: error.message });
  }
};

// Get all patients
exports.getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single patient by ID
exports.getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findByPk(req.params.id);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }
    res.status(200).json(patient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a patient
exports.updatePatient = async (req, res) => {
  try {
    const [updated] = await Patient.update(req.body, {
      where: { Patient_ID: req.params.id }
    });
    if (updated) {
      const updatedPatient = await Patient.findByPk(req.params.id);
      return res.status(200).json(updatedPatient);
    }
    throw new Error('Patient not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a patient
exports.deletePatient = async (req, res) => {
  try {
    const deleted = await Patient.destroy({
      where: { Patient_ID: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Patient not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
