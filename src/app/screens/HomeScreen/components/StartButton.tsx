import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { gColors } from "../../../global/styles/gColors";
import { TypeDefault } from "../types";

type TypeStartButton = {
  startGame: () => void;
  resetGame: () => void;
};

export default function StartButton(props: TypeDefault & TypeStartButton) {
  let padding = 0;
  let title = "";
  if (props.start) {
    if (props.fail || props.success) {
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
      fontSize: 22,
      letterSpacing: 1.25,
    },
  });

  return (
    <TouchableOpacity
      style={styles.touchable}
      onPress={props.success || props.fail ? props.resetGame : props.startGame}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
