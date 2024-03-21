import * as Font from "expo-font";

export const loadFonts = async () => {
  await Font.loadAsync({
    Kelson: require("../../../assets/fonts/kelson.otf"),
  });
};
