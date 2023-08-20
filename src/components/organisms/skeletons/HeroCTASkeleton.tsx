import Skeleton from "@mui/material/Skeleton";

const heroSkeletonContainer = {
  height: {
    mobile: "52.6875rem",
    laptop: "40rem",
  },
  mx: {
    tablet: "2.5rem",
    laptop: "auto",
  },
  width: {
    laptop: "90vw",
  },
  maxWidth: {
    laptop: "69.4375rem",
  },
};

export const HeroCTASkeleton = () => {
  return (
    <Skeleton
      variant="rounded"
      animation="wave"
      sx={{ ...heroSkeletonContainer }}
    />
  );
};
