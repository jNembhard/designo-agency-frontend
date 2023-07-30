import Box from "@mui/material/Box";
import SubDesign from "../molecules/home_components/SubDesign";
import WebDesign from "../molecules/home_components/WebDesign";
import Stack from "@mui/material/Stack";

type Props = {};

const DesignGallery = (props: Props) => {
  return (
    <Stack sx={{ margin: { mobile: "120px 0" } }}>
      <WebDesign designID="design-1" />
      <SubDesign designID="design-2" />
      <SubDesign designID="design-3" />
    </Stack>
  );
};

export default DesignGallery;
