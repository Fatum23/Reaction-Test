import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { gColors } from "../../../global/gColors";
import { TypeDefault } from "../types";

type TypeStartButton = {
  handleClick: void;
};

export default function StartButton(props: TypeDefault & TypeStartButton) {
  const styles = StyleSheet.create({
    touchable: {
      backgroundColor: gColors.lightBlue,
      padding: 15,
      paddingLeft: 20,
      paddingRight: 20,
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
      <Text style={styles.text}>
        {props.start ? (props.fail ? "Заново" : "") : "Начать"}
      </Text>
    </TouchableOpacity>
  );
}
