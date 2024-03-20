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

import ButtonComponent from "../../ui/ButtonComponent";
import Circle from "./components/Circle";
import PressWhen from "./components/PressWhen";

export function HomeScreen() {
  loadFonts;

  const [start, setStart] = useState(false);
  const [green, setGreen] = useState(false);

  return (
    <SafeAreaView style={styles.main}>
      <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <Text style={styles.title}>Тест на реакцию</Text>
      </View>
      <View style={styles.body}>
        <PressWhen start={true} green={false} />
        <Circle start={true} green={true} />
        <ButtonComponent text={"Начать"}></ButtonComponent>
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
  button: {
    // paddingTop: 20,
  },
});
