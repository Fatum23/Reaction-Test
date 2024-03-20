import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import React, { useState } from "react";

import { gColors } from "../../global/gColors";
import { loadFonts } from "../../global/gFonts";

import Circle from "./components/Circle";
import PressWhen from "./components/PressWhen";
import StartButton from "./components/StartButton";

export function HomeScreen() {
  const [start, setStart] = useState(false);
  const [green, setGreen] = useState(false);
  const [time, setTime] = useState(null);
  const [fail, setFail] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Тест на реакцию</Text>
      </View>
      <View style={styles.body}>
        <PressWhen start={start} green={green} time={time} fail={fail} />
        <Circle start={start} green={green} time={time} fail={fail} />
        <StartButton start={start} green={green} time={time} fail={fail} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: gColors.bgBlue,
    gap: 10,
  },
  title: {
    paddingTop: 5,
    fontSize: 25,
    color: "white",
    fontFamily: "Kelson",
    letterSpacing: 1,
  },
  body: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
  },
});
