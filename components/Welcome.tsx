import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

export function Welcome() {
  return (
    <View className="text-white-300 bg-blue-300 h-full items-center justify-center">
      <Text>Welcome!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
