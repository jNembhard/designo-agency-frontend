import { useEffect } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../graphql/locationQueries";
import { ILocation } from "../../interface/Location";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LocationContact from "../atoms/LocationContact";
import Typography from "@mui/material/Typography";

const Maps = () => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");

  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { count: 3 },
  });

  useEffect(() => {
    if (!loading && !error && window.location.hash) {
      const hash = window.location.hash.slice(1);
      const targetElement = document.getElementById(hash);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [loading, error]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const location = [...data.locations.location];
  location.sort((a: ILocation, b: ILocation) =>
    a.LocationID.localeCompare(b.LocationID)
  );

  return (
    <>
      {!loading && !error && (
        <Box
          sx={{
            maxWidth: {
              laptop: "69.4375rem",
            },
            margin: { laptop: "auto" },
          }}
        >
          {location.map((location: ILocation) => {
            let hashID = location.slug.replace("#", "");

            return (
              <Stack
                key={hashID}
                direction={
                  isBreakpoint1024 && hashID === "australia"
                    ? "row"
                    : isBreakpoint1024
                    ? "row-reverse"
                    : isBreakpoint767
                    ? "column"
                    : undefined
                }
                spacing={isBreakpoint1024 ? 3 : 0}
                sx={{
                  margin: {
                    mobile: "0 0 5rem 0",
                    tablet: "0 2.5rem 7.5rem",
                    laptop: "0 0 2rem",
                  },
                }}
              >
                <Box
                  id={hashID}
                  component="picture"
                  margin="0"
                  padding="0"
                  sx={{
                    height: {
                      mobile: "20rem",
                      tablet: "20.375rem",
                      laptop: "19.5rem",
                    },
                    mb: {
                      tablet: "1.5rem",
                      laptop: "unset",
                    },
                    borderRadius: {
                      tablet: "0.9375rem",
                    },
                    overflow: "hidden",
                  }}
                >
                  <Box
                    component="source"
                    media="(min-width: 767px) and (max-width: 1023px)"
                    srcSet={
                      process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                      location.images.tablet
                    }
                  />
                  <Box
                    component="img"
                    src={
                      process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                      location.images.desktop
                    }
                    alt={location.title}
                    width="100%"
                    height="auto"
                    sx={{
                      objectFit: "fill",
                    }}
                  />
                </Box>
                <Box
                  position="relative"
                  bgcolor="sand"
                  zIndex="-1"
                  sx={{
                    borderRadius: {
                      tablet: "0.9375rem",
                    },
                    overflow: { tablet: "hidden" },
                    width: {
                      laptop: "45.625rem",
                    },
                    height: {
                      laptop: "19.5rem",
                    },
                  }}
                >
                  <Box
                    position="absolute"
                    zIndex="-1"
                    width="100vw"
                    overflow="hidden"
                    sx={{
                      top: { tablet: "-16.25rem" },
                      left: { tablet: "0.313rem" },
                      height: { mobile: "24rem", tablet: "unset" },
                    }}
                  >
                    <img
                      src={
                        process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                        "assets/shared/desktop/bg-pattern-three-circles.svg"
                      }
                      alt=""
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    flexDirection="column"
                    sx={{
                      padding: {
                        mobile: "2.5rem 1.5rem",
                        tablet: "5.5rem 4.69rem",
                      },
                      textAlign: { mobile: "center", tablet: "left" },
                    }}
                  >
                    <Typography
                      variant="h2"
                      color="peach.main"
                      textTransform="capitalize"
                      zIndex="2"
                    >
                      {location.title}
                    </Typography>
                    <Stack
                      direction={isBreakpoint767 ? "row" : "column"}
                      spacing={isBreakpoint767 ? 13 : 0}
                      sx={{ pt: { tablet: "1.5rem" } }}
                    >
                      <LocationContact
                        subHeading={location.office}
                        titleOne={location.address.street}
                        titleTwo={location.address.country}
                      />
                      <LocationContact
                        subHeading="Contact"
                        titleOne={location.contact.phone}
                        titleTwo={location.contact.email}
                      />
                    </Stack>
                  </Box>
                </Box>
              </Stack>
            );
          })}
        </Box>
      )}
    </>
  );
};

export default Maps;
