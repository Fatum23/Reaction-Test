import { SafeAreaView, StatusBar, StyleSheet, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { registerRootComponent } from "expo";
import { Ionicons } from "@expo/vector-icons";
import * as NavigationBar from "expo-navigation-bar";

import { gColors } from "./global/styles/gColors";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { StatisticsScreen } from "./screens/StatisticsScreen/StatisticsScreen";
import { loadFonts } from "./global/styles/gFonts";
import { storage } from "./global/services/database/local/localStorage";
import { useEffect } from "react";

const Tab = createBottomTabNavigator();

function App() {
  useEffect(() => {
    NavigationBar.setBackgroundColorAsync(gColors.bgBlue);
    loadFonts;
  }, []);
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={gColors.bgBlue} barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            header: () => null,
            tabBarStyle: {
              backgroundColor: gColors.bgBlue,
              borderTopWidth: 0,
              marginBottom: 15,
              shadowRadius: 0,
              elevation: 0,
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Главная") {
                iconName = "home-sharp";
              } else if (route.name === "Статистика") {
                iconName = "stats-chart";
              }

              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: gColors.lightBlue,
            tabBarInactiveTintColor: gColors.darkBlue,
            tabBarLabel: ({ focused }) => {
              if (route.name === "Главная") {
                return (
                  <Text
                    style={[
                      { color: focused ? "white" : gColors.darkBlue },
                      styles.tabText,
                    ]}
                  >
                    Главная
                  </Text>
                );
              }
              return (
                <Text
                  style={[
                    { color: focused ? "white" : gColors.darkBlue },
                    styles.tabText,
                  ]}
                >
                  Статистика
                </Text>
              );
            },
          })}
        >
          <Tab.Screen name="Главная" component={HomeScreen} />
          <Tab.Screen name="Статистика" component={StatisticsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default registerRootComponent(App);

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: gColors.bgBlue,
  },
  tabText: {
    fontFamily: "Kelson",
    letterSpacing: 0.75,
    fontSize: 16,
  },
});
