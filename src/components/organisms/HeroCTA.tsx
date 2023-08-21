import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../atoms/DesignoButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { HeroCTASkeleton } from "./skeletons/HeroCTASkeleton";

const heroCTAWrapper = {
  position: "relative",
  overflow: "hidden",
  bgcolor: "peach.main",
  zIndex: 5,
  borderRadius: {
    tablet: "0.938rem",
  },
  justifyContent: {
    laptop: "space-between",
  },
  px: {
    mobile: "1.5rem",
    laptop: "4rem",
  },
  mx: {
    tablet: "2.5rem",
  },
  maxHeight: {
    mobile: "52.688rem",
    laptop: "40rem",
  },
  maxWidth: {
    laptop: "69.4375rem",
  },
  textAlign: {
    mobile: "center",
    laptop: "left",
  },
};

const heroContainer = {
  margin: {
    mobile: "5rem 1.5rem 3rem",
    tablet: "3.75rem 3.62rem 1rem",
    laptop: "9.5rem 3.62rem 1rem",
  },
  maxWidth: {
    laptop: "33.75rem",
  },
};

const heroBox = {
  margin: {
    mobile: "0.875rem 0 1.5rem 0",
    tablet: "2rem auto 1.2rem",
    laptop: "2rem 6rem 2.5rem 0",
  },
  maxWidth: {
    tablet: "27.8125rem",
    laptop: "unset",
  },
};

const heroText = {
  color: "white.main",
};

const heroBgImage = {
  position: "absolute",
  zIndex: "-1",
  top: {
    mobile: "6.625rem",
    laptop: "unset",
  },
  left: {
    laptop: "30rem",
  },
};

const heroImage = {
  margin: {
    mobile: "-7.5rem -10rem 0",
    tablet: "-7.5rem auto 0",
    laptop: "-0.5rem -10rem 0",
  },
};

const heroStyles = {
  wrapper: heroCTAWrapper,
  container: heroContainer,
  box: heroBox,
  text: heroText,
  bgImage: heroBgImage,
  image: heroImage,
};

const HeroCTA = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const loadingTimeout = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(loadingTimeout);
  //   };
  // }, []);

  if (isLoading) return <HeroCTASkeleton />;

  return (
    <Stack
      direction={isBreakpoint1024 ? "row" : "column"}
      sx={{ ...heroStyles.wrapper }}
    >
      <Box sx={{ ...heroStyles.container }}>
        <Box>
          <Typography variant="h1" sx={{ ...heroStyles.text }}>
            Award-winning custom designs and digital branding solutions
          </Typography>
        </Box>
        <Box component="div" sx={{ ...heroStyles.box }}>
          <Typography variant="body1" sx={{ ...heroStyles.text }}>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </Typography>
        </Box>
        <DesignButton islight={true} link="/about" text="learn more" />
      </Box>
      <Box>
        <Box
          sx={{ ...heroStyles.bgImage }}
          component="img"
          src={
            process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
            "assets/home/desktop/bg-pattern-hero-home.svg"
          }
          alt=""
        />
        <Box
          sx={{ ...heroStyles.image }}
          component="img"
          src={
            process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
            "assets/home/desktop/image-hero-phone.png"
          }
          alt="designo phone"
        />
      </Box>
    </Stack>
  );
};

export default HeroCTA;
