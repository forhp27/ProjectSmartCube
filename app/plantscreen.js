import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

const API_ENDPOINT = 'http://your-backend-server-url/data';

export default function PlantScreen() {
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();
        setTemperature(data?.temperature);
        setHumidity(data?.humidity);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 1000); // Fetch data every 1 seconds.

    return () => clearInterval(interval);
  }, []);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Enviro Monitor</Text>
        <View style={styles.dataContainer}>
          <View style={styles.dataItem}>
            <Ionicons name="thermometer-outline" size={48} color="#FF6B6B" />
            <Text style={styles.dataValue}>{temperature ? `${temperature}°C` : 'N/A'}</Text>
            <Text style={styles.dataLabel}>Temperature</Text>
          </View>
          <View style={styles.dataItem}>
            <Ionicons name="water-outline" size={48} color="#4ECDC4" />
            <Text style={styles.dataValue}>{humidity ? `${humidity}%` : 'N/A'}</Text>
            <Text style={styles.dataLabel}>Humidity</Text>
          </View>
        </View>
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