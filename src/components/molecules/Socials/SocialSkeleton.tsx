import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { socialSkeleton } from "./SocialSkeletonStyles";

export const SocialsSkeleton = () => {
  return (
    <Stack direction="row" sx={{ ...socialSkeleton.wrapper }} spacing={1}>
      {Array.from({ length: 5 }, (_, index) => (
        <Skeleton
          key={index}
          variant="rectangular"
          sx={{ ...socialSkeleton.icon }}
        />
      ))}
    </Stack>
  );
};
