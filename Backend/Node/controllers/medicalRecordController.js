const Medical_Record = require('../models/Medical_Record');

// Create a new medical record
exports.createMedicalRecord = async (req, res) => {
  try {
    const medicalRecord = await Medical_Record.create(req.body);
    res.status(201).json(medicalRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all medical records
exports.getAllMedicalRecords = async (req, res) => {
  try {
    const medicalRecords = await Medical_Record.findAll();
    res.status(200).json(medicalRecords);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single medical record by ID
exports.getMedicalRecordById = async (req, res) => {
  try {
    const medicalRecord = await Medical_Record.findByPk(req.params.id);
    if (!medicalRecord) {
      return res.status(404).json({ error: 'Medical record not found' });
    }
    res.status(200).json(medicalRecord);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a medical record
exports.updateMedicalRecord = async (req, res) => {
  try {
    const [updated] = await Medical_Record.update(req.body, {
      where: { Record_ID: req.params.id }
    });
    if (updated) {
      const updatedMedicalRecord = await Medical_Record.findByPk(req.params.id);
      return res.status(200).json(updatedMedicalRecord);
    }
    throw new Error('Medical record not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a medical record
exports.deleteMedicalRecord = async (req, res) => {
  try {
    const deleted = await Medical_Record.destroy({
      where: { Record_ID: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Medical record not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
