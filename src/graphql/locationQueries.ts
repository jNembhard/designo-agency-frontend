import { gql } from "@apollo/client";

export const GET_LOCATION = gql`
  query getLocation($LocationID: String!) {
    location(LocationID: $LocationID) {
      address {
        country
        street
      }
      contact {
        email
        phone
      }
      images {
        desktop
        icon
        tablet
      }
      title
      office
      slug
    }
  }
`;

export const GET_LOCATIONS = gql`
  query getLocations($count: Int!) {
    locations(count: $count) {
      location {
        LocationID
        address {
          country
          street
        }
        contact {
          email
          phone
        }
        images {
          desktop
          tablet
        }
        title
        office
        slug
      }
    }
  }
`;

export const GET_PLACES = gql`
  query getLocations($count: Int!) {
    locations(count: $count) {
      location {
        LocationID
        images {
          icon
        }
        title
        slug
      }
    }
  }
`;
