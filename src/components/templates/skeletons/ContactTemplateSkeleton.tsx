import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const contactTemplateSkeletonWrapper = {
  pt: {
    tablet: "4.5rem",
  },
  margin: "auto",
  maxWidth: {
    laptop: "90vw",
    desktop: "69.438rem",
  },
  height: {
    mobile: "47.75rem",
    tablet: "44.4375rem",
  },
};

const contactTemplateSkeletonContainer = {
  display: "flex",
  flexDirection: {
    mobile: "column",
    laptop: "row",
  },
  margin: {
    mobile: "4.5rem, 1.5rem",
  },
  alignItems: "center",
  justifyContent: {
    mobile: "center",
    laptop: "space-between",
  },
};

const contactTemplateSkeletonTitle = {
  width: {
    mobile: "40vw",
    laptop: "15rem",
  },
  height: "1.25rem",
  mb: "1.5rem",
};

const contactTemplateSkeletonTextContainer = {
  my: "1.875rem",
};

const contactTemplateSkeletonText = {
  width: {
    mobile: "80vw",
    tablet: "50vw",
    laptop: "27.8125rem",
  },
  height: "1.25rem",
};

const contactTemplateSkeletonTFormContainer = {
  height: {
    mobile: "18.1875rem",
  },
  alignItems: {
    mobile: "center",
    tablet: "end",
  },
  my: "3rem",
};

const contactTemplateSkeletonForm = {
  width: {
    mobile: "70vw",
    laptop: "23.75rem",
  },
  height: {
    mobile: "2.25rem",
  },
};

const contactTemplateSkeletonFormButton = {
  width: "9.5rem",
  height: "3.5rem",
};

const contactTemplateSkeletonStyles = {
  wrapper: contactTemplateSkeletonWrapper,
  container: contactTemplateSkeletonContainer,
  title: contactTemplateSkeletonTitle,
  textContainer: contactTemplateSkeletonTextContainer,
  text: contactTemplateSkeletonText,
  formContainer: contactTemplateSkeletonTFormContainer,
  form: contactTemplateSkeletonForm,
  formButton: contactTemplateSkeletonFormButton,
};

export const ContactTemplateSkeleton = () => {
  return (
    <Stack sx={{ ...contactTemplateSkeletonStyles.wrapper }}>
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
