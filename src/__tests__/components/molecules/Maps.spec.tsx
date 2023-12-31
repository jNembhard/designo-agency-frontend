import { screen } from "@testing-library/react";
import Maps from "../../../components/molecules/Maps/Maps";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { locationTypeDef } from "../../graphql/locationTypeDef";

const schema = makeExecutableSchema({ typeDefs: locationTypeDef });

const mock = {
  LocationID: "location-1",
  address: {
    country: "united States",
    street: "123 fake street",
  },
  contact: {
    email: "fake@fake.com",
    phone: "222-222-333",
  },
  images: {
    desktop: "desktop.jpg",
    tabelt: "tablet.jpg",
  },
  title: "locations",
  office: "us office",
  slug: "/#us-office",
};

describe("Maps Component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  const locationMock = {
    mocks: {
      locations: () => mock,
    },
  };

  it("display a loading skeleton while the social icon is loading", () => {
    apolloRender(<Maps />, locationMock, schema, false);

    const mapsSkeleton = screen.getAllByLabelText("Loading location...");
    expect(mapsSkeleton).toHaveLength(3);
  });

  it("scrolls to the target element if the hash exists", () => {
    const scrollIntoViewMock = jest.fn();
    Element.prototype.scrollIntoView = scrollIntoViewMock();

    apolloRender(<Maps />, locationMock, schema, true);

    expect(scrollIntoViewMock).toHaveBeenCalled();
  });

  it("should display all maps and locations based on the data passed in the query", async (): Promise<void> => {
    apolloRender(<Maps />, locationMock, schema, true);

    const officeMaps = await screen.findAllByAltText("Hello World");

    expect(officeMaps).toHaveLength(2);
    expect(officeMaps[0]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
    expect(officeMaps[1]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
  });

  it("should show an error message when the getLocations query fails", async (): Promise<void> => {
    const mapsErrorMock = {
      mocks: {
        Query: {
          locations: () => {
            throw Error("invalid locations query");
          },
        },
      },
    };

    apolloRender(<Maps />, mapsErrorMock, schema, false);
    const errorText = await screen.findByText(
      "Error occured while fetching locations data"
    );
    expect(errorText).toBeInTheDocument();
  });
});
