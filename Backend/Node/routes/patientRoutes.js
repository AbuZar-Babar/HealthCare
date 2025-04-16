const express = require('express');
const router = express.Router();
const patientController = require('../controllers/patientController');

// Patient routes
console.log("Error from here");

router.post('/', patientController.createPatient);
router.get('/', patientController.getAllPatients);
router.get('/:id', patientController.getPatientById);
router.put('/:id', patientController.updatePatient);
router.delete('/:id', patientController.deletePatient);

module.exports = router;
