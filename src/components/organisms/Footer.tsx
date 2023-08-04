import Box from "@mui/material/Box";
import FooterCTA from "../molecules/FooterCTA";
import FooterBottom from "../molecules/FooterBottom";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box position="relative" alignItems="center" justifyContent="center">
      <FooterCTA />
      <FooterBottom />
    </Box>
  );
};

export default Footer;
