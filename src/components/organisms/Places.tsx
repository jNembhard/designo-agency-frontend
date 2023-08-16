import { GET_PLACES } from "../../graphql/locationQueries";
import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from "@mui/material/Stack";
import Place from "../molecules/Place";
import { IPlace } from "../../interface/Place";
import { Box } from "@mui/material";

const Places = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
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
    <Box margin="auto">
      {!loading && !error && (
        <Stack
          direction={isBreakpoint1024 ? "row" : "column"}
          sx={{
            margin: {
              mobile: "7.5rem 0.75rem",
              laptop: "10.313rem 10rem",
              desktop: "10.313rem auto",
            },
          }}
          maxWidth="1111px"
          alignItems="center"
          justifyContent="space-between"
        >
          {places.map((place: IPlace) => (
            <Place key={place.LocationID} {...place} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Places;
