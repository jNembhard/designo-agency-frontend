import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { ICallout } from "../../interface/Callout";
import Typography from "@mui/material/Typography";

const Keypoint: React.FC<ICallout> = ({
  calloutID,
  image,
  title,
  description,
}) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");
  return (
    <Stack
      direction={
        isBreakpoint1024
          ? isBreakpoint1024
            ? "column"
            : "row"
          : isBreakpoint767
          ? "row"
          : "column"
      }
      sx={{
        mb: { mobile: "5rem", tablet: "1.5rem" },
        alignItems: { tablet: "center", justifyContent: "center" },
        maxWidth: { laptop: "6.25rem", desktop: "21.875rem" },
        mx: { laptop: "0.625rem" },
      }}
    >
      <Box
        borderRadius="100%"
        position="relative"
        maxWidth="12.625rem"
        maxHeight="12.625rem"
        sx={{
          margin: {
            mobile: "0 auto 3rem",
            tablet: "0",
            laptop: "0 auto 3rem",
          },
        }}
      >
        <Box
          position="absolute"
          zIndex="-1"
          sx={{
            transform:
              calloutID === "callout-1"
                ? ""
                : calloutID === "callout-2"
                ? "rotate(270deg)"
                : "rotate(90deg)",
          }}
        >
          <img
            src={
              process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
              "assets/shared/desktop/bg-pattern-small-circle.svg"
            }
            alt=""
          />
        </Box>
        <Box>
          <img
            src={`${process.env.REACT_APP_CLOUDFRONT_ENDPOINT}` + image}
            alt={title}
          />
        </Box>
      </Box>
      <Box
        sx={{
          textAlign: {
            mobile: "center",
            tablet: "left",
            laptop: "center",
          },
          ml: {
            tablet: "2.5rem",
            laptop: "unset",
          },
        }}
      >
        <Typography
          variant="h3"
          textTransform="uppercase"
          sx={{
            lineHeight: { mobile: "1.625rem" },
            marginBottom: { mobile: "2rem", tablet: "1rem" },
          }}
        >
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Stack>
  );
};

export default Keypoint;
