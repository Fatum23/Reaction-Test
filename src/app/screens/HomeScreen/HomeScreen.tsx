import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";

import { gColors } from "../../global/styles/gColors";

import Circle from "./components/Circle";
import PressWhen from "./components/PressWhen";
import StartButton from "./components/StartButton";
import ResultText from "./components/ResultText";

import { TypeHomeScreen } from "./types";
import * as storage from "../../global/services/storage/storage";

export function HomeScreen(props: TypeHomeScreen) {
  const [start, setStart] = useState(false);
  const [green, setGreen] = useState(false);
  const [time, setTime] = useState<null | number>(null);
  const [fail, setFail] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const min = 500;
    const max = 5500;
    const delay = Math.random() * (max - min) + min;

    const timeoutId = setTimeout(() => {
      if (!fail && start && !success) {
        setGreen(true);
        setTime(Date.now());
      }
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [start]);

  useEffect(() => {
    if (success) {
      const setBestResult = async (time: number) => {
        await storage.getItem("best").then((bestResult) => {
          if (bestResult === "-" || time < parseInt(bestResult)) {
            props.setBest(time.toString());
          }
        });
      };
      const setAttempts = async () => {
        await storage.getItem("attempts").then(async (attempts: string) => {
          if (attempts === "-") {
            attempts = "0";
          }
          props.setAttempts((parseInt(attempts) + 1).toString());
        });
      };
      const setAverage = async (time: number) => {
        await storage.getItem("attempts").then(async (attempts: string) => {
          if (attempts === "-") {
            attempts = "0";
          }
          await storage.getItem("average").then((average: string) => {
            if (average === "-") {
              average = "0";
            }
            props.setAverage(
              Math.round(
                (parseInt(average) * parseInt(attempts) + time) /
                  (parseInt(attempts) + 1)
              ).toString()
            );
          });
        });
      };
      setBestResult(time!);
      setAttempts();
      setAverage(time!);
    }
  }, [time]);

  const startGame = () => {
    setStart(true);
  };

  const resetGame = () => {
    setStart(false);
    setGreen(false);
    setTime(null);
    setFail(false);
    setSuccess(false);
  };

  const handleCircleClick = () => {
    if (start) {
      if (green) {
        if (!success) {
          setTime((prev) => Date.now() - prev!);
          setSuccess(true);
        }
      } else {
        setFail(true);
      }
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
          startGame={startGame}
          resetGame={resetGame}
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
