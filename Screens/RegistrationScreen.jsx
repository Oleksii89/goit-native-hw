import React from "react";

import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = require("../assets/bg-image.jpg");

const RegistrationScreen = () => (
  <View style={styles.container}>
    <ImageBackground source={image} style={styles.backgroundImage}>
      <Text style={[styles.text, styles.titleContainer]}>Реєстрація</Text>
      <View style={styles.avatar}></View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  backgroundImage: {
    // flex: 1,
    // resizeMode: "cover",
    // justifyContent: "flex-end",
    // width: "100%",
    // height: "100%",
  },
  avatar: {
    position: "absolute",
    top: 203,
    left: 128,

    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  text: {
    color: "#212121",
    fontSize: 30,
  },
  titleContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default RegistrationScreen;
