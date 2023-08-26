import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { designTypeDef } from "../../graphql/designTypeDef";
import PrimeDesign from "../../../components/molecules/home_components/PrimeDesign/PrimeDesign";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import userEvent from "@testing-library/user-event";

const mock = {
  header: "a description",
  images: {
    desktop: "desktop.jpg",
    desktopLarge: "desktopLarge.jpg",
    mobile: "mobile.jpg",
    tablet: "tablet.jpg",
  },
  title: "web design",
  slug: "/web-design",
};

const primeMock = {
  Query: {
    design: () => mock,
  },
};

const schema = makeExecutableSchema({
  typeDefs: designTypeDef,
  resolvers: primeMock,
});

describe("Prime Design component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("displays a loading skeleton while the Prime image link is loading", () => {
    apolloRender(<PrimeDesign designID="design-1" />, primeMock, schema, false);

    const primeSkeleton = screen.getByLabelText("Loading Web Design...");
    expect(primeSkeleton).toBeInTheDocument();
  });

  it("should render a PrimeDesign based on the data passed to the query", async (): Promise<void> => {
    apolloRender(<PrimeDesign designID="design-1" />, primeMock, schema, true);

    const aboutTitle = await screen.findByAltText("web design");
    expect(aboutTitle).toBeInTheDocument();
  });

  it("should show an error message when the design query fails", async (): Promise<void> => {
    const primeDesignErrorMock = {
      mocks: {
        Query: {
          design: () => {
            throw Error("Invalid about query");
          },
        },
      },
    };

    apolloRender(
      <PrimeDesign designID="design-1" />,
      primeDesignErrorMock,
      schema,
      true
    );
    const errorText = await screen.findByText(
      "Error occured while fetching design query data"
    );
    expect(errorText).toBeInTheDocument();
  });

  it("should change the color of the component when a user hovers over the link", async (): Promise<void> => {
    apolloRender(<PrimeDesign designID="design-1" />, primeMock, schema, true);

    const link = await screen.findByLabelText(
      "click to navigate to a design page"
    );
    const hoverStyles = window.getComputedStyle(link, ":hover");

    userEvent.hover(link);
    expect(hoverStyles.transition).toBe("background-color 0.3s ease-in-out");

    userEvent.unhover(link);
    expect(hoverStyles.transition).toBe("background-color 0.3s ease-in-out");
  });
});
