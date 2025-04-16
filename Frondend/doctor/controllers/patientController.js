const { Patient } = require('../models/patient');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.createPatient = async (req, res) => {
  try {
    const { Name, Date_of_Birth, Gender, Contact_Info, Email, Password } = req.body;

    // Validate required fields
    if (!Name || !Date_of_Birth || !Gender || !Email || !Password) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Check if email already exists
    const existingPatient = await Patient.findOne({ where: { Email } });
    if (existingPatient) {
      return res.status(409).json({ error: 'Email already in use' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(Password, saltRounds);

    // Create new patient
    const newPatient = await Patient.create({
      Name,
      Date_of_Birth: new Date(Date_of_Birth),
      Gender,
      Contact_Info,
      Email,
      Password: hashedPassword
    });

    // Return success response (excluding password)
    const { Password: _, ...patientData } = newPatient.toJSON();
    res.status(201).json(patientData);

  } catch (error) {
    console.error('Error creating patient:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
