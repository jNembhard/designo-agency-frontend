import Box from "@mui/material/Box";
import ContactDescription from "../organisms/ContactDescription";
import Form from "../organisms/Form";

const ContactTemplate = () => {
  return (
    <Box
      bgcolor="peach.main"
      position="relative"
      overflow="hidden"
      zIndex="1"
      sx={{ padding: { mobile: "4.5rem 1.5rem" } }}
    >
      <Box
        position="absolute"
        component="picture"
        zIndex="-1"
        sx={{
          top: {
            mobile: "0.125rem",
          },
          left: {
            mobile: "-6.25rem",
          },
        }}
      >
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
