import Box from "@mui/material/Box";
import FooterCTA from "../../molecules/footer_components/FooterCTA";
import FooterBottom from "../../molecules/footer_components/FooterBottom";
import { footerStyles } from "./FooterStyles";

const Footer = () => {
  return (
    <Box component="footer" sx={{ ...footerStyles.wrapper }}>
      <FooterCTA />
      <FooterBottom />
    </Box>
  );
};

export default Footer;
