import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { footerContactStyles } from "./FooterContactStyles";

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
