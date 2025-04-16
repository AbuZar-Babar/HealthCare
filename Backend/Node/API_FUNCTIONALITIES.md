# Medical System API Documentation

## Base URL
`http://localhost:3000/api`

## Available Endpoints

### Clinics
- `GET /clinics` - Get all clinics
- `POST /clinics` - Create new clinic
- `GET /clinics/:id` - Get single clinic by ID
- `PUT /clinics/:id` - Update clinic by ID
- `DELETE /clinics/:id` - Delete clinic by ID

### Doctors
- `GET /doctors` - Get all doctors
- `POST /doctors` - Create new doctor
- `GET /doctors/:id` - Get single doctor by ID
- `PUT /doctors/:id` - Update doctor by ID
- `DELETE /doctors/:id` - Delete doctor by ID

### Patients
- `GET /patients` - Get all patients
- `POST /patients` - Create new patient
- `GET /patients/:id` - Get single patient by ID
- `PUT /patients/:id` - Update patient by ID
- `DELETE /patients/:id` - Delete patient by ID

### Pharmacies
- `GET /pharmacies` - Get all pharmacies
- `POST /pharmacies` - Create new pharmacy
- `GET /pharmacies/:id` - Get single pharmacy by ID
- `PUT /pharmacies/:id` - Update pharmacy by ID
- `DELETE /pharmacies/:id` - Delete pharmacy by ID

### Appointments
- `GET /appointments` - Get all appointments
- `POST /appointments` - Create new appointment
- `GET /appointments/:id` - Get single appointment by ID
- `PUT /appointments/:id` - Update appointment by ID
- `DELETE /appointments/:id` - Delete appointment by ID

### Prescriptions
- `GET /prescriptions` - Get all prescriptions
- `POST /prescriptions` - Create new prescription
- `GET /prescriptions/:id` - Get single prescription by ID
- `PUT /prescriptions/:id` - Update prescription by ID
- `DELETE /prescriptions/:id` - Delete prescription by ID

### Medical Records
- `GET /medical-records` - Get all medical records
- `POST /medical-records` - Create new medical record
- `GET /medical-records/:id` - Get single medical record by ID
- `PUT /medical-records/:id` - Update medical record by ID
- `DELETE /medical-records/:id` - Delete medical record by ID

### Payments
- `GET /payments` - Get all payments
- `POST /payments` - Create new payment
- `GET /payments/:id` - Get single payment by ID
- `PUT /payments/:id` - Update payment by ID
- `DELETE /payments/:id` - Delete payment by ID

## Example Request/Response

### Create Patient
**Request:**
```http
POST /api/patients
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

**Response:**
```http
HTTP/1.1 201 Created
Content-Type: application/json

{
  "id": 1,
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "updatedAt": "2023-05-20T12:00:00.000Z",
  "createdAt": "2023-05-20T12:00:00.000Z"
}
```

## Error Handling
All endpoints return appropriate HTTP status codes:
- 200 OK for successful GET requests
- 201 Created for successful POST requests
- 400 Bad Request for invalid data
- 404 Not Found for non-existent resources
- 500 Internal Server Error for server issues
