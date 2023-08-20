import { Skeleton, Stack } from "@mui/material";

const subDesignSkeletonContainer = {
  width: {
    mobile: "85vw",
    tablet: "90vw",
    laptop: "85vw",
  },
  height: {
    mobile: "15.313rem",
    tablet: "11.8rem",
    laptop: "17.8rem",
    desktop: "20.25rem",
  },
  maxWidth: {
    laptop: "33.813rem",
  },
};

const subDesignSkeletonImage = {
  height: "90%",
};

const subSkeletonSytles = {
  container: subDesignSkeletonContainer,
  height: subDesignSkeletonImage,
};

export const SubDesignSkeleton = () => {
  return (
    <Stack sx={{ ...subSkeletonSytles.container }}>
      <Skeleton
        animation="wave"
        variant="rounded"
        sx={{ ...subSkeletonSytles.height }}
      />
    </Stack>
  );
};
