import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { primeSkeleton } from "./PrimeDesignSkeletonStyles";

export const PrimeDesignSkeleton = () => {
  return (
    <Stack sx={{ ...primeSkeleton.container }}>
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{ ...primeSkeleton.image }}
      />
    </Stack>
  );
};
