import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import PrimeDesign from "../../molecules/home_components/PrimeDesign/PrimeDesign";
import SubDesign from "../../molecules/home_components/SubDesign/SubDesign";
import { designGalleryStyles } from "./DesignGalleryStyles";

const DesignGallery = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");

  return (
    <Stack
      direction={isBreakpoint1024 ? "row" : "column"}
      spacing={isBreakpoint1024 ? 3 : 0}
      sx={{ ...designGalleryStyles.wrapper }}
    >
      <PrimeDesign designID="design-1" />
      <Stack spacing={isBreakpoint1024 ? 3 : 0}>
        <SubDesign designID="design-2" />
        <SubDesign designID="design-3" />
      </Stack>
    </Stack>
  );
};

export default DesignGallery;
