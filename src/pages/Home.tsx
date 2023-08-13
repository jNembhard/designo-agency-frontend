import Box from "@mui/material/Box";
import HeroCTA from "../components/organisms/HeroCTA";
import DesignGallery from "../components/organisms/DesignGallery";
import Keypoints from "../components/organisms/Keypoints";
import { SEO } from "../components/atoms/SEO";

const Home = () => {
  return (
    <Box>
      <SEO
        author="Jason Nembhard"
        title="Home"
        description="This is the home page"
        type="webapp"
      />
      <HeroCTA />
      <DesignGallery />
      <Keypoints />
    </Box>
  );
};

export default Home;
