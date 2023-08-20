import { useQuery } from "@apollo/client";
import { GET_DESIGN } from "../../../graphql/designQueries";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Arrow from "../../atoms/Arrow";
import { useState } from "react";
import { PrimeDesignSkeleton } from "../skeletons/PrimeDesignSkeleton";

const primeDesignLink = {
  color: "white.main",
};

const primeDesignContainer = {
  position: "relative",
  direction: "column",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "0.938rem",
  overflow: "hidden",
  bgcolor: "black.dark",
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
};

const primeDesignImages = {
  objectFit: "cover",
  opacity: 0.5,
  width: "100%",
  height: "auto",
};

const primeDesignTextWrapper = {
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
};

const primeDesignHeading = {
  textTransform: "uppercase",
  fontSize: {
    mobile: "1.75rem",
    tablet: "2.5rem",
  },
  letterSpacing: {
    mobile: "0.088rem",
    tablet: "0.125rem",
  },
  color: "white",
};

const primeDesignTextContainer = {
  justifyContent: "center",
  alignItems: "center",
  margin: {
    mobile: "0.75rem auto 0",
    tablet: "1.5rem auto 0",
  },
};

const primeDesignText = {
  fontSize: "0.938rem",
  fontWeight: 500,
  letterSpacing: "0.313rem",
  textTransform: "uppercase",
};

const primeStyles = {
  link: primeDesignLink,
  container: primeDesignContainer,
  images: primeDesignImages,
  textWrapper: primeDesignTextWrapper,
  heading: primeDesignHeading,
  textContainer: primeDesignTextContainer,
  text: primeDesignText,
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

  if (loading || isLoading) return <PrimeDesignSkeleton />;
  if (error) return <p>Error:{error.message}</p>;

  const { images, title, slug } = data.design;

  return (
    <div>
      {!loading && !error && (
        <Link href={`/designs${slug}`} sx={{ ...primeStyles.link }}>
          <Stack sx={{ ...primeStyles.container }}>
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
                sx={{ ...primeStyles.images }}
                src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.mobile}
                alt={title}
              />
            </picture>
            <Box sx={{ ...primeStyles.textWrapper }}>
              <Box>
                <Typography variant="h2" sx={{ ...primeStyles.heading }}>
                  {title}
                </Typography>
                <Stack
                  direction="row"
                  spacing={isBreakpoint767 ? 2 : 0.5}
                  sx={{ ...primeStyles.textContainer }}
                >
                  <Typography variant="body1" sx={{ ...primeStyles.text }}>
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
