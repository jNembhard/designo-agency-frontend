export const designHeaderStyles = {
  wrapper: {
    position: "relative",
    overflow: "hidden",
    maxWidth: "69.438rem",
    zIndex: "1",
    bgcolor: "peach.main",
    minHeight: {
      mobile: "20rem",
      tablet: "15.75rem",
    },
    padding: {
      mobile: "6.563rem 1.5rem",
      tablet: "4rem 1.5rem",
    },
    mx: {
      tablet: "2.5rem",
      laptop: "auto",
    },
    borderRadius: {
      tablet: "0.938rem",
    },
    width: {
      laptop: "95vw",
      desktop: "unset",
    },
  },
  bgImage: {
    position: "absolute",
    zIndex: "-1",
    top: {
      mobile: "1.875rem",
      tablet: "-10.625rem",
    },
    right: {
      mobile: "0",
      tablet: "-11.25rem",
    },
  },
  textContainer: {
    textAlign: "center",
    margin: "auto",
  },
  title: {
    color: "white.main",
    textTransform: "capitalize",
    mb: {
      mobile: "1.5rem",
    },
    fontSize: {
      tablet: "3rem",
    },
    lineHeight: {
      tablet: "3rem",
    },
  },
  text: {
    color: "white.main",
    maxWidth: "40ch",
    margin: "auto",
  },
};
