import Skeleton from "@mui/material/Skeleton";
import { heroSkeletonStyles } from "./HeroCTASkeletonStyles";

export const HeroCTASkeleton = () => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      aria-label="loading homepage hero and images..."
      sx={{ ...heroSkeletonStyles.container }}
    />
  );
};
