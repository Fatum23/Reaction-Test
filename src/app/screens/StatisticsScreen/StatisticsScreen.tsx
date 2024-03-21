import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";

import { gColors } from "../../global/styles/gColors";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function StatisticsScreen() {
  let text;
  AsyncStorage.getItem("best").then((item) => {
    text = item;
    console.log(item);
  });
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Статистика</Text>
        <Text>{text}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: gColors.bgBlue,
  },
  title: {
    paddingTop: 5,
    fontSize: 25,
    color: "white",
    fontFamily: "Kelson",
    letterSpacing: 1,
  },
});
