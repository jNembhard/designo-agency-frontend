export const contactTemplateStyles = {
  wrapper: {
    bgcolor: "peach.main",
    position: "relative",
    overflow: "hidden",
    zIndex: "1",
    display: { laptop: "flex" },
    alignItems: "center",
    justifyContent: "space-between",
    margin: {
      tablet: "2.44rem",
      laptop: "auto",
    },
    borderRadius: { tablet: "0.938rem" },
    padding: {
      mobile: "4.5rem 1.5rem",
      tablet: "4.44rem 3.63rem",
      laptop: "3.44rem 6rem",
    },
    width: { laptop: "95vw", desktop: "unset" },
    maxWidth: {
      laptop: "69rem",
      desktop: "69.4375rem",
    },
  },
  image: {
    position: "absolute",
    zIndex: "-1",
    top: {
      mobile: "0.125rem",
      tablet: "-5rem",
      laptop: "-10.5rem",
    },
    left: {
      mobile: "-6.25rem",
    },
  },
};
