import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Places from "../../../components/organisms/Places/Places";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { locationTypeDef } from "../../graphql/locationTypeDef";

const schema = makeExecutableSchema({ typeDefs: locationTypeDef });

const mock = {
  LocationID: "location-1",
  images: {
    icons: "icon.png",
  },
  title: "United States",
  slug: "/united-states",
};

describe("Places Component", () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  const placeMock = {
    mocks: {
      locations: () => mock,
    },
  };

  it("display a loading skeleton while the social icon is loading", () => {
    apolloRender(<Places />, placeMock, schema);

    const placeSkeleton = screen.getByLabelText("loading locations...");
    expect(placeSkeleton).toBeInTheDocument();
  });

  it("should render selected places location data based on the infomation passed to the query", async () => {
    apolloRender(<Places />, placeMock, schema);

    const images = await screen.findAllByAltText("Hello World");

    expect(images.length).toBe(2);
    expect(images[1]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
  });

  it("should show an error message when the getCallouts query fails", async () => {
    const placesErrorMock = {
      mocks: {
        Query: {
          locations: () => {
            throw Error("invalid places query");
          },
        },
      },
    };

    apolloRender(<Places />, placesErrorMock, schema);

    await screen.findByText("Error occured while fetching data");
  });

  it("should provide the option to navigate to a section of the /locations page on Designo's website.", async () => {
    apolloRender(<Places />, placeMock, schema);

    const buttons = await screen.findAllByRole("button");

    expect(buttons.length).toBe(2);

    expect(buttons[0]).toHaveAttribute("islight", "false");
    expect(buttons[1]).toHaveAttribute("islight", "false");
  });
});
