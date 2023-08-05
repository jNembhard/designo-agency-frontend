import createTheme from "@mui/material/styles/createTheme";

const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1200,
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
      fontSize: "3rem",
      fontWeight: 500,
      lineHeight: "3rem",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: 500,
      lineHeight: "3rem",
      letterSpacing: "0.125rem",
    },
    h3: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: "1rem",
      letterSpacing: "0.313rem",
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: "1.625rem",
    },
  },
};

export const theme: Theme = createTheme(themeOptions);
