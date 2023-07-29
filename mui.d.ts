declare module "@mui/material/styles" {
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
}

interface Theme {
  palette: PaletteOptions;
  typography: TypographyOptions;
}

interface ThemeOptions {
  palette?: PaletteOptions;
  typography?: TypographyOptions;
}
