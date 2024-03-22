import { StyleSheet, Text } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";
import { TypeDefault } from "../types";

export default function ResultText(props: TypeDefault) {
  const fadeInOpacity = useSharedValue(0);

  const fadeIn = () => {
    fadeInOpacity.value = withTiming(1, {
      duration: 600,
      easing: Easing.ease,
    });
  };

  const fadeOut = () => {
    fadeInOpacity.value = withTiming(0, {
      duration: 0,
      easing: Easing.ease,
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: fadeInOpacity.value, // Use the value directly
    };
  });

  useEffect(() => {
    if (props.success) {
      fadeIn();
    } else {
      fadeOut();
    }
  }, [props.success]);
  return (
    <Animated.View style={animatedStyle}>
      <Text style={styles.text}>
        {props.success && !props.fail ? props.time?.toString() + "мс" : " "}
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 22,
    fontFamily: "Kelson",
    letterSpacing: 1,
  },
});
