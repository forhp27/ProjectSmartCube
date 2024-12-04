import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

export default function PlantScreen() {
  const [text, setText] = useState("");

  const handlePress1 = () => {
    setText(
      "Basil is a great herb! It is incredibly simple to grow.\n\nBasil grows best at 70-85°F (21-29°C), and at a humidity level of 70-85%. But, basil can still grow even if it is 65°F (18°C) at 30% humidity!\n\nWhen it is growing tall, cut the stem above a node. This will force the plant to grow outward and become more of a bush than a tall singular plant. It will also stop flowering from happening, which means more tasty leaves :)"
    );
  };

  const handlePress2 = () => {
    setText(
      "Lettuce is a great vegetable! It is super easy to grow.\n\nLettuce grows best at 45-70°F (8-21°C), and at a humidity level of 70-80%. Lettuce can still grow at lower humidity levels, like 30% humidity.\n\nDepending on the variety, some lettuce plants might need more/less space between each other. Plan accordingly!"
    );
  };

  const handlePress3 = () => {
    setText(
      "Sage is a great herb! It is effortless to grow.\n\nSage grows best at 60-70°F (15-21°C), and at a humidity level of 40-60%. Sage can still grow at lower humidity levels, like 30% humidity.\n\nWhen it is growing tall, cut the stem above a node. This will force the plant to grow outward and become more of a bush than a tall singular plant."
    );
  };

  return (
    <LinearGradient
      colors={["#4c669f", "#3b5998", "#192f6a"]}
      style={styles.container}
    >
      <View style={styles.card}>
        <LinearGradient
          colors={["#707070", "#545454", "#292929", "#000000"]}
          style={styles.card2}
        >
          <Text style={styles.dynamicText}>
            {text || "Select a plant to learn about it!"}
          </Text>
        </LinearGradient>

        <View style={styles.dataContainer}>
          <TouchableOpacity style={styles.plantButton} onPress={handlePress1}>
            <Text style={styles.plantButtonText}>Basil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plantButton} onPress={handlePress2}>
            <Text style={styles.plantButtonText}>Lettuce</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.plantButton} onPress={handlePress3}>
            <Text style={styles.plantButtonText}>Sage</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.goBackButton}>
          <Link href="/" style={styles.goBackButtonText}>
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
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 30,
    width: "85%",
    height: "90%",
    alignItems: "center",
  },
  card2: {
    backgroundColor: "#000",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    height: "70%",
    alignItems: "center",
    borderWidth: 2,
    justifyContent: "center",
  },
  dynamicText: {
    fontSize: 16,
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "center",
  },
  dataContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "110%",
    marginTop: 20,
    marginBottom: 40,
  },
  dataLabel: {
    fontSize: 16,
    color: "#666",
  },
  plantButton: {
    backgroundColor: "#4c669f",
    padding: 20,
    borderRadius: 10,
  },
  plantButtonText: {
    justifyContent: "center",
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  goBackButton: {
    backgroundColor: "#4c669f",
    padding: 20,
    borderRadius: 10,
  },
  goBackButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
