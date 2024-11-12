import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const About = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi Data Pribadi</Text>
      <Text style={styles.description}>
        Selamat datang di aplikasi Data Pribadi! Aplikasi ini dirancang untuk membantu Anda
        mengelola dan menjaga informasi pribadi dengan aman dan terorganisir.
      </Text>
      <Text style={styles.description}>
        Dengan aplikasi ini, Anda dapat menyimpan data penting, mengatur kontak, serta melacak
        aktivitas harian Anda dengan mudah. Kami memahami betapa pentingnya privasi, dan
        komitmen kami adalah untuk menjaga data Anda tetap aman dan terlindungi.
      </Text>
      <Text style={styles.description}>
        Terima kasih telah mempercayai aplikasi ini untuk pengelolaan data pribadi Anda. Kami
        berkomitmen untuk terus meningkatkan fitur-fitur aplikasi agar sesuai dengan kebutuhan Anda.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 25,
    backgroundColor: '#e1bee7', // Warna latar belakang lembut
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a148c', // Warna ungu elegan untuk judul
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'serif', // Font yang elegan
  },
  description: {
    fontSize: 16,
    color: '#333', // Warna teks gelap untuk kontras yang baik
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 15,
    fontFamily: 'Arial', // Font yang mudah dibaca
  },
});

export default About;
