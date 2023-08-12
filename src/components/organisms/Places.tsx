import { GET_PLACES } from "../../graphql/locationQueries";
import { useQuery } from "@apollo/client";
import { IPlace } from "../../interface/Place";
import { DesignButton } from "../atoms/DesignoButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Places = () => {
  const { loading, error, data } = useQuery(GET_PLACES, {
    variables: { count: 3 },
  });

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const places = [...data.locations.location];
  places.sort((a: IPlace, b: IPlace) =>
    a.LocationID.localeCompare(b.LocationID)
  );

  return (
    <>
      {!loading && !error && (
        <Stack sx={{ m: { mobile: "7.5rem 0.75rem" } }}>
          {places.map((place) => (
            <Stack key={place.LocationID} textAlign="center" my="1.5rem">
              <Box
                borderRadius="100%"
                maxWidth="12.625rem"
                maxHeight="12.625rem"
                sx={{ margin: { mobile: "0 auto 3rem" } }}
              >
                <Box
                  position="absolute"
                  zIndex="-1"
                  sx={{
                    transform:
                      place.LocationID === "location-1"
                        ? "rotate(90deg)"
                        : place.LocationID === "location-2"
                        ? ""
                        : "rotate(270deg)",
                  }}
                >
                  <img
                    src={
                      process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                      "assets/shared/desktop/bg-pattern-small-circle.svg"
                    }
                    alt=""
                  />
                </Box>
                <Box>
                  <img
                    src={
                      process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
                      place.images.icon
                    }
                    alt={place.name}
                  />
                </Box>
              </Box>
              <Typography variant="h3" textTransform="uppercase" mb="2rem">
                {place.name}
              </Typography>
              <DesignButton
                link={`/locations${place.slug}`}
                text="see location"
                islight={false}
              />
            </Stack>
          ))}
        </Stack>
      )}
    </>
  );
};

export default Places;
