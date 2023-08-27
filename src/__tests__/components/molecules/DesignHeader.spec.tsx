import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { designTypeDef } from "../../graphql/designTypeDef";
import DesignHeader from "../../../components/molecules/DesignHeader/DesignHeader";

const mock = {
  DesignID: "design-1",
  images: {
    bgPattern: "bgimage.jpg",
  },
  header: "this is a description of the design",
  title: "Web Design",
};

const designMock = {
  Query: {
    design: () => mock,
  },
};

const schema = makeExecutableSchema({
  typeDefs: designTypeDef,
  resolvers: designMock,
});

describe("DesignHeader component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("displays a loading skeleton while the social icon is loading", () => {
    apolloRender(
      <DesignHeader designID={mock.DesignID} />,
      designMock,
      schema,
      false
    );

    const placeSkeleton = screen.getByLabelText("Loading design header...");
    expect(placeSkeleton).toBeInTheDocument();
  });

  it("should render selected design header data based on the infomation passed to the query", async (): Promise<void> => {
    apolloRender(
      <DesignHeader designID={mock.DesignID} />,
      designMock,
      schema,
      true
    );

    const resultTitle = await screen.findByText(mock.title);
    const resultHeader = await screen.findByText(mock.header);
    const image = await screen.findByAltText("");

    expect(resultTitle).toBeInTheDocument();
    expect(resultHeader).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + mock.images.bgPattern
    );
  });

  it("should show an error message when the the GET_DESIGN_HEADER query fails", async (): Promise<void> => {
    const designsErrorMock = {
      mocks: {
        Query: {
          design: () => {
            throw Error("invalid places query");
          },
        },
      },
    };

    apolloRender(
      <DesignHeader designID={mock.DesignID} />,
      designsErrorMock,
      schema,
      true
    );

    const errorText = await screen.findByText(
      "Error occured while fetching design data"
    );
    expect(errorText).toBeInTheDocument();
  });
});
