export const productTypeDef = `
type Product {
    ProductType: String!
    ProductID: String!
    title: String!
    description: String!
    image: String!
  }
  
  type PaginatedProducts {
    product: [Product!]!
    nextToken: String
  }
  
  type Query {
    product(ProductType: String!, ProductID: String): Product
    productGroup(ProductType: String!): PaginatedProducts!
    products(count: Int, ProductType: String, nextToken: String): PaginatedProducts!
  }`;
