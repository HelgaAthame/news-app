import { gql } from "@apollo/client";

export const ALL_NEWS = gql`
  query AllNews {
    getAllNews {
      id
      title
      description
      text
      img
    }
  }
`;

export const ONE_NEWS = gql`
  query OneNews($id: ID!) {
    oneNews: getOneNews(id: $id) {
      id
      text
      description
      img
    }
  }
`;
