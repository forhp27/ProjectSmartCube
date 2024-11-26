import React from "react";
import { Alert, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function Index() {
  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>SmartCube</Text>
        <Separator />
        <TouchableOpacity style={styles.button}>
          <Link href="/plantscreen" style={styles.buttonText}>
            Monitor Temp./Humid.
          </Link>
        </TouchableOpacity>

        <Text style={styles.text}>
          Click here to check on your environment's temperature and humidity
          readings from the Enviro attachment!
        </Text>

        <Separator />

        <TouchableOpacity style={styles.button}>
          <Link href="/plantalmanac" style={styles.buttonText}>
            Plant Almanac
          </Link>
        </TouchableOpacity>

        <Text style={styles.text}>
          Learn what kinds of plants you can grow indoors!
        </Text>
        <Separator />
      </View>
    </LinearGradient>
  );
}

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    textAlign: "center",
    color: "#ffffff",
    marginVertical: 8,
    fontSize: 16,
  },
  separator: {
    marginVertical: 15,
    borderBottomColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
    width: "100%",
  },
  button: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 20,
    width: "100%",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "#000",
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 20,
    textAlign: "center",
  },
});
