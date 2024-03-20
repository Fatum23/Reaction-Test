import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";
import React from "react";
import { TypeDefault } from "../types";

export default function Circle(props: TypeDefault) {
  return (
    <TouchableOpacity
      activeOpacity={
        props.start && !props.fail && props.time !== null ? 0.7 : 1
      }
    >
      <View style={styles.circle}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circle: {
    backgroundColor: "red",
    width: "60%",
    aspectRatio: 1,
    borderRadius: (Dimensions.get("window").width * 0.6) / 2,
    borderWidth: 5,
    borderColor: "darkred",
  },
});
