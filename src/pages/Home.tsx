import Box from "@mui/material/Box";
import HeroCTA from "../components/organisms/HeroCTA";
import DesignGallery from "../components/organisms/DesignGallery";
import Keypoints from "../components/molecules/Keypoints";

const Home = () => {
  return (
    <Box>
      <HeroCTA />
      <DesignGallery />
      <Keypoints />
    </Box>
  );
};

export default Home;
