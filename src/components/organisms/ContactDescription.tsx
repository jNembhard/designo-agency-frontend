import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const contactDescriptionWrapper = {
  textAlign: { mobile: "center", tablet: "left" },
  width: { tablet: "60ch", laptop: "45ch", desktop: "50ch" },
  mb: "3rem",
};

const contactDescriptionTitle = {
  color: "white.main",
};

const contactDescriptionText = {
  color: "white.main",
  mt: { mobile: "1.5rem" },
};

const contactDescriptionStyles = {
  wrapper: contactDescriptionWrapper,
  title: contactDescriptionTitle,
  text: contactDescriptionText,
};

const ContactDescription = () => {
  return (
    <Box sx={{ ...contactDescriptionStyles.wrapper }}>
      <Typography variant="h1" sx={{ ...contactDescriptionStyles.title }}>
        Contact Us
      </Typography>
      <Typography sx={{ ...contactDescriptionStyles.text }}>
        Ready to take it to the next level? Let's talk about your project or
        idea and find out how we can help your business grow. If you are looking
        for unique digital experiences that's relatable to your users, drop us a
        line.
      </Typography>
    </Box>
  );
};

export default ContactDescription;
