import { gql } from "@apollo/client";

export const GET_ALL_MATCHES = gql`
  query GetAllMatch {
    getAllMatches {
      id
      date
      status
      team1 {
        id
        name
      }
      team2 {
        id
        name
      }
    }
  }
`;