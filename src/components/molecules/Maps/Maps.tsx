import { useEffect } from "react";
import { mapsStyles } from "./MapsStyles";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../../graphql/locationQueries";
import { ILocation } from "../../../interface/Location";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import LocationContact from "../../atoms/LocationContact/LocationContact";
import { MapsSkeleton } from "./MapsSkeleton";

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

  if (loading) return <MapsSkeleton />;

  if (error) return <div>Error occured while fetching locations data</div>;

  const location = [...data.locations.location];
  location.sort((a: ILocation, b: ILocation) =>
    a.LocationID.localeCompare(b.LocationID)
  );

  return (
    <Box>
      {!loading && !error && (
        <Box sx={{ ...mapsStyles.wrapper }}>
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
                sx={{ ...mapsStyles.container }}
              >
                <Box id={hashID} sx={{ ...mapsStyles.imageWrapper }}>
                  <picture>
                    <source
                      media="(min-width: 767px) and (max-width: 1023px)"
                      srcSet={
                        process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                        location.images.tablet
                      }
                    />
                    <Box
                      component="img"
                      sx={{ ...mapsStyles.mapImages }}
                      src={
                        process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                        location.images.desktop
                      }
                      alt={location.title}
                    />
                  </picture>
                </Box>
                <Box sx={{ ...mapsStyles.textWrapper }}>
                  <Box sx={{ ...mapsStyles.bgImageWrapper }}>
                    <img
                      src={
                        process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                        "assets/shared/desktop/bg-pattern-three-circles.svg"
                      }
                      alt=""
                    />
                  </Box>
                  <Box sx={{ ...mapsStyles.textContainer }}>
                    <Typography variant="h2" sx={{ ...mapsStyles.title }}>
                      {location.title}
                    </Typography>
                    <Stack
                      direction={isBreakpoint767 ? "row" : "column"}
                      spacing={isBreakpoint767 ? 13 : 0}
                      sx={{ ...mapsStyles.contactsWrapper }}
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
    </Box>
  );
};

export default Maps;
