export const locationTypeDef = `
type Location {
    LocationID: String!
    title: String!
    images: locationImages!
    address: locationAddress!
    contact: locationContact!
    office: String!
    slug: String!
  }
  
  type locationAddress {
    street: String!
    country: String!
  }
  
  type locationImages {
    desktop: String!
    tablet: String!
    icon: String!
  }
  
  type locationContact {
    phone: String!
    email: String!
  }
  
  type PaginatedLocations {
    location: [Location!]!
    nextToken: String
  }
  
  type Query {
    location(LocationID: String!): Location
    locations(count: Int, nextToken: String): PaginatedLocations!
  }`;
