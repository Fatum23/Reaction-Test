import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React, { useState } from "react";

import { gColors } from "../../global/gColors";

import Circle from "./components/Circle";
import PressWhen from "./components/PressWhen";
import StartButton from "./components/StartButton";
import ResultText from "./components/ResultText";

export function HomeScreen() {
  const [start, setStart] = useState(false);
  const [green, setGreen] = useState(false);
  const [time, setTime] = useState<null | number>(null);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  const startGame = () => {
    setStart(true);
    const min = 500;
    const max = 5500;
    const delay = Math.random() * (max - min) + min;
    setTimeout(() => {
      setGreen(true);
      setTime(Date.now());
    }, delay);
  };

  const handleCircleClick = () => {
    if (green) {
      setTime((prev) => Date.now() - prev!);
      setSuccess(true);
    } else {
      setFail(true);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.title}>Тест на реакцию</Text>
      </View>
      <View style={styles.body}>
        <PressWhen
          start={start}
          green={green}
          time={time}
          fail={fail}
          success={success}
        />
        <Circle
          start={start}
          green={green}
          time={time}
          fail={fail}
          success={success}
          handleClick={handleCircleClick}
        />
        <ResultText
          start={start}
          green={green}
          time={time}
          fail={fail}
          success={success}
        />
        <StartButton
          start={start}
          green={green}
          time={time}
          fail={fail}
          success={success}
          handleClick={startGame}
        />
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
