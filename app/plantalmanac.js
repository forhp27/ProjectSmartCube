import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

export default function PlantScreen() {
  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View>
        <TouchableOpacity style={styles.button}>
          <Link href="/" style={styles.buttonText}>
            Back to Home
          </Link>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    borderRadius: 20,
    padding: 30,
    width: '85%',
    height: '60%',
    alignItems: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 60,
    marginTop: 20,
    color: '#333',
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '110%',
    marginBottom: 50,
  },
  dataItem: {
    alignItems: 'center',
  },
  dataValue: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#333',
  },
  dataLabel: {
    fontSize: 16,
    color: '#666',
  },
  button: {
    backgroundColor: '#4c669f',
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});