import Box from "@mui/material/Box";
import Form from "../../organisms/Form/Form";
import ContactDescription from "../../organisms/ContactDescription/ContactDescription";
import { useEffect, useState } from "react";
import { ContactTemplateSkeleton } from "./ContactTemplateSkeleton";
import { contactTemplateStyles } from "./ContactTemplateStyles";

type LoadedImageState = {
  loaded: boolean;
  error: boolean;
};

const ContactTemplate = () => {
  const [loadedImage, setLoadedImage] = useState<LoadedImageState>({
    loaded: false,
    error: false,
  });

  const bgContactMobile =
    process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
    "assets/contact/mobile/bg-pattern-hero-contact-mobile.svg";
  const bgContactDesktop =
    process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
    "assets/contact/desktop/bg-pattern-hero-desktop.svg";

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoadedImage({ loaded: true, error: false });
    };
    img.onerror = () => {
      setLoadedImage({ loaded: false, error: true });
    };
    img.src = bgContactMobile;
  });

  if (loadedImage.error) return <p>Error loading image</p>;
  if (!loadedImage.loaded) return <ContactTemplateSkeleton />;

  return (
    <>
      {loadedImage.loaded && !loadedImage.error && (
        <Box sx={{ ...contactTemplateStyles.wrapper }}>
          <Box component="picture" sx={{ ...contactTemplateStyles.image }}>
            <source media="(min-width: 767px)" srcSet={bgContactDesktop} />
            <img src={bgContactMobile} alt="" loading="eager" />
          </Box>
          <ContactDescription />
          <Form />
        </Box>
      )}
    </>
  );
};

export default ContactTemplate;
