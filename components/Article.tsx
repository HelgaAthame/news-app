import { StatusBar } from "expo-status-bar";
import { Text, View, Button, Image, ScrollView } from "react-native";
import { Wrapper } from "./Wrapper";
import { News } from "./Welcome";
import { useState } from "react";

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
  const [uri, setUri] = useState<string>(route.params.img)
  return (
    <Wrapper>
      <Button
        title={`Go to ${navigation.name}`}
        onPress={loadScene}
        color="crimson"
      />
      <ScrollView className="rounded-md bg-red-50 overflow-hidden w-full">
        <Image
          className="w-full h-48 rounded-t-md"
          source={{
            uri: uri,
          }}
          onError={() => {setUri("https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg")}}
        />
        <View className="p-4 gap-2">
          <Text className="text-xl font-bold text-slate-700 leading-6">
            {route.params.title}
          </Text>
          <Text className="text-slate-800 text-base leading-5 font-semibold">
            {route.params.description}
          </Text>
          <Text className="text-justify text-slate-700">
            {route.params.text}
          </Text>
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </Wrapper>
  );
}
