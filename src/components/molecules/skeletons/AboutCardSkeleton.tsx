import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const aboutCardSkeletonWrapper = {
  display: { laptop: "flex" },
  alignItems: "center",
  justifyContent: "center",
  margin: {
    tablet: "0 2.5rem 7.5rem",
    laptop: "0 auto 7.5rem",
  },
  width: {
    laptop: "95vw",
    desktop: "unset",
  },
  maxWidth: { laptop: "69.438rem" },
  borderRadius: { tablet: "0.938rem" },
  overflow: { tablet: "hidden" },
};

const aboutCardSkeletonImage = {
  minWidth: { laptop: "29.75rem" },
  height: {
    mobile: "20rem",
    laptop: "40rem",
  },
};

const aboutCardSkeletonTextContainer = {
  padding: {
    tablet: "4rem 3.62rem",
    laptop: "0",
  },
  mb: { mobile: "5rem", tablet: "unset" },
  width: { laptop: "50vw" },
  mx: { laptop: "1.875rem", desktop: "3.125rem" },
  alignItems: { mobile: "center", laptop: "unset" },
};

const aboutCardSkeletonTitle = {
  height: "2rem",
  my: { mobile: "1.5rem" },
  width: { mobile: "70%", laptop: "50%" },
};

const aboutCardSkeletonText = {
  mb: "1.25rem",
  width: {
    mobile: "80vw",
    laptop: "90%",
  },
  height: "1.25rem",
};

const aboutCardSkeletonStyles = {
  wrapper: aboutCardSkeletonWrapper,
  image: aboutCardSkeletonImage,
  textContainer: aboutCardSkeletonTextContainer,
  title: aboutCardSkeletonTitle,
  text: aboutCardSkeletonText,
};

type AboutCardSkeletonProp = {
  aboutid: string;
};

export const AboutCardSkeleton = ({ aboutid }: AboutCardSkeletonProp) => {
  return (
    <Box
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
        <Skeleton variant="text" sx={{ ...aboutCardSkeletonStyles.title }} />
        {[...Array(3)].map((_, index) => (
          <Skeleton
            key={index}
            variant="text"
            sx={{ ...aboutCardSkeletonStyles.text }}
          />
        ))}
      </Stack>
    </Box>
  );
};
