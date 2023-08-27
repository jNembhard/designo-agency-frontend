import { gql } from "@apollo/client";

export const GET_DESIGN = gql`
  query getDesign($DesignID: String!) {
    design(DesignID: $DesignID) {
      header
      images {
        desktop
        desktopLarge
        mobile
        tablet
      }
      title
      slug
    }
  }
`;

export const GET_DESIGN_HEADER = gql`
  query getDesign($DesignID: String!) {
    design(DesignID: $DesignID) {
      DesignID
      images {
        bgPattern
      }
      header
      title
    }
  }
`;

export const GET_SEO_DESIGN = gql`
  query getDesign($DesignID: String!) {
    design(DesignID: $DesignID) {
      header
      title
    }
  }
`;

export const GET_DESIGNS = gql`
  query getDesigns($count: Int!) {
    designs(count: $count) {
      design {
        DesignID
        header
        images {
          desktop
          desktopLarge
          mobile
          tablet
        }
        title
        slug
      }
    }
  }
`;
