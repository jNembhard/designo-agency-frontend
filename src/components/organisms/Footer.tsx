import Box from "@mui/material/Box";
import FooterCTA from "../molecules/footer_components/FooterCTA";
import FooterBottom from "../molecules/footer_components/FooterBottom";

const Footer = () => {
  return (
    <Box position="relative" alignItems="center" justifyContent="center">
      <FooterCTA />
      <FooterBottom />
    </Box>
  );
};

export default Footer;
