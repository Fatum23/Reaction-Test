import { StyleSheet, Text } from "react-native";
import React from "react";
import { TypeDefault } from "../types";

export default function PressWhen(props: TypeDefault) {
  return (
    <Text style={styles.text}>
      {props.start
        ? props.green && !props.fail
          ? "Жми!!!"
          : props.fail
          ? "Упс!Слишком рано..."
          : "Нажми когда будет зеленый..."
        : ""}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 22,
    letterSpacing: 1.25,
    fontFamily: "Kelson",
  },
});
