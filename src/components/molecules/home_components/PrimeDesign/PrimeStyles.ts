export const primeStyles = {
  link: {
    color: "white.main",
  },
  container: {
    position: "relative",
    direction: "column",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.938rem",
    overflow: "hidden",
    bgcolor: "black.dark",
    mb: {
      mobile: "2rem",
      tablet: "2rem",
      laptop: "0",
    },
    maxHeight: {
      mobile: "15.313rem",
      tablet: "11.8rem",
      laptop: "36.8rem",
    },
    transition: "background-color 0.2s ease-in-out",
    "&:hover": {
      bgcolor: "peach.main",
      transition: "background-color 0.3s ease-in-out",
    },
  },
  images: {
    objectFit: "cover",
    opacity: 0.5,
    width: "100%",
    height: "auto",
  },
  textWrapper: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    textTransform: "uppercase",
    fontSize: {
      mobile: "1.75rem",
      tablet: "2.5rem",
    },
    letterSpacing: {
      mobile: "0.088rem",
      tablet: "0.125rem",
    },
    color: "white",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    margin: {
      mobile: "0.75rem auto 0",
      tablet: "1.5rem auto 0",
    },
  },
  text: {
    fontSize: "0.938rem",
    fontWeight: 500,
    letterSpacing: "0.313rem",
    textTransform: "uppercase",
  },
};
