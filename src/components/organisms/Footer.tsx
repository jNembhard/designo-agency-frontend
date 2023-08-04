import Box from "@mui/material/Box";
import FooterCTA from "../molecules/FooterCTA";
import FooterBottom from "../molecules/FooterBottom";

const Footer = () => {
  return (
    <Box position="relative" alignItems="center" justifyContent="center">
      <FooterCTA />
      <FooterBottom />
    </Box>
  );
};

export default Footer;
