import { StatusBar } from "expo-status-bar";
import { Text, View, Button } from "react-native";
import { Wrapper } from "./Wrapper";

export default function Contacts({ navigation }: { navigation: any }) {
  const loadScene = () => {
    navigation.goBack();
  };
  return (
    <Wrapper>
      <Text>Contacts!</Text>
      <Button title={`Go to main page`} onPress={loadScene} color="crimson" />
      <StatusBar style="auto" />
    </Wrapper>
  );
}
