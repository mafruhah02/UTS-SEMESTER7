import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selamat Datang di Aplikasi Data Pribadi</Text>
      
      <Image
        source={{ uri: 'https://via.placeholder.com/150' }} // Ganti URL ini dengan gambar yang sesuai
        style={styles.image}
      />

      <Text style={styles.description}>
        Simpan dan kelola informasi pribadi Anda dengan aman. Dari catatan pribadi hingga detail kontak – semua tersimpan dengan privasi terjamin.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Mulai Sekarang</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1bee7', // Warna latar belakang ungu muda, sama dengan halaman Tentang
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4a148c', // Warna ungu tua, serasi dengan halaman Tentang
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'serif', // Font elegan
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#4a148c', // Warna ungu tua agar sesuai dengan tema halaman Tentang
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontFamily: 'Arial', // Font sederhana dan mudah dibaca
  },
  button: {
    backgroundColor: '#d81b60', // Warna merah muda yang sama dengan tombol di halaman Tentang
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    shadowColor: '#d81b60',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    fontFamily: 'serif', // Font serasi dengan teks lainnya
  },
});

export default Home;
