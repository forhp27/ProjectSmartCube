/*
import React from "react";
import { StyleSheet, Button, View, Text, Alert } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Separator = () => <View style={styles.separator} />;

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          The title and onPress handler are required. It is recommended to set
          accessibilityLabel to help make your app usable by everyone.
        </Text>
        <Button
          title="Press me"
          onPress={() => Alert.alert("Simple Button pressed")}
        />
      </View>
      <Separator />




      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button.
        </Text>
        <Button
          title="Press me"
          color="#f194ff"
          onPress={() => Alert.alert("Button with adjusted color pressed")}
        />
      </View>





      <Separator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
        <Button
          title="Press me"
          disabled
          onPress={() => Alert.alert("Cannot press this one")}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          This layout strategy lets the title define the width of the button.
        </Text>
        <View style={styles.fixToText}>
          <Button
            title="Left button"
            onPress={() => Alert.alert("Left button pressed")}
          />
          <Button
            title="Right button"
            onPress={() => Alert.alert("Right button pressed")}
          />
        </View>
      </View>
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 16,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
*/

import {
  Alert,
  Button,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

const Separator = () => <View style={styles.separator} />;

export default function Index() {
  // how to check device's dimensions. OUTPUT: "{"fontScale": 1, "height": 800, "scale": 3, "width": 360}"
  // console.log(Dimensions.get("screen"));

  return (
    <SafeAreaView style={[styles.container]}>
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Alert.alert("ALERT!", "this path is not finished yet :3")
          }
        >
          <Text style={[styles.buttonText]}>CHECK ON YOUR PLANTS</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Click here to check on your enviroment's temperature and humidity
          readings from the Enviro attachment!
        </Text>
      </View>

      <Separator />

      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            Alert.alert("ALERT!", "this path is not finished yet :3")
          }
        >
          <Text style={[styles.buttonText]}>PLANT ALMANAC</Text>
        </TouchableOpacity>

        <Text style={styles.text}>
          Learn what kinds of plants you can grow indoors!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Used for SafeAreaView.
  container: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: "space-between",
    backgroundColor: "#303030",
    paddingTop:
      Platform.OS === "android" || "ios" ? StatusBar.currentHeight : 0,
  },
  // Used for text under "buttons"/TouchableOpacity.
  text: {
    textAlign: "center",
    color: "#fff",
    marginVertical: 8,
    fontSize: 20,
  },
  // Used as a giant white line across the screen.
  separator: {
    marginVertical: 15,
    borderBottomColor: "#fff",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  // Used to style "buttons"/TouchableOpacity.
  button: {
    justifyContent: "space-around",
    backgroundColor: "#505050",
    height: "40%",
    width: "100%",
    // rounded corners.
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  // Used for text on "buttons"/TouchableOpacity.
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 44,
  },
});
