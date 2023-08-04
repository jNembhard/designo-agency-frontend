import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DesignoButton from "../atoms/DesignoButton";

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
        marginLeft: { mobile: "-0.5rem", tablet: "unset" },
        width: { mobile: "100vw", tablet: "100%" },
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
      <DesignoButton isLight={true} link="/about" text="learn more" />
      <Box>
        <Box
          position="absolute"
          sx={{ zIndex: "-1" }}
          top="6.625rem"
          component="img"
          src="https://designo-image-bucket.s3.amazonaws.com/assets/home/desktop/bg-pattern-hero-home.svg"
          alt=""
        />
        <Box
          margin="-7.5rem -7.75rem 0"
          component="img"
          src="https://designo-image-bucket.s3.amazonaws.com/assets/home/desktop/image-hero-phone.png"
          alt="designo phone"
        />
      </Box>
    </Box>
  );
};

export default HeroCTA;
