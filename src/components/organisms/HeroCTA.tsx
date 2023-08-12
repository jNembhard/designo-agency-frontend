import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../atoms/DesignoButton";

const HeroCTA = () => {
  return (
    <Box
      overflow="hidden"
      position="relative"
      sx={{
        maxHeight: "52.688rem",
        textAlign: "center",
        zIndex: 5,
        bgcolor: "peach.main",
        px: { mobile: "1.5rem" },
      }}
    >
      <Box
        sx={{
          paddingTop: { mobile: "5rem" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { mobile: "2rem", tablet: "3rem" },
            color: "white.main",
          }}
        >
          Award-winning custom designs and digital branding solutions
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{
          margin: {
            mobile: "0.875rem 0 1.5rem 0",
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
      <DesignButton isLight={true} link="/about" text="learn more" />
      <Box>
        <Box
          position="absolute"
          zIndex="-1"
          top="6.625rem"
          component="img"
          src={
            process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
            "assets/home/desktop/bg-pattern-hero-home.svg"
          }
          alt=""
        />
        <Box
          margin="-7.5rem -10rem 0"
          component="img"
          src={
            process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
            "assets/home/desktop/image-hero-phone.png"
          }
          alt="designo phone"
        />
      </Box>
    </Box>
  );
};

export default HeroCTA;
