import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:doctor/theme/app_theme.dart';

class PatientHomeScreen extends StatelessWidget {
  const PatientHomeScreen({super.key});

  /// List of specialty categories.
  final List<String> categories = const [
    'Cardiology',
    'Neurology',
    'Dermatology',
    'Orthopedics',
    'Pediatrics',
  ];

  @override
  Widget build(BuildContext context) {
    // Dummy list of recommended doctors.
    final List<String> recommendedDoctors = [
      'Dr. Alice Smith',
      'Dr. Bob Johnson',
      'Dr. Carol Williams',
    ];

    return WillPopScope(
      onWillPop: () async => false,
      child: Scaffold(
        appBar: AppBar(
          title: const Text('Patient Home'),
          backgroundColor: Colors.deepPurpleAccent,
          automaticallyImplyLeading: false,
          actions: [
            IconButton(
              icon: const Icon(Icons.logout),
              onPressed: () => context.go('/login'),
            ),
          ],
        ),
        body: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            children: [
              // Search bar to enter symptoms.
              TextField(
                decoration: InputDecoration(
                  hintText: 'Enter your symptoms...',
                  prefixIcon: const Icon(Icons.search),
                  border: OutlineInputBorder(
                      borderRadius: BorderRadius.circular(12)),
                ),
                onSubmitted: (value) {
                  // TODO: Call NLP AI API to process symptoms and return relevant doctors.
                  debugPrint('NLP API call with symptoms: $value');
                },
              ),
              const SizedBox(height: 16),
              // Categories section displayed as circular icons.
              SizedBox(
                height: 100,
                child: ListView.builder(
                  scrollDirection: Axis.horizontal,
                  itemCount: categories.length,
                  itemBuilder: (context, index) {
                    final category = categories[index];
                    return GestureDetector(
                      onTap: () {
                        // Use push so that back navigation is preserved.
                        context.push('/patient/category?name=$category');
                      },
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 8.0),
                        child: Column(
                          children: [
                            CircleAvatar(
                              radius: 30,
                              backgroundColor:
                                  // Get the color for a specific specialty
                                  Theme.of(context).specialtyColors[category]!,
                              child: Text(
                                category.substring(0, 2).toUpperCase(),
                                style: const TextStyle(
                                    color: Colors.white,
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold),
                              ),
                            ),
                            const SizedBox(height: 8),
                            Text(category,
                                style: const TextStyle(fontSize: 12)),
                          ],
                        ),
                      ),
                    );
                  },
                ),
              ),
              const SizedBox(height: 16),
              // Recommended doctors list.
              Expanded(
                child: ListView.builder(
                  itemCount: recommendedDoctors.length,
                  itemBuilder: (context, index) {
                    return Card(
                      shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(12)),
                      margin: const EdgeInsets.symmetric(vertical: 8),
                      child: ListTile(
                        leading: CircleAvatar(
                          backgroundColor: Colors.deepPurpleAccent,
                          child: Text(recommendedDoctors[index][4]),
                        ),
                        title: Text(recommendedDoctors[index],
                            style: Theme.of(context).textTheme.titleMedium),
                        subtitle: const Text('General Physician'),
                        trailing: const Icon(Icons.arrow_forward_ios),
                        onTap: () {
                          // Use push so that doctor profile is added to stack.
                          context.push('/doctor/profile');
                        },
                      ),
                    );
                  },
                ),
              ),
              ElevatedButton.icon(
                onPressed: () {
                  // TODO: Implement geolocation search for nearby doctors.
                  debugPrint('Show nearby doctors');
                },
                icon: const Icon(Icons.map),
                label: const Text('Show Nearby Doctors'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.deepPurpleAccent,
                  minimumSize: const Size(double.infinity, 48),
                  shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12)),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
