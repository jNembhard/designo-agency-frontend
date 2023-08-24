export const socialTypeDefs = `
type Social {
    SocialID: String!
    title: String!
    socialUrl: String!
    icon: String!
  }
  
  type PaginatedSocials {
    social: [Social!]!
    nextToken: String
  }
  
  type Query {
    social(SocialID: String): Social
    socials(count: Int, nextToken: String): PaginatedSocials!
  }`;
