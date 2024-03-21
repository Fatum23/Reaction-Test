import { StyleSheet, View, Text } from "react-native";
import React from "react";
import { TypeDefault } from "../types";

export default function ResultText(props: TypeDefault) {
  return (
    <Text style={styles.text}>
      {props.success ? props.time?.toString() + "мс" : ""}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "Kelson",
    letterSpacing: 1
  },
});
