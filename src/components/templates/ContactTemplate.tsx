import Box from "@mui/material/Box";
import ContactDescription from "../organisms/ContactDescription";
import Form from "../organisms/Form";
import { useState } from "react";
import { ContactTemplateSkeleton } from "./skeletons/ContactTemplateSkeleton";

const contactTemplateWrapper = {
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
};

const contactTemplateImageContainer = {
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
};

const contactTemplateStyles = {
  wrapper: contactTemplateWrapper,
  image: contactTemplateImageContainer,
};

const ContactTemplate = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) return <ContactTemplateSkeleton />;
  return (
    <Box sx={{ ...contactTemplateStyles.wrapper }}>
      <Box component="picture" sx={{ ...contactTemplateStyles.image }}>
        <source
          media="(min-width: 767px)"
          srcSet={
            process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
            "assets/contact/desktop/bg-pattern-hero-desktop.svg"
          }
        />
        <img
          src={
            process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
            "assets/contact/mobile/bg-pattern-hero-contact-mobile.svg"
          }
          alt=""
        />
      </Box>
      <ContactDescription />
      <Form />
    </Box>
  );
};

export default ContactTemplate;
