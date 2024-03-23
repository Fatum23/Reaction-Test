import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import { gColors } from "../../global/styles/gColors";
import { TypeStatisticsScreen } from "./types";
import { TypeHomeScreen } from "../HomeScreen/types";

export function StatisticsScreen(props: TypeStatisticsScreen & TypeHomeScreen) {
  const reset = () => {
    Alert.alert(
      "",
      "Вы уверены?",
      [
        {
          text: "Нет",
          style: "cancel",
        },
        {
          text: "Да",
          style: "destructive",
          onPress: () => {
            props.setBest("-");
            props.setAverage("-");
            props.setAttempts("-");
          },
        },
      ],
      { cancelable: false }
    );
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Статистика</Text>
      </View>
      <View style={styles.body}>
        <Text style={[styles.title, { paddingTop: 10 }]}>
          Лучший результат: {props.best === "-" ? "-" : props.best + "ms"}
        </Text>
        <Text style={[styles.title, { paddingTop: 10 }]}>
          Средний результат:{" "}
          {props.average === "-" ? "-" : props.average + "ms"}
        </Text>
        <Text style={[styles.title, { paddingTop: 10 }]}>
          Всего попыток: {props.attempts}
        </Text>

        <View style={{ paddingTop: 30 }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => reset()}
          >
            <Text style={styles.title}>Обнулить</Text>
          </TouchableOpacity>
        </View>
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
  button: {
    backgroundColor: "rgb(200, 20, 60)",
    padding: 10,
    borderRadius: 10,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
  },
});
