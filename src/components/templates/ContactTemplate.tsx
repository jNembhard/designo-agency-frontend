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
      sx={{
        display: "flex",
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
          laptop: "3.44rem 4rem",
          desktop: "3.44rem 6rem",
        },
        maxWidth: {
          laptop: "69.4375rem",
        },
      }}
    >
      <Box
        position="absolute"
        component="picture"
        zIndex="-1"
        sx={{
          top: {
            mobile: "0.125rem",
            tablet: "-5rem",
            laptop: "-10.5rem",
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
