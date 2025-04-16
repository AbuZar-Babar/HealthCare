const Prescription = require('../models/Prescription');

// Create a new prescription
exports.createPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.create(req.body);
    res.status(201).json(prescription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all prescriptions
exports.getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.findAll();
    res.status(200).json(prescriptions);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single prescription by ID
exports.getPrescriptionById = async (req, res) => {
  try {
    const prescription = await Prescription.findByPk(req.params.id);
    if (!prescription) {
      return res.status(404).json({ error: 'Prescription not found' });
    }
    res.status(200).json(prescription);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a prescription
exports.updatePrescription = async (req, res) => {
  try {
    const [updated] = await Prescription.update(req.body, {
      where: { Prescription_ID: req.params.id }
    });
    if (updated) {
      const updatedPrescription = await Prescription.findByPk(req.params.id);
      return res.status(200).json(updatedPrescription);
    }
    throw new Error('Prescription not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a prescription
exports.deletePrescription = async (req, res) => {
  try {
    const deleted = await Prescription.destroy({
      where: { Prescription_ID: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Prescription not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
