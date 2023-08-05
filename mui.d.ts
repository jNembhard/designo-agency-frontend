declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }

  interface TypographyOptions {
    fontFamily?: string;
    h1?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight: string;
    };
    h2?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: string;
      letterSpacing?: string;
    };
    h3?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: string;
      letterSpacing?: string;
    };
    body1?: {
      fontSize?: string;
      fontWeight?: number;
      lineHeight?: string;
    };
  }

  interface PaletteOptions {
    sand?: string;
    peach?: {
      main: string;
      light: string;
    };
    black?: {
      main: string;
      dark: string;
    };
    white?: {
      main: string;
      dark: string;
    };
  }

  interface OverrideOptions {
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: string;
            padding: string;
            borderSizing: string;
          };
        };
      };
    };
  }
}

interface Theme {
  breakpoints: BreakpointsOverrides;
  palette: PaletteOptions;
  components?: OverrideOptions;
  typography: TypographyOptions;
}

interface ThemeOptions {
  breakpoints?: BreakpointOverrides;
  palette?: PaletteOptions;
  components?: OverrideOptions;
  typography?: TypographyOptions;
}
