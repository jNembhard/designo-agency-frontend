import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Products from "../../../components/organisms/Products/Products";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { productTypeDef } from "../../graphql/productTypeDef";

const schema = makeExecutableSchema({ typeDefs: productTypeDef });

const mock = {
  ProductType: "WebDesign",
  ProductID: "web-1",
  title: "product one",
  description: "This is a test product",
  image: "product.jpg",
};

describe("Products Component", () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  const productsMock = {
    mocks: {
      productGroup: () => mock,
    },
  };

  it("display loading skeletons while product are loading", () => {
    apolloRender(
      <Products productType={mock.ProductType} />,
      productsMock,
      schema
    );

    const productSkeleton = screen.getAllByLabelText("Loading project...");
    expect(productSkeleton.length).toBe(6);
  });

  it("should render selected products data based on the infomation passed to the query", async () => {
    apolloRender(
      <Products productType={mock.ProductType} />,
      productsMock,
      schema
    );

    const images = await screen.findAllByAltText("Hello World");

    expect(images.length).toBe(2);
    expect(images[1]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
  });

  it("should show an error message when the getProducts query fails", async () => {
    const productsErrorMock = {
      mocks: {
        Query: {
          productGroup: () => {
            throw Error("invalid products query");
          },
        },
      },
    };

    apolloRender(
      <Products productType={mock.ProductType} />,
      productsErrorMock,
      schema
    );

    await screen.findByText("Error occured while fetching products data");
  });
});
