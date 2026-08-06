import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable, ScrollView } from "react-native";
import { Wrapper } from "./Wrapper";
import { Button } from "./Button";

export default function Contacts({ navigation }: { navigation: any }) {
  const loadScene = () => {
    navigation.goBack();
  };
  return (
    <Wrapper>
      <View className="justify-between flew-col grow w-full">
        <Button text={"Go to main page"} onPress={loadScene} />
        <View className="h-4"></View>
        <ScrollView
          className="rounded-md bg-red-50 overflow-hidden "
          contentContainerStyle={{
            flex: 1,
          }}
        >
          <View className="p-4 gap-2 ">
            <Text className="text-xl font-bold text-slate-700 leading-6 py-2">
              Managing and reading articles app
            </Text>
            <Text className="text-slate-800 text-base leading-5 font-semibold">
              Stack
            </Text>
            {[
              "Expo",
              "React Native",
              "Native Wind",
              "Formik",
              "Yup",
              "Typescript",
              "Nest js",
              "Apollo",
              "GraphQL",
              "TypeORM",
              "PostgreSQL",
            ].map((el, ind) => (
              <Text className="text-justify text-slate-700" key={ind}>
                {el}
              </Text>
            ))}
            <View className="h-4"></View>
            <Text className="text-slate-800 text-base leading-5 font-semibold">
              Created by Olga Khmaruk
            </Text>
            <Text className="text-justify text-slate-700">
              olgaivanovna2304@gmail.com
            </Text>
          </View>
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </Wrapper>
  );
}
