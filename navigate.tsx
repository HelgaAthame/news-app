import React from "react";
import Welcome from "./components/Welcome";
import Contacts from "./components/Contacts";
import Article from "./components/Article";
import type { TextStyle, Button } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const headerStyle = {
  backgroundColor: "#eb5d6d",
};
const headerTitleStyle: TextStyle = {
  color: "#F7D7D7",
  fontWeight: "300",
};

export const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: "Article list",
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{
            title: "About us",
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
          }}
        />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{
            title: "Article",
            headerStyle: headerStyle,
            headerTitleStyle: headerTitleStyle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
