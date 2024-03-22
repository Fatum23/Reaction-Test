import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getItem(key: string): Promise<string> {
  const result = await AsyncStorage.getItem(key).then((item) => {
    if (item === null) {
      return "-";
    } else {
      return item;
    }
  });
  return result;
}

export async function setItem(key: string, value: string): Promise<void> {
  await AsyncStorage.setItem(key, value);
}
