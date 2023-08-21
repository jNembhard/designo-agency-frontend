import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { ICallout } from "../../../interface/Callout";
import Typography from "@mui/material/Typography";
import { keypointStyles } from "./KeypointStyles";

const Keypoint = ({ calloutID, image, title, description }: ICallout) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");

  return (
    <Stack
      direction={
        isBreakpoint1024 ? "column" : isBreakpoint767 ? "row" : "column"
      }
      sx={{ ...keypointStyles.wrapper }}
    >
      <Box sx={{ ...keypointStyles.container }}>
        <Box
          sx={{
            ...keypointStyles.imageWrapper,
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
      <Box sx={{ ...keypointStyles.textContainer }}>
        <Typography variant="h3" sx={{ ...keypointStyles.title }}>
          {title}
        </Typography>
        <Typography variant="body1">{description}</Typography>
      </Box>
    </Stack>
  );
};

export default Keypoint;
