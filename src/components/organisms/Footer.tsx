import Box from "@mui/material/Box";
import FooterCTA from "../molecules/footer_components/FooterCTA";
import FooterBottom from "../molecules/footer_components/FooterBottom";

const Footer = () => {
  return (
    <Box component="footer" position="relative" margin="auto">
      <FooterCTA />
      <FooterBottom />
    </Box>
  );
};

export default Footer;
