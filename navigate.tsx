import React from "react";
import Welcome from "./components/Welcome";
import Contacts from "./components/Contacts";
import Article from "./components/Article";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ title: "Main Page" }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{ title: "About us" }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{ title: "Article" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
