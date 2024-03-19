import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";

import { gColors } from "../../global/gColors";

export function StatisticsScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <Text>StatisticsScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: gColors.bgBlue,
  },
});
