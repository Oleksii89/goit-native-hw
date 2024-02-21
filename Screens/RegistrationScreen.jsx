import React from "react";

import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import Form from "../components/Form";

const image = require("../assets/bg-image.jpg");

const RegistrationScreen = () => (
  <View style={styles.container}>
    {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
    <Image style={styles.avatar} />
    <Text style={styles.text}>Реєстрація</Text>
    <Form />
    {/* </ImageBackground> */}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    alignItems: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    // resizeMode: "cover",
    justifyContent: "center",
    // width: "100%",
    // height: "100%",
  },
  avatar: {
    // position: "absolute",
    // top: 203,
    // left: 128,

    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  text: {
    color: "#212121",
    fontSize: 30,
    textAlign: "center",
    marginTop: 32,
    marginBottom: 17,
  },
  titleContainer: {
    flex: 1,
    // justifyContent: "center",
  },
});

export default RegistrationScreen;
