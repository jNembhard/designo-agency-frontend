import { useQuery } from "@apollo/client";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";
import { GET_DESIGN } from "../../../graphql/designQueries";

type Props = {};

const SubDesign = (design: { designID: string }) => {
  const { loading, error, data } = useQuery(GET_DESIGN, {
    variables: { DesignID: design.designID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { images, name, slug } = data.design;

  return (
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
          margin: "0 24px 2rem",
          width: { mobile: "20.438rem" },
          height: { mobile: "15.625rem" },
        }}
      >
        <picture>
          <source media="(min-width: 62em)" srcSet={images.desktop} />
          <source media="(min-width: 30em)" srcSet={images.tablet} />
          <Box
            component="img"
            sx={{ opacity: 0.7 }}
            src={images.mobile}
            alt={name}
          />
        </picture>
        <Box position="absolute" alignItems="center" justifyContent="center">
          <Typography
            variant="h2"
            sx={{
              textTransform: "uppercase",
              fontSize: { mobile: "28px", tablet: "40px" },
            }}
          >
            {name}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "5px",
              textTransform: "uppercase",
            }}
          >
            view projects
          </Typography>
        </Box>
      </Stack>
    </Link>
  );
};

export default SubDesign;
