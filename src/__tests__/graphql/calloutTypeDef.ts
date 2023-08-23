export const calloutTypeDefs = `
type Callout {
  calloutID: String!
  title: String!
  description: String!
  image: String!
}

type PaginatedCallouts {
  callout: [Callout!]!
  nextToken: String
}

type Query {
  callout(calloutID: String!): Callout
  callouts(count: Int, nextToken: String): PaginatedCallouts!
}
`;
