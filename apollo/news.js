import { gql } from "@apollo/client";

export const ALL_NEWS = gql`
  query AllNews {
    allNews: getAllNews {
      id
      title
      description
      text
      img
    }
  }
`;

export const ONE_NEWS = gql`
  query OneNews($id: Float!) {
    oneNews: getOneNews(id: $id) {
      id
      title
      text
      description
      img
    }
  }
`;

export const CREATE_NEWS = gql`
  mutation createNews($news: CreateNewsInput!) {
    newNews: createNews(createNews: $news) {
      id
      title
      description
      text
      img
    }
  }
`;

export const UPDATE_NEWS = gql`
  mutation updateNews($news: UpdateNewsInput!) {
    updatedNews: updateNews(updateNews: $news) {
      id
      title
      description
      text
      img
    }
  }
`;

export const REMOVE_NEWS = gql`
  mutation RemoveNews($id: Float!) {
    removeNews(id: $id) {
      description
    }
  }
`;
