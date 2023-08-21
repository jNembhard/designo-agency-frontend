import { useQuery } from "@apollo/client";
import { GET_DESIGN } from "../../../../graphql/designQueries";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Arrow from "../../../atoms/Arrow";
import { SubDesignSkeleton } from "./SubDesignSkeleton";
import { useState } from "react";
import { subStyles } from "./SubDesignStyles";

type SubDesignProp = {
  designID: string;
};

const SubDesign = (design: SubDesignProp) => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px");
  const [isLoading, setIsLoading] = useState(true);

  const { loading, error, data } = useQuery(GET_DESIGN, {
    variables: { DesignID: design.designID },
  });

  if (loading || isLoading) return <SubDesignSkeleton />;
  if (error) return <p>Error: {error.message}</p>;

  const { images, title, slug } = data.design;

  return (
    <div>
      {!loading && !error && (
        <Link href={`/designs${slug}`} sx={{ ...subStyles.link }}>
          <Stack direction="column" sx={{ ...subStyles.container }}>
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
                sx={{ ...subStyles.images }}
                src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.mobile}
                alt={title}
              />
            </picture>
            <Box sx={{ ...subStyles.wrapper }}>
              <Typography variant="h2" sx={{ ...subStyles.title }}>
                {title}
              </Typography>
              <Stack
                direction="row"
                spacing={isBreakpoint767 ? 2 : 0.5}
                sx={{ ...subStyles.textContainer }}
              >
                <Typography variant="body1" sx={{ ...subStyles.text }}>
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
