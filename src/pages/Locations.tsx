import Box from "@mui/material/Box";
import Maps from "../components/molecules/Maps/Maps";
import SEO from "../components/atoms/SEO";

const locationsWrapper = {
  mb: {
    mobile: "6.25rem",
  },
};

const Locations = () => {
  return (
    <>
      <SEO
        author="Jason Nembhard"
        title="Locations"
        description="Award-winning designs & branding from Designo: global offices in Canada, Australia & UK. Experts in websites, apps & brand experiences."
        type="webapp"
      />
      <Box sx={{ ...locationsWrapper }}>
        <Maps />
      </Box>
    </>
  );
};

export default Locations;
