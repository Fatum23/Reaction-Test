import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { registerRootComponent } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { gStyle } from "./shared/gStyle";

import { HomeScreen } from "./screens/HomeScreen/HomeScreen";
import { StatisticsScreen } from "./screens/StatisticsScreen/StatisticsScreen";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <SafeAreaView style={styles.main}>
      <StatusBar backgroundColor={gStyle.bgBlue} barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            header: () => null,
            tabBarStyle: {
              backgroundColor: gStyle.bgBlue,
              borderTopWidth: 0,
              shadowRadius: 0,
              elevation:0
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
            tabBarActiveTintColor: gStyle.lightBlue,
            tabBarInactiveTintColor: gStyle.darkBlue,
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
    backgroundColor: gStyle.bgBlue,
  },
});
