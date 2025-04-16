const express = require('express');
const router = express.Router();
const pharmacyController = require('../controllers/pharmacyController');

// Pharmacy routes
router.post('/', pharmacyController.createPharmacy);
router.get('/', pharmacyController.getAllPharmacies);
router.get('/:id', pharmacyController.getPharmacyById);
router.put('/:id', pharmacyController.updatePharmacy);
router.delete('/:id', pharmacyController.deletePharmacy);

module.exports = router;
