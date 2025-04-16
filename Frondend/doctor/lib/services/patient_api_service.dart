import 'dart:convert';
import 'package:http/http.dart' as http;

class PatientApiService {
  // For Android emulator, use 10.0.2.2 instead of localhost
  // For physical devices, use your machine's local IP
  // For Android emulator, use 10.0.2.2 instead of localhost
  // For physical devices, use your machine's local IP
  static const String _baseUrl = 'http://192.168.100.43:3000/api';

  static Future<void> registerPatient({
    required String name,
    required String email,
    required String dob,
    required String gender,
    required String contactInfo,
    required String password,
  }) async {
    print("almost executed");
    final response = await http.post(
      Uri.parse('$_baseUrl/patients'),
      headers: {'Content-Type': 'application/json'},
      body: jsonEncode({
        'Name': name,
        'Email': email,
        'Date_of_Birth': dob,
        'Gender': gender,
        'Contact_Info': contactInfo,
        'Password': password
      }),
    );

    print("executed");
    if (response.statusCode != 201) {
      throw Exception('Failed to register patient: ${response.body}');
    }
  }
}
