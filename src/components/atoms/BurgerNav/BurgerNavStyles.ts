export const burgerNavStyles = {
  wrapper: {
    position: "relative",
    display: {
      tablet: "none",
    },
  },
  backdrop: {
    color: "black.main",
    zIndex: 1200,
    top: "8.875rem",
  },
  backdropContainer: {
    width: "100%",
    height: "14.688rem",
    bgcolor: "black.main",
    padding: "3rem 1.5rem",
    alignItems: "left",
    justifyContent: "start",
    position: "absolute",
    zIndex: 1300,
    top: "-0.05rem",
    transition: "opacity 0.3s ease-in-out, transform 0.3s ease-in-out",
  },
  links: {
    fontSize: "1.5rem",
    lineHeight: "1.563rem",
    letterSpacing: "0.125rem",
    textTransform: "uppercase",
    textAlign: "left",
    textDecoration: "none",
    color: "white.main",
    transition: "color 0.3s ease-in-out",
    "&:hover": {
      color: "peach.main",
      transition: "color 0.3s ease-in-out",
    },
  },
};
