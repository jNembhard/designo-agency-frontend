import { screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import FooterBottom from "../../../components/molecules/footer_components/FooterBottom";
import userEvent from "@testing-library/user-event";
import { apolloRender } from "../../mockWrappers/ApolloRenderWrapper";
import { socialTypeDefs } from "../../graphql/socialTypeDef";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { useMediaQuery as useMockMediaQuery } from "@mui/material";

const schema = makeExecutableSchema({ typeDefs: socialTypeDefs });

const mock = {
  socialID: "social-1",
  icon: "icon-social-media",
  title: "test social",
  socialUrl: "https://www.linkedin.com/in",
};

jest.mock("@mui/material/useMediaQuery");

describe("FooteBottom Component", () => {
  afterAll(() => {
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

  const directions = [
    { isBreakpoint767: true, flex: "flex-direction: row" },
    { isBreakpoint767: false, flex: "flex-direction: column" },
  ];

  describe("directions", () => {
    test.each(directions)(
      "renders with specific Grid direction based on the breakpoint",
      (direction) => {
        (useMockMediaQuery as jest.Mock).mockReturnValue(
          direction.isBreakpoint767
        );

        apolloRender(<FooterBottom />, socialMock, schema, true);

        const flexDirection = screen.getByLabelText("changes grid direction");
        expect(flexDirection).toHaveStyle(direction.flex);
      }
    );

    test.each(directions)(
      "renders with specific Stack direction based on the breakpoint",
      (direction) => {
        (useMockMediaQuery as jest.Mock).mockReturnValue(
          direction.isBreakpoint767
        );

        apolloRender(<FooterBottom />, socialMock, schema, true);

        const flexDirection = screen.getByLabelText("changes stack direction");
        expect(flexDirection).toHaveStyle(direction.flex);
      }
    );
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
