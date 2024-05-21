import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";

export default function Contacts({ navigation }: { navigation: any }) {
  const loadScene = () => {
    navigation.goBack();
  };
  return (
    <View className="text-white-300 bg-green-300 h-full items-center justify-center">
      <Text>Contacts!</Text>
      <Button title={`Go to ${navigation.name}`} onPress={loadScene} />
      <StatusBar style="auto" />
    </View>
  );
}
