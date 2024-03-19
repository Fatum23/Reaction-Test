import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { gColors } from "../global/gColors";
import { loadFonts } from "../global/gFonts";
import { useFonts } from "expo-font";

export default function ButtonComponent(props) {
  useFonts({
    Kelson: require("../../assets/fonts/kelson.otf"),
  });
  return (
    <TouchableOpacity style={styles.touchable}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: gColors.lightBlue,
    borderRadius: 5,
    padding: 15,
  },
  text: {
    color: "white",
    fontFamily: "Kelson",
    letterSpacing: 1.25,
    fontSize: 20,
  },
});
