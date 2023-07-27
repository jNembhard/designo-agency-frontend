import { gql } from "@apollo/client";

export const GET_ABOUT = gql`
  query loadAbout($AboutID: String!) {
    getAbout(AboutID: $AboutID) {
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
