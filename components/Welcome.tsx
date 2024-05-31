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
import { AntDesign } from "@expo/vector-icons";
import { DeleteNews } from "./DeleteNews";
import { initialImageUri } from "./tempImageUri";

export type News = {
  id: number;
  title: string;
  description: string;
  text: string;
  img: string;
};

export default function Welcome({ navigation }: { navigation: any }) {
  const { loading, error, data } = useQuery(ALL_NEWS);

  const loadScene = () => {
    navigation.navigate("Contacts");
  };
  const [addModalOpened, setAddModalOpened] = useState<boolean>(false);
  const [deleteModalOpened, setDeleteModalOpened] = useState<boolean>(false);
  const [curArticle, setCurArticle] = useState<News | null>(null);

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
      <DeleteNews
        visible={deleteModalOpened}
        onClose={() => setDeleteModalOpened(false)}
        id={curArticle?.id ?? 0}
        name={curArticle?.title ?? "No name article"}
        //addArticle={addArticle}
      />
      <View className="flex-row items-center gap-2 justify-between w-full px-2">
        <Button title={`About us`} onPress={loadScene} color="crimson" />
        <TouchableOpacity onPress={() => setAddModalOpened(true)}>
          <Ionicons name="add-circle" size={40} color="green" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data.allNews}
        renderItem={({ item }) => (
          <TouchableOpacity
            key={item.id}
            className="rounded-md bg-red-50 overflow-hidden relative"
            onPress={() => {
              navigation.navigate("Article", item);
            }}
          >
            <View className="absolute w-full h-48 overflow-hidden">
              <Image
                className="w-full h-48 z-1"
                source={{
                  uri: initialImageUri,
                }}
              />
            </View>
            <Image
              className="w-full h-48 z-1"
              source={{
                uri: item.img,
              }}
            />
            <View className="p-4 gap-2">
              <View className="flex flex-row justify-between items-center">
                <Text className="text-lg font-bold text-slate-700 leading-5">
                  {item.title}
                </Text>

                <TouchableOpacity
                  onPress={() => {
                    setDeleteModalOpened(true);
                    setCurArticle(item);
                  }}
                  className="gap-2 flex-row items-start w-min justify-end"
                >
                  <AntDesign name="delete" size={24} color="black" />
                </TouchableOpacity>
              </View>
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
