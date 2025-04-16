const Pharmacy = require('../models/Pharmacy');

// Create a new pharmacy
exports.createPharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.create(req.body);
    res.status(201).json(pharmacy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all pharmacies
exports.getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.findAll();
    res.status(200).json(pharmacies);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single pharmacy by ID
exports.getPharmacyById = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findByPk(req.params.id);
    if (!pharmacy) {
      return res.status(404).json({ error: 'Pharmacy not found' });
    }
    res.status(200).json(pharmacy);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update a pharmacy
exports.updatePharmacy = async (req, res) => {
  try {
    const [updated] = await Pharmacy.update(req.body, {
      where: { Pharmacy_ID: req.params.id }
    });
    if (updated) {
      const updatedPharmacy = await Pharmacy.findByPk(req.params.id);
      return res.status(200).json(updatedPharmacy);
    }
    throw new Error('Pharmacy not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a pharmacy
exports.deletePharmacy = async (req, res) => {
  try {
    const deleted = await Pharmacy.destroy({
      where: { Pharmacy_ID: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Pharmacy not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
