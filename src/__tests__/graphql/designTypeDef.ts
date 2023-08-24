export const designTypeDef = `
type Design {
    DesignID: String!
    title: String!
    slug: String!
    images: designImages!
    header: String!
  }
  
  type designImages {
    desktop: String!
    desktopLarge: String
    tablet: String!
    mobile: String!
    bgPattern: String!
  }
  
  type PaginatedDesigns {
    design: [Design!]!
    nextToken: String
  }
  
  type Query {
    design(DesignID: String!): Design
    designs(count: Int, nextToken: String): PaginatedDesigns!
  }`;
