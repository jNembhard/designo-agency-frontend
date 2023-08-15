import createTheme from "@mui/material/styles/createTheme";

const breakpoints = {
  sizes: {
    mobile: 0,
    tablet: 767,
    laptop: 1024,
    desktop: 1440,
  },
};

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      mobile: breakpoints.sizes.mobile,
      tablet: breakpoints.sizes.tablet,
      laptop: breakpoints.sizes.laptop,
      desktop: breakpoints.sizes.desktop,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          margin: "0",
          padding: "0",
          borderSizing: "border-box",
        },
      },
    },
  },

  palette: {
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
  },
  typography: {
    fontFamily: ["Jost", "sans-serif"].join(","),
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: "2.25rem",
      [`@media screen and (min-width: ${breakpoints.sizes.tablet}px)`]: {
        fontSize: "3rem",
        lineHeight: "3rem",
      },
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      lineHeight: "2.25rem",
      letterSpacing: "0.125rem",
      [`@media screen and (min-width: ${breakpoints.sizes.tablet}px)`]: {
        fontSize: "2.5rem",
        lineHeight: "3rem",
      },
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1.625rem",
      letterSpacing: "0.313rem",
    },
    body1: {
      fontSize: "0.938rem",
      fontWeight: 400,
      lineHeight: "1.563rem",
      [`@media screen and (min-width: ${breakpoints.sizes.tablet}px)`]: {
        fontSize: "1rem",
        lineHeight: "1.625rem",
      },
    },
  },
};

export const theme: Theme = createTheme(themeOptions);
