import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Blog = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Blog</Text>
      <Text style={styles.subtitle}>Temukan informasi terbaru dan artikel menarik di sini!</Text>

      {/* Daftar artikel di bawah */}
      <View style={styles.blogList}>
        <View style={styles.blogCard}>
          <Text style={styles.blogTitle}>Judul Artikel Pertama</Text>
          <Text style={styles.blogSnippet}>
            Ringkasan artikel pertama yang menarik untuk dibaca. Klik untuk membaca lebih lanjut...
          </Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.blogCard}>
          <Text style={styles.blogTitle}>Judul Artikel Kedua</Text>
          <Text style={styles.blogSnippet}>
            Ringkasan artikel kedua yang menarik untuk dibaca. Klik untuk membaca lebih lanjut...
          </Text>
          <TouchableOpacity style={styles.readMoreButton}>
            <Text style={styles.readMoreText}>Baca Selengkapnya</Text>
          </TouchableOpacity>
        </View>

        {/* Tambahkan lebih banyak artikel jika diperlukan */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1bee7', // Warna ungu muda yang sama dengan halaman About
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4a148c', // Warna ungu tua untuk judul utama
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'serif', // Font elegan
  },
  subtitle: {
    fontSize: 18,
    color: '#4a148c', // Warna ungu tua yang konsisten
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Arial', // Font sederhana
  },
  blogList: {
    marginTop: 10,
  },
  blogCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4a148c', // Warna ungu tua untuk judul artikel
    marginBottom: 8,
  },
  blogSnippet: {
    fontSize: 14,
    color: '#757575', // Warna abu-abu untuk teks ringkasan
    marginBottom: 10,
  },
  readMoreButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#d81b60', // Warna merah muda untuk tombol baca selengkapnya
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
  readMoreText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    fontFamily: 'serif', // Font konsisten dengan teks lainnya
  },
});

export default Blog;
