import { theme } from "../../styles/theme";

describe("Theme", () => {
  it("should create a valid theme object", () => {
    const testTheme = theme;
    expect(testTheme).toBeDefined();
    expect(testTheme.breakpoints).toBeDefined();
    expect(testTheme.palette).toBeDefined();
    expect(testTheme.typography).toBeDefined();
  });

  it("should define breakpoints correctly", () => {
    const testTheme = theme;
    expect(testTheme.breakpoints).toMatchObject({
      values: {
        mobile: 0,
        tablet: 767,
        laptop: 1024,
        desktop: 1440,
      },
    });
  });

  it("should define typography styles correctly", () => {
    const testTheme = theme;
    expect(testTheme.typography.h1).toMatchObject({
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: "2.25rem",
    });
  });

  it("should define palette colors correctly", () => {
    const testTheme = theme;
    expect(testTheme.palette).toMatchObject({
      sand: "#FDF3F0",
      peach: {
        main: "#e7816b",
        light: "#ffad9b",
      },
      black: {
        main: "#333136",
        dark: "#1d1c1e",
      },
      white: {
        main: "#ffffff",
        dark: "#f1f3f5",
      },
    });
  });
});
