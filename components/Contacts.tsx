import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export function Contacts() {
  return (
    <View className="text-white-300 bg-green-300 h-full items-center justify-center">
      <Text>Contacts!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
