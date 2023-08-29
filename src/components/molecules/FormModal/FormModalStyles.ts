export const modalStyles = {
  modalWrapper: {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      mobile: "95vw",
      tablet: 400,
    },
    maxWidth: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "0.5rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2.375rem",
    lineHeight: "2.625rem",
  },
  description: {
    mt: 2,
  },
  buttonWrapper: {
    alignItems: "center",
    textAlign: "center",
    mt: 2,
  },
};
