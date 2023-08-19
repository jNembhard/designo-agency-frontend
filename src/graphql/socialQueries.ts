import { gql } from "@apollo/client";

export const GET_SOCIAL = gql`
  query getSocial($SocialID: String!) {
    social(SocialID: $SocialID) {
      SocialID
      icon
      title
      socialUrl
    }
  }
`;

export const GET_SOCIALS = gql`
  query getSocials($count: Int!) {
    socials(count: $count) {
      social {
        SocialID
        icon
        title
        socialUrl
      }
    }
  }
`;
