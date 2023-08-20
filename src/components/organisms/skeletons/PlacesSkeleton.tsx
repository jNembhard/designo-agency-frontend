import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";

const placesSkeletonWrapper = {
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

const placeSkeletonContainer = {
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
  mx: { laptop: "3.125rem" },
};

const placeSkeletonImage = {
  width: "202px",
  height: "202px",
  margin: {
    mobile: "0 auto 3rem",
    tablet: "0 1.875rem 3rem",
    laptop: "0 auto 3rem",
  },
};

const placeSkeletonTextContainer = {
  alignItems: "center",
  justifyContent: {
    mobile: "center",
    tablet: "left",
  },
  width: {
    mobile: "85vw",
    tablet: "55vw",
    laptop: "20vw",
  },
  mb: { laptop: "5rem" },
};

const placeSkeletonHeading = {
  width: {
    mobile: "50vw",
    tablet: "20vw",
    laptop: "12vw",
  },
  maxWidth: "6.25rem",
  my: "2rem",
};

const placeSkeletonText = {
  width: "9.5rem",
  height: "3.5rem",
  mb: { tablet: "5rem" },
};

const placeSkeletonStyles = {
  wrapper: placesSkeletonWrapper,
  container: placeSkeletonContainer,
  image: placeSkeletonImage,
  textContainer: placeSkeletonTextContainer,
  heading: placeSkeletonHeading,
  text: placeSkeletonText,
};

export const PlacesSkeleton = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");
  return (
    <Box sx={{ ...placeSkeletonStyles.wrapper }}>
      <Stack direction={isBreakpoint1024 ? "row" : "column"}>
        {Array.from({ length: 3 }, (_, index) => (
          <Stack sx={{ ...placeSkeletonStyles.container }}>
            <Skeleton
              key={index}
              animation="wave"
              variant="circular"
              sx={{ ...placeSkeletonStyles.image }}
            />
            <Stack sx={{ ...placeSkeletonStyles.textContainer }}>
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ ...placeSkeletonStyles.heading }}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ ...placeSkeletonStyles.text }}
              />
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
