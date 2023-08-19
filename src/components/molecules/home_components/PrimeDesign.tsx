import { useQuery } from "@apollo/client";
import { GET_DESIGN } from "../../../graphql/designQueries";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Arrow from "../../atoms/Arrow";
import { Skeleton } from "@mui/material";
import { useState } from "react";

const PrimeDesignSkeleton = () => {
  return (
    <Stack
      sx={{
        width: { mobile: "85vw", tablet: "90vw", laptop: "35vw" },
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
      }}
    >
      <Skeleton animation="wave" variant="rounded" height="90%" />
    </Stack>
  );
};

type PrimeDesignProp = {
  designID: string;
};

const PrimeDesign = (design: PrimeDesignProp) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px");
  const [isLoading, setIsLoading] = useState(true);

  const { loading, error, data } = useQuery(GET_DESIGN, {
    variables: { DesignID: design.designID },
  });

  if (loading) return <PrimeDesignSkeleton />;
  if (error) return <p>Error:{error.message}</p>;

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
              mb: {
                mobile: "2rem",
                tablet: "2rem",
                laptop: "0",
              },
              maxHeight: {
                mobile: "15.313rem",
                tablet: "11.8rem",
                laptop: "36.8rem",
              },
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
                  process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                  images.desktopLarge
                }
              />
              <source
                media="(min-width: 47.938em)"
                srcSet={
                  process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.tablet
                }
              />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                  opacity: 0.5,
                }}
                src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.mobile}
                alt={title}
                width="100%"
                height="auto"
              />
            </picture>
            <Box
              position="absolute"
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Typography
                  variant="h2"
                  sx={{
                    textTransform: "uppercase",
                    fontSize: { mobile: "1.75rem", tablet: "2.5rem" },
                    letterSpacing: { mobile: "0.088rem", tablet: "0.125rem" },
                    color: "white",
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
                    margin: {
                      mobile: "0.75rem auto 0",
                      tablet: "1.5rem auto 0",
                    },
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
            </Box>
          </Stack>
        </Link>
      )}
    </div>
  );
};

export default PrimeDesign;
