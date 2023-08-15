import { useQuery } from "@apollo/client";
import { GET_DESIGN } from "../../../graphql/designQueries";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const SubDesign = (design: { designID: string }) => {
  const { loading, error, data } = useQuery(GET_DESIGN, {
    variables: { DesignID: design.designID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { images, name, slug } = data.design;

  return (
    <div>
      <Link href={`/designs${slug}`} sx={{ color: "white.main" }}>
        <Stack
          position="relative"
          direction="column"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          borderRadius="0.938rem"
          overflow="hidden"
          bgcolor="black.dark"
          sx={{
            mb: { mobile: "1.5rem", laptop: "0" },
            height: {
              mobile: "15.313rem",
              tablet: "12.5rem",
              laptop: "19.25rem",
            },
            maxWidth: { laptop: "33.813rem" },
            "&:hover": {
              bgcolor: "peach.main",
            },
          }}
        >
          <picture>
            <source
              media="(min-width: 64em)"
              srcSet={
                process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.desktop
              }
            />
            <source
              media="(min-width: 47.938rem)"
              srcSet={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.tablet}
            />
            <Box
              component="img"
              sx={{
                objectFit: "cover",
                opacity: 0.5,
              }}
              src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.mobile}
              alt={name}
            />
          </picture>
          <Box position="absolute" alignItems="center" justifyContent="center">
            <Typography
              variant="h2"
              sx={{
                textTransform: "uppercase",
                fontSize: { mobile: "1.75rem", tablet: "2.5rem" },
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "0.938rem",
                fontWeight: 500,
                letterSpacing: "0.313rem",
                textTransform: "uppercase",
              }}
            >
              view projects
            </Typography>
          </Box>
        </Stack>
      </Link>
    </div>
  );
};

export default SubDesign;
