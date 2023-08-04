import { useQuery } from "@apollo/client";
import { GET_DESIGN } from "../../../graphql/designQueries";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const WebDesign = (design: { designID: string }) => {
  const { loading, error, data } = useQuery(GET_DESIGN, {
    variables: { DesignID: design.designID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error:{error.message}</p>;

  const { images, name, slug } = data.design;

  return (
    <>
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
              margin: "0 1.5rem 2rem",
              width: { mobile: "20.438rem" },
              height: { mobile: "15.313rem" },
              "&:hover": {
                bgcolor: "peach.main",
              },
            }}
          >
            <picture>
              <source media="(min-width: 62em)" srcSet={images.desktopLarge} />
              <source media="(min-width: 30em)" srcSet={images.tablet} />
              <Box
                component="img"
                sx={{
                  objectFit: "cover",
                  opacity: 0.5,
                }}
                src={images.mobile}
                alt={name}
              />
            </picture>
            <Box
              position="absolute"
              sx={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  textTransform: "uppercase",
                  fontSize: { mobile: "1.75rem", tablet: "2.5rem" },
                  fontWeight: 500,
                  letterSpacing: { mobile: "0.088rem", tablet: "0.125rem" },
                  color: "white",
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
      )}
    </>
  );
};

export default WebDesign;
