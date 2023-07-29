import { gql } from "@apollo/client";

export const GET_CALLOUT = gql`
  query getCallout($calloutID: String!) {
    callout(calloutID: $calloutID) {
      description
      image
      title
    }
  }
`;

export const GET_CALLOUTS = gql`
  query getCallouts($count: Int!) {
    callouts(count: $count) {
      callout {
        calloutID
        description
        image
        title
      }
    }
  }
`;
