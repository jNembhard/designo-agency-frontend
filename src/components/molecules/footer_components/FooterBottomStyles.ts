export const footerBottomStyles = {
  container: {
    zIndex: "-1",
    bgcolor: "black.dark",
    position: "absolute",
    alignItems: {
      mobile: "center",
    },
    justifyContent: {
      mobile: "center",
      tablet: "space-between",
    },
    textAlign: {
      mobile: "center",
      tablet: "left",
    },
    top: {
      mobile: "15rem",
      laptop: "12rem",
    },
    width: {
      mobile: "100%",
      tablet: "100%",
    },
    height: {
      mobile: "54.938rem",
      tablet: "26.438rem",
    },
    pt: {
      mobile: "6.25rem",
      tablet: "10.813rem",
    },
    px: {
      tablet: "2.438rem",
      laptop: "10.25rem",
    },
    pb: {
      tablet: "1.25rem",
      laptop: "1.875rem",
    },
  },
  logo: {
    width: "12.625rem",
    height: "1.688rem",
  },
  divider: {
    width: "85%",
    marginTop: "2rem",
    display: {
      tablet: "none",
    },
  },
  navLinkWrapper: {
    pt: {
      mobile: "1rem",
      tablet: "0",
    },
    px: "0",
  },
  navLinkText: {
    color: "white.main",
    textTransform: "uppercase",
    textDecoration: "none",
    lineHeight: "0.875rem",
    letterSpacing: "0.125rem",
    px: "0",
    fontSize: {
      mobile: "0.875rem",
    },
    margin: {
      mobile: "1rem 0",
      tablet: "0 1.313rem",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  navLinkContainer: {
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "0",
      height: "0.063rem",
      bgcolor: "white.main",
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
  dividerTwo: {
    width: {
      tablet: "90vw",
      laptop: "100%",
    },
    display: {
      mobile: "none",
      tablet: "unset",
    },
  },
};
