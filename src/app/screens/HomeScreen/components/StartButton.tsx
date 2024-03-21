import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { gColors } from "../../../global/gColors";
import { TypeDefault } from "../types";

type TypeStartButton = {
  handleClick: () => void;
};

export default function StartButton(props: TypeDefault & TypeStartButton) {
  let padding;
  let title;
  if (props.start) {
    if (props.fail | props.end) {
      padding = 10;
      title = "Заново";
    }
  } else {
    padding = 10;
    title = "Начать";
  }
  const styles = StyleSheet.create({
    touchable: {
      backgroundColor: gColors.lightBlue,
      padding: padding,
      borderRadius: 5,
    },
    text: {
      color: "white",
      fontFamily: "Kelson",
      fontSize: 20,
      letterSpacing: 1.25,
    },
  });

  return (
    <TouchableOpacity style={styles.touchable} onPress={props.handleClick}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
