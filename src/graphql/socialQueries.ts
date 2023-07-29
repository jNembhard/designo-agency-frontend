import { gql } from "@apollo/client";

export const GET_SOCIAL = gql`
  query getSocial($SocialID: String!) {
    social(SocialID: $SocialID) {
      SocialID
      icon
      name
      socialUrl
    }
  }
`;

export const GET_SOCIALS = gql`
  query getSocials($count: String!) {
    socials(count: $count) {
      social {
        SocialID
        icon
        name
        socialUrl
      }
    }
  }
`;
