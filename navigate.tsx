import React from "react";
import Welcome from "./components/Welcome";
import Contacts from "./components/Contacts";
import Article from "./components/Article";
import { ScrollView, type TextStyle, StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

const headerStyle = {
  backgroundColor: "#eb5d6d",
};
const headerTitleStyle: TextStyle = {
  fontWeight: "600", // Полужирный шрифт для акцента
  fontSize: 24, // Увеличенный размер текста для заголовков
  color: "#F7D7D7", // Нежный цвет
  textAlign: "center", // Выравнивание текста по центру
  textTransform: "uppercase", // Верхний регистр для заголовков
  letterSpacing: 1.5, // Добавляем расстояние между буквами
  textShadowColor: "rgba(0, 0, 0, 0.3)", // Цвет тени с прозрачностью
  textShadowOffset: { width: 1, height: 2 }, // Смещение тени
  textShadowRadius: 4, // Радиус размытия тени
};
const headerTintColor = "#F7D7D7";
const styles = StyleSheet.create({
  container: {
    padding: 1,
    minHeight: "100%",
  },
});

export const Navigate = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        minHeight: "100%",
        overflow: "visible",
        flexGrow: 1,
      }}
      style={styles.container}
    >
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
              headerTintColor: headerTintColor,
              headerTitleStyle: headerTitleStyle,
            }}
          />
          <Stack.Screen
            name="Article"
            component={Article}
            options={{
              title: "Article",
              headerStyle: headerStyle,
              headerTintColor: headerTintColor,
              headerTitleStyle: headerTitleStyle,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ScrollView>
  );
};
