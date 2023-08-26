import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterBottom from "../../../components/molecules/footer_components/FooterBottom";
import userEvent from "@testing-library/user-event";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { socialTypeDefs } from "../../graphql/socialTypeDef";
import { makeExecutableSchema } from "@graphql-tools/schema";

const schema = makeExecutableSchema({ typeDefs: socialTypeDefs });

const mock = {
  socialID: "social-1",
  icon: "icon-social-media",
  title: "test social",
  socialUrl: "https://www.linkedin.com/in",
};

describe("FooteBottom Component", () => {
  beforeAll(() => {
    jest.clearAllMocks();
  });

  const socialMock = {
    mocks: {
      socials: () => mock,
    },
  };

  const navlinks = [0, 1, 2, 3];

  it("should render the FooterBottom", () => {
    apolloRender(<FooterBottom />, socialMock, schema, true);

    const logoImage = screen.getByAltText("designo-logo");
    expect(logoImage).toBeInTheDocument();
  });

  test.each(navlinks)(
    "should render the FooterBottom component and underline links on hover",
    (navlink: number, done: any) => {
      apolloRender(<FooterBottom />, socialMock, schema, false);

      const link = screen.getAllByRole("link")[navlink];
      const hoverStyles = window.getComputedStyle(link, ":hover");

      setTimeout(() => {
        userEvent.hover(link);
        expect(hoverStyles.textDecoration).toMatch(/underline|none/);

        userEvent.unhover(link);
        expect(hoverStyles.textDecoration).toMatch(/underline|none/);

        done();
      }, 1000);
    }
  );
});
