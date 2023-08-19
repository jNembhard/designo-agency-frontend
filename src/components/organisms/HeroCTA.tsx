import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../atoms/DesignoButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { Skeleton } from "@mui/material";

const HeroCTASkeleton = () => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      sx={{
        // bgcolor: "peach.main",
        height: { mobile: "52.6875rem", laptop: "40rem" },
        mx: { tablet: "2.5rem", laptop: "auto" },
        width: { laptop: "90vw" },
        maxWidth: { laptop: "69.4375rem" },
      }}
    />
  );
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

  // if (isLoading) return <HeroCTASkeleton />;

  return (
    <Stack
      overflow="hidden"
      position="relative"
      direction={isBreakpoint1024 ? "row" : "column"}
      sx={{
        justifyContent: { laptop: "space-between" },
        maxHeight: { mobile: "52.688rem", laptop: "40rem" },
        maxWidth: { laptop: "69.4375rem" },
        textAlign: { mobile: "center", laptop: "left" },
        zIndex: 5,
        bgcolor: "peach.main",
        px: { mobile: "1.5rem", laptop: "4rem" },
        mx: { tablet: "2.5rem" },
        borderRadius: { tablet: "0.938rem" },
      }}
    >
      <Box
        sx={{
          margin: {
            mobile: "5rem 1.5rem 3rem",
            tablet: "3.75rem 3.62rem 1rem",
            laptop: "9.5rem 3.62rem 1rem",
          },
          maxWidth: {
            laptop: "33.75rem",
          },
        }}
      >
        <Box>
          <Typography variant="h1" color="white.main">
            Award-winning custom designs and digital branding solutions
          </Typography>
        </Box>
        <Box
          component="div"
          sx={{
            margin: {
              mobile: "0.875rem 0 1.5rem 0",
              tablet: "2rem auto 1.2rem",
              laptop: "2rem 6rem 2.5rem 0",
            },
            maxWidth: { tablet: "27.8125rem", laptop: "unset" },
          }}
        >
          <Typography variant="body1" color="white.main">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </Typography>
        </Box>
        <DesignButton islight={true} link="/about" text="learn more" />
      </Box>
      <Box>
        <Box
          position="absolute"
          zIndex="-1"
          sx={{
            top: { mobile: "6.625rem", laptop: "unset" },
            left: { laptop: "30rem" },
          }}
          component="img"
          src={
            process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
            "assets/home/desktop/bg-pattern-hero-home.svg"
          }
          alt=""
        />
        <Box
          sx={{
            margin: {
              mobile: "-7.5rem -10rem 0",
              tablet: "-7.5rem auto 0",
              laptop: "-0.5rem -10rem 0",
            },
          }}
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
