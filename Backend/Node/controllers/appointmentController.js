const Appointment = require('../models/Appointment');

// Create a new appointment
exports.createAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.create(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all appointments
exports.getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll();
    res.status(200).json(appointments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a single appointment by ID
exports.getAppointmentById = async (req, res) => {
  try {
    const appointment = await Appointment.findByPk(req.params.id);
    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }
    res.status(200).json(appointment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Update an appointment
exports.updateAppointment = async (req, res) => {
  try {
    const [updated] = await Appointment.update(req.body, {
      where: { Appointment_ID: req.params.id }
    });
    if (updated) {
      const updatedAppointment = await Appointment.findByPk(req.params.id);
      return res.status(200).json(updatedAppointment);
    }
    throw new Error('Appointment not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete an appointment
exports.deleteAppointment = async (req, res) => {
  try {
    const deleted = await Appointment.destroy({
      where: { Appointment_ID: req.params.id }
    });
    if (deleted) {
      return res.status(204).send();
    }
    throw new Error('Appointment not found');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
