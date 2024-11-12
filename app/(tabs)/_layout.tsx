import React from 'react';
import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#d32f2f', // Warna merah tua untuk tab aktif
        tabBarInactiveTintColor: '#757575', // Warna abu-abu untuk tab tidak aktif
        tabBarStyle: {
          backgroundColor: '#ffffff', // Warna latar belakang putih untuk tab bar
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} /> // Ikon "rumah" untuk "home"
          ),
          tabBarLabel: 'Beranda',
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="information-circle-outline" size={size} color={color} /> // Ikon "informasi" untuk "about"
          ),
          tabBarLabel: 'Tentang',
        }}
      />
      <Tabs.Screen
        name="contak"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={size} color={color} /> // Ikon "telepon" untuk "contact"
          ),
          tabBarLabel: 'Kontak',
        }}
      />
      <Tabs.Screen
        name="blog"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="newspaper-outline" size={size} color={color} /> // Ikon "koran" untuk "blog"
          ),
          tabBarLabel: 'Blog',
        }}
      />
    </Tabs>
  );
};
