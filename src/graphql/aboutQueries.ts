import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
  query getAbout($AboutID: String!) {
    about(AboutID: $AboutID) {
      description
      images {
        desktop
        heroPatternDesktop
        heroPatternMobile
        mobile
        tablet
      }
      title
    }
  }
`;

export const GET_ABOUTS = gql`
  query getAllAbout($count: Int!) {
    allAbout(count: $count) {
      about {
        AboutID
        description
        images {
          desktop
          heroPatternDesktop
          heroPatternMobile
          mobile
          tablet
        }
        title
      }
    }
  }
`;
