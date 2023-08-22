import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { mapsSkeletonStyles } from "./MapsSkeletonStyles";

export const MapsSkeleton = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");

  return (
    <Box sx={{ ...mapsSkeletonStyles.wrapper }}>
      {Array.from({ length: 3 }, (_, index) => (
        <Stack
          key={index}
          direction={
            isBreakpoint1024 && index === 1
              ? "row-reverse"
              : isBreakpoint1024
              ? "row"
              : isBreakpoint767
              ? "column"
              : undefined
          }
          sx={{ ...mapsSkeletonStyles.container }}
        >
          <Skeleton
            animation="wave"
            sx={{ ...mapsSkeletonStyles.imageSkeleton }}
          />
          <Box sx={{ ...mapsSkeletonStyles.textWrapper }}>
            <Stack sx={{ ...mapsSkeletonStyles.textContainerOuter }}>
              <Skeleton
                variant="text"
                animation="wave"
                sx={{ ...mapsSkeletonStyles.title }}
              />
              <Stack
                spacing={1}
                sx={{ ...mapsSkeletonStyles.textContainerTop }}
              >
                {Array.from({ length: 3 }, (_, index) => (
                  <Skeleton
                    key={index}
                    variant="text"
                    animation="wave"
                    sx={{ ...mapsSkeletonStyles.text }}
                  />
                ))}
              </Stack>
            </Stack>
            <Stack spacing={1}>
              {Array.from({ length: 3 }, (_, index) => (
                <Skeleton
                  key={index}
                  variant="text"
                  animation="wave"
                  sx={{ ...mapsSkeletonStyles.text }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>
      ))}
    </Box>
  );
};
