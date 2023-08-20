import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const SocialSkeletonWrapper = {
  mt: {
    mobile: "1.25rem",
    tablet: "unset",
  },
};

const SocialSkeletonIcon = {
  mx: 1,
  width: "1.5rem",
  height: "1.5rem",
  color: "white.dark",
};

const socialSkeleton = {
  wrapper: SocialSkeletonWrapper,
  icon: SocialSkeletonIcon,
};

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
