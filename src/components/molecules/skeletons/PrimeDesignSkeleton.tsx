import { Skeleton, Stack } from "@mui/material";

const primeDesignSkeletonContainer = {
  width: {
    mobile: "85vw",
    tablet: "90vw",
    laptop: "35vw",
  },
  height: {
    mobile: "15.313rem",
    tablet: "11.8rem",
    laptop: "100vh",
  },
  maxHeight: {
    laptop: "40.8rem",
    desktop: "46.5rem",
  },
  maxWidth: { laptop: "33.813rem" },
  pt: { laptop: "30px" },
};

const primeDesignSkeletonImage = {
  height: "90%",
};

const primeSkeleton = {
  container: primeDesignSkeletonContainer,
  image: primeDesignSkeletonImage,
};

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
