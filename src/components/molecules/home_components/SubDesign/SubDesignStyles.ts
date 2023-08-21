export const subStyles = {
  link: {
    color: "white.main",
  },
  container: {
    position: "relative",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0.938rem",
    overflow: "hidden",
    bgcolor: "black.dark",
    mb: {
      mobile: "1.5rem",
      laptop: "0",
    },
    maxHeight: {
      mobile: "15.313rem",
      tablet: "11.8rem",
      laptop: "17.8rem",
    },
    maxWidth: {
      laptop: "33.813rem",
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
    maxWidth: "100%",
    height: "auto",
  },
  wrapper: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textTransform: "uppercase",
    fontSize: {
      mobile: "1.75rem",
      tablet: "2.5rem",
    },
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
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
