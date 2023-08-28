import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Products from "../../../components/organisms/Products/Products";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { productTypeDef } from "../../graphql/productTypeDef";

const mock = {
  ProductType: "WebDesign",
  ProductID: "web-1",
  title: "product one",
  description: "This is a test product",
  image: "product.jpg",
};

const productsMock = {
  Query: {
    productGroup: () => mock,
  },
};

const schema = makeExecutableSchema({
  typeDefs: productTypeDef,
  resolvers: productsMock,
});

describe("Products Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("display loading skeletons while product are loading", () => {
    apolloRender(
      <Products productType="WebDesign" />,
      productsMock,
      schema,
      false
    );

    const productSkeleton = screen.getByLabelText("loading products...");
    expect(productSkeleton).toBeInTheDocument();
  });

  it("should render selected products data based on the infomation passed to the query", async (): Promise<void> => {
    apolloRender(
      <Products productType="WebDesign" />,
      productsMock,
      schema,
      false
    );

    const images = await screen.findAllByAltText("Hello World");

    expect(images).toHaveLength(2);
    expect(images[1]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
  });

  it("should show an error message when the getProducts query fails", async (): Promise<void> => {
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
      <Products productType="WebDesign" />,
      productsErrorMock,
      schema,
      false
    );

    const errorText = await screen.findByText(
      "Error occured while fetching products data"
    );
    expect(errorText).toBeInTheDocument();
  });
});
