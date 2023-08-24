import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Socials from "../../../components/molecules/Socials/Socials";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { socialTypeDefs } from "../../graphql/socialTypeDef";

const schema = makeExecutableSchema({ typeDefs: socialTypeDefs });

const testImage = process.env.REACT_APP_TEST_IMAGE_ENDPOINT;
const mock = {
  socialID: "social-1",
  icon: testImage,
  title: "test social",
  socialUrl: "https://www.linkedin.com/in",
};

describe("Socials Component", () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  const socialMock = {
    mocks: {
      socials: () => mock,
    },
  };

  it("display a loading skeleton while the social icon is loading", () => {
    apolloRender(<Socials />, socialMock, schema);

    const socialSkeleton = screen.getAllByLabelText("loading social link...");
    expect(socialSkeleton.length).toBe(5);
  });

  it("should display all social icon links based on the data passed in the query", async () => {
    apolloRender(<Socials />, socialMock, schema);

    const icons = await screen.findAllByAltText("Hello World");

    expect(icons.length).toBe(2);
    expect(icons[0]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
    expect(icons[1]).toHaveAttribute(
      "src",
      process.env.REACT_APP_CLOUDFRONT_ENDPOINT + "Hello World"
    );
  });

  it("should show an error message when the getSocials query fails", async () => {
    const socialsErrorMock = {
      mocks: {
        Query: {
          socials: () => {
            throw Error("invalid callout query");
          },
        },
      },
    };

    apolloRender(<Socials />, socialsErrorMock, schema);
    await screen.findByText("Error occured while fetching data");
  });

  it("should take you to a social media page on link click", async () => {
    apolloRender(<Socials />, socialMock, schema);

    const links = await screen.findAllByRole("link");

    expect(links.length).toBe(2);

    expect(links[0]).toHaveAttribute("href", "Hello World");
    expect(links[1]).toHaveAttribute("href", "Hello World");
  });

  it("should change the icon color on mouse enter and reset on mouse leave", async () => {
    apolloRender(<Socials />, socialMock, schema);

    const links = await screen.findAllByAltText("Hello World");

    links.forEach((link) => {
      fireEvent.mouseEnter(link);
      expect(link).toHaveStyle(
        "filter: brightness(0) saturate(100%) invert(91%) sepia(19%) saturate(6125%) hue-rotate(303deg) brightness(114%) contrast(101%)"
      );

      fireEvent.mouseLeave(link);
      expect(link).toHaveStyle("filter: none");
    });
  });
});
