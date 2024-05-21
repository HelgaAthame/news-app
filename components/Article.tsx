import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";

export type News = {
  title: string;
  description: string;
  text: string;
};

export default function Article({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const loadScene = () => {
    navigation.navigate("Welcome");
  };
  return (
    <View className="text-white-300 bg-blue-300 h-full items-center justify-center">
      <Button title={`Go to ${navigation.name}`} onPress={loadScene} />
      <Text>{route.params.title}</Text>
      <Text>{route.params.description}</Text>
      <Text>{route.params.text}</Text>

      <StatusBar style="auto" />
    </View>
  );
}
