import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { socialSkeleton } from "./SocialSkeletonStyles";

export const SocialsSkeleton = () => {
  return (
    <Stack
      direction="row"
      aria-label="loading social links"
      sx={{ ...socialSkeleton.wrapper }}
      spacing={1}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <Skeleton
          key={index}
          aria-label="loading social link..."
          animation="wave"
          variant="rounded"
          sx={{ ...socialSkeleton.icon }}
        />
      ))}
    </Stack>
  );
};
