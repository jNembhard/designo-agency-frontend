import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { subSkeletonSytles } from "./SubDesignSkeletonStyles";

export const SubDesignSkeleton = () => {
  return (
    <Stack sx={{ ...subSkeletonSytles.container }}>
      <Skeleton
        aria-label="Loading design option..."
        animation="wave"
        variant="rounded"
        sx={{ ...subSkeletonSytles.height }}
      />
    </Stack>
  );
};
