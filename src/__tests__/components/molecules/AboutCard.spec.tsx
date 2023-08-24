import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { aboutTypeDef } from "../../graphql/aboutTypeDef";
import AboutCard from "../../../components/molecules/AboutCard/AboutCard";

const schema = makeExecutableSchema({ typeDefs: aboutTypeDef });

const mock = {
  AboutID: "about-1",
  description: "all about description",
  images: {
    desktop: "desktop.jpg",
    heroPatternDesktop: "hero-desktop.jpg",
    heroPatternMobile: "hero-mobile.jpg",
    keypointBgPattern: "keypoint-bg.jpg",
    mobile: "mobile.webp",
    tablet: "tablet.webp",
  },
  title: "The About Page",
};

describe("AboutCard Component", () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  const aboutMock = {
    mocks: {
      locations: () => mock,
    },
  };

  it("display a loading skeleton while the social icon is loading", () => {
    apolloRender(
      <AboutCard aboutID="about-1" isdark="true" />,
      aboutMock,
      schema
    );

    const aboutSkeleton = screen.getByLabelText("loading about info...");
    expect(aboutSkeleton).toBeInTheDocument();
  });

  it("should render and AboutCard based on the data passed to the query", async () => {
    apolloRender(
      <AboutCard aboutID="about-1" isdark="true" />,
      aboutMock,
      schema
    );

    const aboutTitle = await screen.findByTitle("Hello World");

    expect(aboutTitle).toBeInTheDocument();
  });

  it.only("should show an error message when the getAbout query fails", async () => {
    const aboutErrorMock = {
      mocks: {
        about: () => {
          throw Error("invalid about query");
        },
      },
    };

    apolloRender(
      <AboutCard aboutID="about-1" isdark="true" />,
      aboutErrorMock,
      schema
    );

    await screen.findByText("Error occured while fetching the data");
  });
});
