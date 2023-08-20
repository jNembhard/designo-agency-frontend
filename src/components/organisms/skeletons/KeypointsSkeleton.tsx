import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

const keypointsSkeletonWrapper = {
  display: { laptop: "flex" },
  alignItems: { laptop: "center" },
  justifyContent: { laptop: "center" },
  mx: {
    mobile: "1.5rem",
    tablet: "2.438rem",
    laptop: "unset",
  },
  mb: {
    tablet: "4.188rem",
    laptop: "10rem",
  },
};

const keypointsSkeletonContainer = {
  mb: {
    mobile: "5rem",
    tablet: "1.5rem",
  },
  alignItems: {
    tablet: "center",
    justifyContent: "center",
  },
  maxWidth: {
    laptop: "18rem",
    desktop: "21.875rem",
  },
  mx: {
    laptop: "0.625rem",
  },
};

const keypointsSkeletonImage = {
  margin: {
    mobile: "0 auto 3rem",
    tablet: "0 1.875rem 3rem",
    laptop: "0 auto 3rem",
  },
  width: "12.625rem",
  height: "12.625rem",
};

const keypointsSkeletonTextContainer = {
  alignItems: {
    mobile: "center",
    tablet: "unset",
    laptop: "center",
  },
  justifyContent: { mobile: "center", tablet: "left" },
};

const keypointsSkeletonHeading = {
  width: {
    mobile: "50vw",
    tablet: "20vw",
    laptop: "12vw",
  },
  my: "2rem",
};

const keypointsSkeletonText = {
  width: {
    mobile: "85vw",
    tablet: "55vw",
    laptop: "20vw",
  },
};

const keySkeleton = {
  wrapper: keypointsSkeletonWrapper,
  container: keypointsSkeletonContainer,
  image: keypointsSkeletonImage,
  textContainer: keypointsSkeletonTextContainer,
  heading: keypointsSkeletonHeading,
  text: keypointsSkeletonText,
};

export const KeypointsSkeleton = () => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");
  return (
    <Box sx={{ ...keySkeleton.wrapper }}>
      <Stack direction={isBreakpoint1024 ? "row" : "column"}>
        {Array.from({ length: 3 }, (_, index) => (
          <Stack
            direction={
              isBreakpoint1024 ? "column" : isBreakpoint767 ? "row" : "column"
            }
            sx={{ ...keySkeleton.container }}
          >
            <Skeleton
              animation="wave"
              key={index}
              variant="circular"
              sx={{ ...keySkeleton.image }}
            />
            <Stack sx={{ ...keySkeleton.textContainer }}>
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ ...keySkeleton.heading }}
              />
              <Stack spacing={1} sx={{ ...keySkeleton.text }}>
                {Array.from({ length: 3 }, (_, index) => (
                  <Skeleton key={index} animation="wave" variant="rounded" />
                ))}
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
