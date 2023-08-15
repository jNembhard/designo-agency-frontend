import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import PrimeDesign from "../molecules/home_components/PrimeDesign";
import SubDesign from "../molecules/home_components/SubDesign";

const DesignGallery = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");

  return (
    <Stack
      direction={isBreakpoint1024 ? "row" : "column"}
      sx={{
        margin: { mobile: "7.5rem 1.5rem", laptop: "10rem 0" },
        alignItems: "center",
        justifyContent: "center",
      }}
      spacing={isBreakpoint1024 ? 3 : 0}
    >
      <PrimeDesign designID="design-1" />
      <Stack
        spacing={isBreakpoint1024 ? 3 : 0}
        sx={{ laptop: { width: "40rem" } }}
      >
        <SubDesign designID="design-2" />
        <SubDesign designID="design-3" />
      </Stack>
    </Stack>
  );
};

export default DesignGallery;
