import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const Contact = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Kontak Kami</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.infoHeader}>Informasi Kontak</Text>
        <Text style={styles.infoText}>Alamat: Jalan Mawar No. 123, Jakarta</Text>
        <Text style={styles.infoText}>Telepon: +62 812-3456-7890</Text>
        <Text style={styles.infoText}>Email: contact@tokojahit.com</Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formHeader}>Kirim Pesan</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Nama Anda"
          placeholderTextColor="#757575"
        />
        <TextInput
          style={styles.input}
          placeholder="Email Anda"
          placeholderTextColor="#757575"
          keyboardType="email-address"
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Pesan Anda"
          placeholderTextColor="#757575"
          multiline
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Kirim Pesan</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e5f5', // Background soft purple
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#4a148c', // Dark purple text
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  infoHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a148c',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 5,
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  formHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a148c',
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#f3e5f5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 14,
    color: '#4a148c',
    marginBottom: 15,
  },
  textArea: {
    height: 80,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#d81b60',
    borderRadius: 10,
    paddingVertical: 12,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Contact;
