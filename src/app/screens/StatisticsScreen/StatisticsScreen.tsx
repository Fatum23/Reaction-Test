import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";
import { gColors } from "../../global/styles/gColors";
import { TypeStatisticsScreen } from "./types";
import { TypeHomeScreen } from "../HomeScreen/types";

export function StatisticsScreen(props: TypeStatisticsScreen & TypeHomeScreen) {
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Статистика</Text>
      </View>
      <View style={styles.body}>
        <Text style={[styles.title, { paddingTop: 10 }]}>
          Лучший результат: {props.best === "-" ? "" : props.best + "ms"}
        </Text>
        <Text style={[styles.title, { paddingTop: 10 }]}>
          Средний результат: {props.average === "-" ? "-" : props.average + "ms"}
        </Text>
        <Text style={[styles.title, { paddingTop: 10 }]}>
          Всего попыток: {props.attempts}
        </Text>
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
  body: {
    paddingTop: 10,
    paddingLeft: 10,
  },
});
