import { useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "../../graphql/locationQueries";
import { ILocation } from "../../interface/Location";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import LocationContact from "../atoms/LocationContact";

const Maps = () => {
  const { loading, error, data } = useQuery(GET_LOCATIONS, {
    variables: { count: 3 },
  });

  useEffect(() => {
    if (!loading && !error && window.location.hash) {
      const hash = window.location.hash.slice(1);
      console.log(hash);
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
        <div>
          {location.map((location: ILocation) => {
            let hashID = location.slug.replace("#", "");

            return (
              <Stack key={hashID} mb="5rem">
                <Box
                  id={location.slug.replace("#", "")}
                  component="picture"
                  margin="0"
                  padding="0"
                  sx={{
                    height: {
                      mobile: "20rem",
                      tablet: "20.375rem",
                      laptop: "20rem",
                    },
                  }}
                >
                  <source
                    media="(min-width: 30em)"
                    srcSet={location.images.tablet}
                  />
                  <img src={location.images.desktop} alt="" />
                </Box>
                <Box position="relative">
                  <Box
                    position="absolute"
                    zIndex="-1"
                    maxHeight="24.625rem"
                    width="100vw"
                    overflow="hidden"
                    bgcolor="sand"
                  >
                    <img
                      src="https://designo-image-bucket.s3.amazonaws.com/assets/shared/desktop/bg-pattern-three-circles.svg"
                      alt=""
                    />
                  </Box>
                  <Box padding="2.5rem 1.5rem">
                    <LocationContact
                      heading={location.name}
                      subHeading={location.office}
                      titleOne={location.address.street}
                      titleTwo={location.address.country}
                    />
                    <LocationContact
                      subHeading="Contact"
                      titleOne={location.contact.phone}
                      titleTwo={location.contact.email}
                    />
                  </Box>
                </Box>
              </Stack>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Maps;
