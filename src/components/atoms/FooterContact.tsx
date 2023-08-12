import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const FooterContact = ({
  heading,
  titleOne,
  titleTwo,
}: {
  heading: string;
  titleOne: string;
  titleTwo: string;
}) => {
  return (
    <Box
      sx={{
        margin: {
          mobile: "1.25rem 0",
        },
      }}
    >
      <Typography
        variant="body1"
        color="white.main"
        fontWeight="700"
        textTransform="capitalize"
        sx={{ opacity: 0.4 }}
      >
        {heading}
      </Typography>
      <Typography variant="body1" color="white.main" sx={{ opacity: 0.4 }}>
        {titleOne}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "white.main", opacity: 0.4 }}
        fontSize="1rem"
        lineHeight="1.625rem"
      >
        {titleTwo}
      </Typography>
    </Box>
  );
};

export default FooterContact;
