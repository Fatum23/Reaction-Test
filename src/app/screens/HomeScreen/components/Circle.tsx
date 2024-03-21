import { View, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { TypeDefault } from "../types";

type TypeCircle = {
  handleClick: () => void;
}

export default function Circle(props: TypeDefault & TypeCircle) {
  const styles = StyleSheet.create({
    circle: {
      backgroundColor: props.green ? "green" : "red",
      width: "60%",
      aspectRatio: 1,
      borderRadius: (Dimensions.get("window").width * 0.6) / 2,
      borderWidth: 5,
      borderColor: props.green ? "darkgreen" : "darkred",
    },
  });
  return (
    <TouchableOpacity
      activeOpacity={
        props.start && !props.fail && props.time !== null ? 0.6 : 1
      }
      onPress={props.handleClick}
    >
      <View style={styles.circle}></View>
    </TouchableOpacity>
  );
}
