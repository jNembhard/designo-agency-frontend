import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const footerContactWrapper = {
  margin: {
    mobile: "1.25rem 0",
  },
};

const footerContactHeading = {
  color: "white.main",
  fontWeight: "700",
  textTransform: "capitalize",
  opacity: 0.4,
};

const footerContactTitleOne = {
  color: "white.main",
  opacity: 0.4,
};

const footerContactTitleTwo = {
  fontSize: "1rem",
  lineHeight: "1.625rem",
  color: "white.main",
  opacity: 0.4,
};

const footerContactStyles = {
  wrapper: footerContactWrapper,
  heading: footerContactHeading,
  titleOne: footerContactTitleOne,
  titleTwo: footerContactTitleTwo,
};

type FooterContactProp = {
  heading: string;
  titleOne: string;
  titleTwo: string;
};

const FooterContact = ({ heading, titleOne, titleTwo }: FooterContactProp) => {
  return (
    <Box sx={{ ...footerContactStyles.wrapper }}>
      <Typography variant="body1" sx={{ ...footerContactStyles.heading }}>
        {heading}
      </Typography>
      <Typography variant="body1" sx={{ ...footerContactStyles.titleOne }}>
        {titleOne}
      </Typography>
      <Typography variant="body1" sx={{ ...footerContactStyles.titleTwo }}>
        {titleTwo}
      </Typography>
    </Box>
  );
};

export default FooterContact;
