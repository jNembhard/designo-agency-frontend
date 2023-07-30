import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DesignoButton from "../atoms/DesignoButton";

const HeroCTA = () => {
  return (
    <Box>
      <Box
        sx={{
          padding: { mobile: "80px 0" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { mobile: "2rem", tablet: "3rem" },
            color: "white.main",
          }}
        >
          Award-winning custom digital designs and digital branding solutions
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          margin: {
            mobile: "14px 0 24px 0",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "white.main",
            fontSize: { mobile: "0.938rem", tablet: "1rem" },
          }}
        >
          With over 10 years in the industry, we are experienced in creating
          fully responsive websites, app design, and engaging brand experiences.
          Find out more about our services.
        </Typography>
      </Box>
      <DesignoButton isLight={true} link="/about" />
    </Box>
  );
};

export default HeroCTA;
