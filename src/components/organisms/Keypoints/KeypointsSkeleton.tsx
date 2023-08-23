import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import { keySkeleton } from "./KeypointsSkeletonStyles";

export const KeypointsSkeleton = () => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");
  return (
    <Box sx={{ ...keySkeleton.wrapper }} aria-label="loading a keypoint...">
      <Stack direction={isBreakpoint1024 ? "row" : "column"}>
        {Array.from({ length: 3 }, (_, index) => (
          <Stack
            key={index}
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
