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
  afterAll(() => {
    jest.clearAllMocks();
  });

  const aboutMock = {
    mocks: {
      getAbout: () => mock,
    },
  };

  it("displays a loading skeleton while the social icon is loading", () => {
    apolloRender(
      <AboutCard aboutID="about-1" isdark="true" />,
      aboutMock,
      schema,
      false
    );

    const aboutSkeleton = screen.getByLabelText("loading about info...");
    expect(aboutSkeleton).toBeInTheDocument();
  });

  it("should render and AboutCard based on the data passed to the query", async (): Promise<void> => {
    apolloRender(
      <AboutCard aboutID="about-1" isdark="true" />,
      aboutMock,
      schema,
      true
    );

    const aboutTitle = await screen.findByTitle("Hello World");
    expect(aboutTitle).toBeInTheDocument();
  });

  it("should show an error message when the getAbout query fails", async (): Promise<void> => {
    const aboutErrorMock = {
      mocks: {
        getAbout: () => {
          throw Error("Invalid about query");
        },
      },
    };

    apolloRender(
      <AboutCard aboutID="" isdark="true" />,
      aboutErrorMock,
      schema,
      false
    );

    await screen.findByText("Error occured while fetching about query data");
  });
});
