import Box from "@mui/material/Box";
import Form from "../../organisms/Form/Form";
import ContactDescription from "../../organisms/ContactDescription/ContactDescription";
import { useState } from "react";
import { ContactTemplateSkeleton } from "./ContactTemplateSkeleton";
import { contactTemplateStyles } from "./ContactTemplateStyles";

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
