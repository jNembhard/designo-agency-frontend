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

        margin: { laptop: "auto" },
      }}
    >
      <SEO
        author="Jason Nembhard"
        title="Our Company"
        description="Discover our creative agency crafting impactful designs since 2010. A team of strategists, problem-solvers, and storytellers driving real results."
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
