import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { contactTemplateSkeletonStyles } from "./ContactTemplateSkeletonStyles";

export const ContactTemplateSkeleton = () => {
  return (
    <Stack
      sx={{ ...contactTemplateSkeletonStyles.wrapper }}
      aria-label="loading contact form..."
    >
      <Box sx={{ ...contactTemplateSkeletonStyles.container }}>
        <Box>
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{ ...contactTemplateSkeletonStyles.title }}
          />
          <Stack
            spacing={3}
            sx={{ ...contactTemplateSkeletonStyles.textContainer }}
          >
            {Array.from({ length: 4 }, (_, index) => (
              <Skeleton
                key={index}
                variant="rounded"
                animation="wave"
                sx={{ ...contactTemplateSkeletonStyles.text }}
              />
            ))}
          </Stack>
        </Box>
        <Stack
          sx={{ ...contactTemplateSkeletonStyles.formContainer }}
          spacing={2}
        >
          {Array.from({ length: 4 }, (_, index) => (
            <Skeleton
              key={index}
              variant="rounded"
              animation="wave"
              sx={{ ...contactTemplateSkeletonStyles.form }}
            />
          ))}
          <Skeleton
            variant="rounded"
            animation="wave"
            sx={{ ...contactTemplateSkeletonStyles.formButton }}
          />
        </Stack>
      </Box>
    </Stack>
  );
};
