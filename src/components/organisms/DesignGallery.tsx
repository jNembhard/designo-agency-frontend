import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import PrimeDesign from "../molecules/home_components/PrimeDesign";
import SubDesign from "../molecules/home_components/SubDesign";

const designGalleryWrapper = {
  margin: {
    mobile: "7.5rem 1.5rem",
    laptop: "7rem 4rem",
    desktop: "10rem 0",
  },
  alignItems: "center",
  justifyContent: "center",
};

const DesignGallery = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");

  return (
    <Stack
      direction={isBreakpoint1024 ? "row" : "column"}
      sx={{ ...designGalleryWrapper }}
      spacing={isBreakpoint1024 ? 3 : 0}
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
