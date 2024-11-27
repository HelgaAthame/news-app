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
