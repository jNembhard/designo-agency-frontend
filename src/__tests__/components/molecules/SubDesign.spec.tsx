import { screen } from "@testing-library/react";
import SubDesign from "../../../components/molecules/home_components/SubDesign/SubDesign";
import "@testing-library/jest-dom/extend-expect";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { designTypeDef } from "../../graphql/designTypeDef";
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
  title: "app design",
  slug: "/app-design",
};

const subMock = {
  Query: {
    design: () => mock,
  },
};

const schema = makeExecutableSchema({
  typeDefs: designTypeDef,
  resolvers: subMock,
});

describe("SubDesign component", () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it("displays a loading skeleton while the Prime image link is loading", () => {
    apolloRender(<SubDesign designID="design-2" />, subMock, schema, false);

    const subSkeleton = screen.getByLabelText("Loading design option...");
    expect(subSkeleton).toBeInTheDocument();
  });

  it("should render a PrimeDesign based on the data passed to the query", async (): Promise<void> => {
    apolloRender(<SubDesign designID="design-2" />, subMock, schema, true);

    const subTitle = await screen.findByAltText("app design");
    expect(subTitle).toBeInTheDocument();
  });

  it("should show an error message when the design query fails", async (): Promise<void> => {
    const subDesignErrorMock = {
      mocks: {
        Query: {
          design: () => {
            throw Error();
          },
        },
      },
    };

    apolloRender(
      <SubDesign designID="design-2" />,
      subDesignErrorMock,
      schema,
      true
    );

    const errorText = await screen.findByText(
      "Error occured while fetching design query data"
    );
    expect(errorText).toBeInTheDocument();
  });

  it("should change the color of the component when a user hovers over the link", async (): Promise<void> => {
    apolloRender(<SubDesign designID="design-2" />, subMock, schema, true);

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
