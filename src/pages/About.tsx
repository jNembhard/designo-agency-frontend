import Box from "@mui/material/Box";
import Places from "../components/organisms/Places";
import AboutCard from "../components/molecules/AboutCard";
import { SEO } from "../components/atoms/SEO";

const About = () => {
  return (
    <Box
      sx={{
        mb: {
          mobile: "7.5rem",
        },
      }}
    >
      <SEO
        author="Jason Nembhard"
        title="Our Company"
        description="learn about us"
        type="webapp"
      />
      <AboutCard aboutID={"about-1"} isdark={true} />
      <AboutCard aboutID={"about-2"} isdark={false} />
      <Places />
      <AboutCard aboutID={"about-3"} isdark={false} />
    </Box>
  );
};

export default About;
