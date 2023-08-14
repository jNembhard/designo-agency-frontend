import Box from "@mui/material/Box";
import Maps from "../components/molecules/Maps";
import { SEO } from "../components/atoms/SEO";

const Locations = () => {
  return (
    <Box sx={{ mb: { mobile: "6.25rem" } }}>
      <SEO
        author="Jason Nembhard"
        title="Locations"
        description="Award-winning designs & branding from Designo: global offices in Canada, Australia & UK. Experts in websites, apps & brand experiences."
        type="webapp"
      />
      <Maps />
    </Box>
  );
};

export default Locations;
