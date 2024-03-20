import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

type TypeCircle = {
    start: boolean,
    green: boolean
}

export default function Circle(props: TypeCircle) {
  return (
    <TouchableOpacity activeOpacity={0.7}>
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