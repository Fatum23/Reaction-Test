import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React from "react";
import { gStyle } from "../../shared/gStyle";

export function HomeScreen() {
  return (
    <SafeAreaView style={styles.main}>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: gStyle.bgBlue,
  },
});
