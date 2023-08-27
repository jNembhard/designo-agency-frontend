import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import { designSkeletonStyles } from "./DesignHeaderSkeletonStyles";

export const DesignsHeaderSkeleton = () => {
  return (
    <Stack sx={{ ...designSkeletonStyles.wrapper }}>
      <Skeleton
        animation="wave"
        sx={{ ...designSkeletonStyles.skeleton }}
        aria-label="Loading design header..."
      />
    </Stack>
  );
};
