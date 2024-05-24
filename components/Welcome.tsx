import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
  Modal,
  ActivityIndicator,
} from "react-native";
import { tempNews } from "./tempNews";
import { Wrapper } from "./Wrapper";
import { Ionicons } from "@expo/vector-icons";
import { AddNews } from "./AddNews";
import { useQuery } from "@apollo/client";
import { ALL_NEWS } from "../apollo/news";

export type News = {
  id: number;
  title: string;
  description: string;
  text: string;
  img: string;
};

export default function Welcome({ navigation }: { navigation: any }) {
  const { loading, error, data, previousData } = useQuery(ALL_NEWS);

  const loadScene = () => {
    navigation.navigate("Contacts");
  };
  const [news, setNews] = useState<News[]>(tempNews);
  const [addModalOpened, setAddModalOpened] = useState<boolean>(false);

  const addArticle = (article: News): void => {
    setNews((list) => [{ ...article, key: list.length }, ...list]);
    setAddModalOpened(false);
  };

  if (loading) return;
  <ActivityIndicator size="large" color="crimson" />;
  if (error) {
    return <Text>{JSON.stringify(error, null, 2)}</Text>;
  }

  return (
    <Wrapper>
      <AddNews
        visible={addModalOpened}
        onClose={() => setAddModalOpened(false)}
        //addArticle={addArticle}
      />
      <View className="flex-row items-center gap-2 justify-between w-full px-2">
        <Button title={`View contacts`} onPress={loadScene} color="crimson" />
        <TouchableOpacity onPress={() => setAddModalOpened(true)}>
          <Ionicons name="add-circle" size={40} color="green" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data.allNews}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            className="rounded-md bg-red-50 overflow-hidden"
            onPress={() => {
              navigation.navigate("Article", item);
            }}
          >
            <Image
              className="w-full h-48"
              source={{
                uri: item.img,
              }}
            />
            <View className="p-4 gap-2">
              <Text className="text-lg font-bold text-slate-700 leading-5">
                {item.title}
              </Text>
              <Text className="text-slate-800">{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View className="h-4" />}
      />
      <StatusBar style="auto" />
    </Wrapper>
  );
}
