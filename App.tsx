import "react-native-gesture-handler"; // если используешь react-navigation
import { enableScreens } from "react-native-screens"; // вот это нужно
enableScreens(); // активируем поддержку оптимизированных экранов

import { Navigate } from "./navigate";
import { ApolloProvider } from "@apollo/client";
import client from "./apollo/client";
import "./global.css";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Navigate />
    </ApolloProvider>
  );
}
