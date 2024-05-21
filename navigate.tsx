import React from "react";
import { Welcome } from "./components/Welcome";
import { Contacts } from "./components/Contacts";

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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
