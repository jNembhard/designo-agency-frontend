import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { aboutCardSkeletonStyles } from "./AboutCardSkeletonStyles";

type AboutCardSkeletonProp = {
  aboutid: string;
};

export const AboutCardSkeleton = ({ aboutid }: AboutCardSkeletonProp) => {
  return (
    <Box
      aria-label="loading about info..."
      sx={{
        ...aboutCardSkeletonStyles.wrapper,
        flexDirection: {
          laptop: aboutid === "about-2" ? "row" : "row-reverse",
        },
      }}
    >
      <Skeleton
        variant="rounded"
        animation="wave"
        sx={{ ...aboutCardSkeletonStyles.image }}
      />
      <Stack sx={{ ...aboutCardSkeletonStyles.textContainer }}>
        <Skeleton
          variant="text"
          animation="wave"
          sx={{ ...aboutCardSkeletonStyles.title }}
        />
        {[...Array(3)].map((_, index) => (
          <Skeleton
            key={index}
            variant="text"
            animation="wave"
            sx={{ ...aboutCardSkeletonStyles.text }}
          />
        ))}
      </Stack>
    </Box>
  );
};
