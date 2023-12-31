export const aboutTypeDef = `
type About {
    AboutID: String!
    title: String!
    description: String!
    images: aboutImages!
  }
  
  type aboutImages {
    desktop: String!
    tablet: String!
    mobile: String!
    heroPatternDesktop: String
    heroPatternMobile: String
    keypointBgPattern: String
  }
  
  type PaginatedAbout {
    about: [About!]!
    nextToken: String
  }
  
  type Query {
    about(AboutID: String!): About
    allAbout(count: Int, nextToken: String): PaginatedAbout!
  }`;
