import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text, View, Button, FlatList, TouchableOpacity } from "react-native";
import { tempNews } from "./tempNews";

export type News = {
  title: string;
  description: string;
  text: string;
};

export default function Welcome({ navigation }: { navigation: any }) {
  const loadScene = () => {
    navigation.navigate("Contacts");
  };
  const [news, setNews] = useState<News[]>(tempNews);
  return (
    <View className="text-white-300 bg-blue-300 h-full items-center justify-center">
      <Text>Welcome!</Text>
      <Button title={`Go to ${navigation.name}`} onPress={loadScene} />
      <FlatList
        data={news}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Article", item);
            }}
          >
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}
