import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Dimensions,
  TouchableOpacity,
  Button,
} from "react-native";
import React from "react";

import { gColors } from "../../global/gColors";
import { loadFonts } from "../../global/gFonts";

import ButtonComponent from "../../ui/ButtonComponent";

export function HomeScreen() {
  loadFonts;
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ alignItems: "center", justifyContent: "flex-end" }}>
        <Text style={styles.title}>Тест на реакцию</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.circle}></View>
        </TouchableOpacity>

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
  circle: {
    backgroundColor: "red",
    width: "60%",
    aspectRatio: 1,
    borderRadius: (Dimensions.get("window").width * 0.6) / 2,
    borderWidth: 5,
    borderColor: "darkred",
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
    justifyContent: "center",
    paddingBottom: 80,
    flex: 1,
    gap: 50,
  },
  button: {
    // paddingTop: 20,
  },
});
