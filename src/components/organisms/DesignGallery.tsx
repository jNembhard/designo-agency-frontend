import SubDesign from "../molecules/home_components/SubDesign";
import WebDesign from "../molecules/home_components/WebDesign";
import Stack from "@mui/material/Stack";

const DesignGallery = () => {
  return (
    <Stack
      sx={{
        margin: { mobile: "7.5rem 0" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <WebDesign designID="design-1" />
      <SubDesign designID="design-2" />
      <SubDesign designID="design-3" />
    </Stack>
  );
};

export default DesignGallery;
