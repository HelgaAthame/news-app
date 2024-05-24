import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  //uri: "http://127.0.0.1:3003/graphql", // Your NestJS GraphQL endpoint
  uri: "https://newsapp-back-production.up.railway.app/graphql",
  credentials: "include", // Send cookies with every request
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
