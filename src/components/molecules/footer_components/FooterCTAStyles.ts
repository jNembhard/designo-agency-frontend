export const footerCTAStyles = {
  wrapper: {
    position: "relative",
    overflow: "hidden",
    zIndex: 0,
    bgcolor: "peach.main",
    textAlign: "center",
    padding: {
      mobile: "4rem 0.75rem",
      tablet: "unset",
      laptop: "4.5rem 5.938rem",
    },
    mx: {
      mobile: "1.5rem",
      tablet: "2.438rem",
      laptop: "4rem",
      desktop: "10.25rem",
    },
    maxHeight: {
      laptop: "18.25rem",
    },
    borderRadius: "0.938rem",
  },
  bgImage: {
    position: "absolute",
    zIndex: "-1",
    bottom: {
      mobile: "-6.25rem",
    },
    right: {
      mobile: "-18.75rem",
      tablet: "-10rem",
      laptop: "0",
    },
  },
  container: {
    margin: {
      tablet: "3.688rem 3.563rem",
      laptop: "0",
    },
    alignItems: {
      laptop: "center",
    },
    justifyContent: "space-between",
  },
  inner: {
    marginBottom: "0.375rem",
    zIndex: 2,
  },
  titleWrapper: {
    maxWidth: {
      laptop: "28.688rem",
    },
  },
  title: {
    color: "white.main",
    mx: "auto",
    fontSize: {
      mobile: "2rem",
      tablet: "2.5rem",
    },
    lineHeight: {
      mobile: "1.25rem",
      tablet: "2.5rem",
    },
    textAlign: {
      mobile: "center",
      laptop: "left",
    },
    maxWidth: {
      tablet: "20.938rem",
      laptop: "unset",
    },
    mb: {
      tablet: "1.25rem",
    },
  },
  descriptionWrapper: {
    mt: "1.25rem",
    mb: "2rem",
    textAlign: {
      laptop: "left",
    },
  },
  description: {
    color: "white.main",
    lineHeight: "1.563rem",
    mx: {
      mobile: "auto",
      laptop: "unset",
    },
    maxWidth: {
      mobile: "29.688rem",
      laptop: "45ch",
    },
  },
};
