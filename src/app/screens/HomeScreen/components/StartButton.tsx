import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
  useAnimatedStyle,
} from "react-native-reanimated";

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

  const fadeInOpacity = useSharedValue(0);

  const fadeIn = (duration: number) => {
    fadeInOpacity.value = withTiming(1, {
      duration: duration,
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
    if (props.success || props.fail) {
      fadeIn(600);
    } else if (!props.start) {
      fadeIn(0);
    } else {
      fadeOut();
    }
  }, [props.success, props.fail, props.start]);

  return (
    <Animated.View style={animatedStyle}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={
          props.success || props.fail ? props.resetGame : props.startGame
        }
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}
