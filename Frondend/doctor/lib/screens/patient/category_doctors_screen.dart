import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

class CategoryDoctorsScreen extends StatelessWidget {
  final String category;
  const CategoryDoctorsScreen({super.key, required this.category});

  @override
  Widget build(BuildContext context) {
    // Dummy list of doctors for the category.
    final List<String> doctors = [
      'Dr. $category A',
      'Dr. $category B',
      'Dr. $category C',
    ];

    return WillPopScope(
      onWillPop: () async => false,
      child: Scaffold(
        appBar: AppBar(
          leading: IconButton(
            icon: const Icon(Icons.arrow_back),
            onPressed: () => context.pop(),
          ),
          title: Text('$category Specialists'),
          backgroundColor: Colors.deepPurpleAccent,
        ),
        body: ListView.builder(
          padding: const EdgeInsets.all(16.0),
          itemCount: doctors.length,
          itemBuilder: (context, index) {
            return Card(
              shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(12)),
              margin: const EdgeInsets.symmetric(vertical: 8),
              child: ListTile(
                leading: CircleAvatar(
                  backgroundColor: Colors.deepPurpleAccent,
                  child: Text(doctors[index][4]),
                ),
                title: Text(doctors[index]),
                subtitle: const Text('Specialist'),
                trailing: const Icon(Icons.arrow_forward_ios),
                onTap: () {
                  // Use push so that back button works.
                  context.push('/doctor/profile');
                },
              ),
            );
          },
        ),
      ),
    );
  }
}

