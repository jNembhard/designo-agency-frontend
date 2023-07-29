import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query getProduct($ProductType: String!, $ProductID: String!) {
    product(ProductType: $ProductType, ProductID: $ProductID) {
      ProductType
      description
      image
      title
    }
  }
`;

export const GET_PRODUCT_GROUP = gql`
  query getProductGroup($ProductType: String!) {
    productGroup(ProductType: $ProductType) {
      product {
        ProductID
        description
        image
        title
      }
    }
  }
`;

export const GET_PRODUCTS = gql`
  query getProducts($count: String!) {
    products(count: $count) {
      product {
        ProductID
        ProductType
        description
        image
        title
      }
    }
  }
`;
