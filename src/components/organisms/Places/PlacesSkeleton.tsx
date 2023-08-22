import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { placeSkeletonStyles } from "./PlacesSkeletonStyles";

export const PlacesSkeleton = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");
  return (
    <Box sx={{ ...placeSkeletonStyles.wrapper }}>
      <Stack direction={isBreakpoint1024 ? "row" : "column"}>
        {Array.from({ length: 3 }, (_, index) => (
          <Stack key={index} sx={{ ...placeSkeletonStyles.container }}>
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
                sx={{ ...placeSkeletonStyles.text }}
              />
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{ ...placeSkeletonStyles.button }}
              />
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};
