import Box from "@mui/material/Box";
import HeroCTA from "../components/organisms/HeroCTA";
import DesignGallery from "../components/organisms/DesignGallery";
import Keypoints from "../components/organisms/Keypoints";
import { SEO } from "../components/atoms/SEO";

const Home = () => {
  return (
    <>
      <SEO
        author="Jason Nembhard"
        title="Home"
        description="Experience award-winning custom designs and digital branding solutions. Transform your brand with responsive websites, app design, and engaging experiences. Learn more."
        type="webapp"
      />
      <Box
        sx={{
          display: { laptop: "flex" },
          flexDirection: { laptop: "column" },
          alignItems: { laptop: "center" },
        }}
      >
        <HeroCTA />
        <DesignGallery />
        <Keypoints />
      </Box>
    </>
  );
};

export default Home;
