import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const ContactDescription = () => {
  return (
    <Box
      sx={{
        textAlign: { mobile: "center", tablet: "left" },
        width: { tablet: "60ch", laptop: "45ch", desktop: "50ch" },
        mb: "3rem",
      }}
    >
      <Typography variant="h1" color="white.main">
        Contact Us
      </Typography>
      <Typography
        color="white.main"
        sx={{
          mt: {
            mobile: "1.5rem",
          },
        }}
      >
        Ready to take it to the next level? Let's talk about your project or
        idea and find out how we can help your business grow. If you are looking
        for unique digital experiences that's relatable to your users, drop us a
        line.
      </Typography>
    </Box>
  );
};

export default ContactDescription;
