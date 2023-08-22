import { useQuery } from "@apollo/client";
import { GET_DESIGN } from "../../../../graphql/designQueries";
import useMediaQuery from "@mui/material/useMediaQuery";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Arrow from "../../../atoms/Arrow";
import { PrimeDesignSkeleton } from "./PrimeDesignSkeleton";
import { primeStyles } from "./PrimeStyles";

type PrimeDesignProp = {
  designID: string;
};

const PrimeDesign = (design: PrimeDesignProp) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px");

  const { loading, error, data } = useQuery(GET_DESIGN, {
    variables: { DesignID: design.designID },
  });

  if (loading) return <PrimeDesignSkeleton />;
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
