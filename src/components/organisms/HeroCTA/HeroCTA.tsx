import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../../atoms/DesignoButton";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useState } from "react";
import { HeroCTASkeleton } from "./HeroCTASkeleton";
import { heroStyles } from "./HeroStyles";

type LoadedImageState = {
  loaded: boolean;
  error: boolean;
};

const HeroCTA = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
  const [loadedImage, setLoadedImage] = useState<LoadedImageState>({
    loaded: false,
    error: false,
  });

  const designoPhoneImg =
    process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
    "assets/home/desktop/image-hero-phone.png";

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoadedImage({ loaded: true, error: false });
    };
    img.onerror = () => {
      setLoadedImage({ loaded: false, error: true });
    };
    img.src = designoPhoneImg;
  });

  if (loadedImage.error) return <p>Error loading image</p>;
  if (!loadedImage.loaded) return <HeroCTASkeleton />;

  return (
    <>
      {loadedImage.loaded && !loadedImage.error && (
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
                With over 10 years in the industry, we are experienced in
                creating fully responsive websites, app design, and engaging
                brand experiences. Find out more about our services.
              </Typography>
            </Box>
            <DesignButton islight="true" link="/about" text="learn more" />
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
              src={designoPhoneImg}
              alt="designo phone"
            />
          </Box>
        </Stack>
      )}
    </>
  );
};

export default HeroCTA;
