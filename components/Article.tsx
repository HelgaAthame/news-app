import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Button,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Wrapper } from "./Wrapper";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { EditNews } from "./EditNews";
import { useQuery } from "@apollo/client";
import { ONE_NEWS } from "../apollo/news";

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
  const [editModalOpened, setEditModalOpened] = useState<boolean>(false);
  const { loading, error, data, refetch } = useQuery(ONE_NEWS, {
    variables: { id: +route.params.id },
  });
  // const [uri, setUri] = useState<string>(
  //   data
  //     ? data.oneNews.img
  //     : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
  // );

  if (loading) return;

  return data ? (
    <Wrapper>
      <EditNews
        visible={editModalOpened}
        onClose={() => setEditModalOpened(false)}
        article={{ ...data.oneNews }}
        getUpdatedArticle={refetch}
      />
      <View className="flex-row items-center gap-2 justify-between w-full px-2">
        <Button title={`Go to main page`} onPress={loadScene} color="crimson" />
        <TouchableOpacity
          onPress={() => setEditModalOpened(true)}
          className="gap-2 flex-row items-start"
        >
          <Feather name="edit" size={24} color="darkred" />
          <Text className="text-lg text-[#8B0000] font-medium uppercase">
            Edit
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView

        className="rounded-md bg-red-50 overflow-hidden w-full"
        contentContainerStyle={{
          flex: 1,
        }}
      >
        <Image
          className="w-full h-48 rounded-t-md"
          source={{
            uri: data
              ? data.oneNews.img
              : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg",
          }}
          // onError={() => {
          //   setUri(
          //     "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg"
          //   );
          // }}
        />
        <View className="p-4 gap-2 ">
          <Text className="text-xl font-bold text-slate-700 leading-6 py-2">
            {data.oneNews.title}
          </Text>
          <Text className="text-slate-800 text-base leading-5 font-semibold">
            {data.oneNews.description}
          </Text>
          <Text className="text-justify text-slate-700">
            {data.oneNews.text}
          </Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </Wrapper>
  ) : null;
}
