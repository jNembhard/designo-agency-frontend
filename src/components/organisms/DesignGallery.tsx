import SubDesign from "../molecules/home_components/SubDesign";
import PrimeDesign from "../molecules/home_components/PrimeDesign";
import Stack from "@mui/material/Stack";

const DesignGallery = () => {
  return (
    <Stack
      sx={{
        margin: { mobile: "7.5rem 1.5rem" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <PrimeDesign designID="design-1" />
      <SubDesign designID="design-2" />
      <SubDesign designID="design-3" />
    </Stack>
  );
};

export default DesignGallery;
