export const navbarStyles = {
  wrapper: {
    flexGrow: 1,
    maxWidth: "69.438rem",
    mx: "auto",
  },
  appBar: {
    position: "static",
    boxShadow: "none",
    backgroundColor: "transparent",
    padding: {
      mobile: "2.188rem 0",
      tablet: "2rem 0",
    },
  },
  toolbar: {
    justifyContent: "space-between",
  },
  logo: {
    maxWidth: "12.625rem",
    flexGrow: 1,
    paddingTop: "0.625rem",
  },
  linkContainers: {
    color: "black.main",
    fontSize: "0.875rem",
    fontWeight: 400,
    letterSpacing: "0.125rem",
    margin: "0 1.313rem",
    textTransform: "uppercase",
    textDecoration: "none",
    display: {
      mobile: "none",
      tablet: "unset",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  linkText: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0",
      height: "0.063rem",
      bgcolor: "black.main",
      transition: "width 0.3s ease",
    },
    "&:hover::before": {
      width: "100%",
    },
    "&:not(:hover)::before": {
      width: "0",
      transition: "width 0.3s ease",
      right: 0,
      left: "auto",
    },
  },
  iconButton: {
    color: "inherit",
    display: {
      tablet: "none",
    },
  },
};
