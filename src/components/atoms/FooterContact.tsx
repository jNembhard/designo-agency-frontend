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
          mobile: "40px 0",
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{ color: "white.main", opacity: 0.4 }}
        textTransform="capitalize"
        fontWeight="700"
        fontSize="1rem"
        lineHeight="26px"
      >
        {heading}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "white.main", opacity: 0.4 }}
        fontSize="1rem"
        lineHeight="26px"
      >
        {titleOne}
      </Typography>
      <Typography
        variant="body1"
        sx={{ color: "white.main", opacity: 0.4 }}
        fontSize="1rem"
        lineHeight="26px"
      >
        {titleTwo}
      </Typography>
    </Box>
  );
};

export default FooterContact;
