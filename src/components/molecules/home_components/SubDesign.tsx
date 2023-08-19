import { useQuery } from "@apollo/client";
import { GET_DESIGN } from "../../../graphql/designQueries";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Arrow from "../../atoms/Arrow";

type SubDesignProp = {
  designID: string;
};

const SubDesign = (design: SubDesignProp) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px");

  const { loading, error, data } = useQuery(GET_DESIGN, {
    variables: { DesignID: design.designID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { images, title, slug } = data.design;

  return (
    <div>
      {!loading && !error && (
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
              maxHeight: {
                mobile: "15.313rem",
                tablet: "11.8rem",
                laptop: "17.8rem",
              },
              maxWidth: { laptop: "33.813rem" },
              transition: "background-color 0.2s ease-in-out",
              "&:hover": {
                bgcolor: "peach.main",
                transition: "background-color 0.3s ease-in-out",
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
                srcSet={
                  process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.tablet
                }
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                  opacity: 0.5,
                  maxWidth: "100%",
                  height: "auto",
                }}
                src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.mobile}
                alt={title}
              />
            </picture>
            <Box
              position="absolute"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h2"
                sx={{
                  textTransform: "uppercase",
                  fontSize: { mobile: "1.75rem", tablet: "2.5rem" },
                }}
              >
                {title}
              </Typography>
              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={isBreakpoint767 ? 2 : 0.5}
                sx={{
                  margin: { mobile: "0.75rem auto 0", tablet: "1.5rem auto 0" },
                }}
              >
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
                <Arrow hexColor="#E7816B" />
              </Stack>
            </Box>
          </Stack>
        </Link>
      )}
    </div>
  );
};

export default SubDesign;
