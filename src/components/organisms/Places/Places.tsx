import { GET_PLACES } from "../../../graphql/locationQueries";
import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Place from "../../molecules/Place/Place";
import { IPlace } from "../../../interface/Place";
import { PlacesSkeleton } from "./PlacesSkeleton";
import { placeStyles } from "./PlacesStyles";

const Places = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px)");
  const { loading, error, data } = useQuery(GET_PLACES, {
    variables: { count: 3 },
  });

  if (loading) return <PlacesSkeleton />;

  if (error) return <div>Error occured while fetching locations data</div>;

  const places = [...data.locations.location];
  places.sort((a: IPlace, b: IPlace) =>
    a.LocationID.localeCompare(b.LocationID)
  );

  return (
    <Box sx={{ ...placeStyles.box }}>
      {!loading && !error && (
        <Stack
          direction={isBreakpoint1024 ? "row" : "column"}
          sx={{ ...placeStyles.container }}
        >
          {places.map((place: IPlace) => {
            const { LocationID } = place;
            return <Place key={LocationID} {...place} />;
          })}
        </Stack>
      )}
    </Box>
  );
};

export default Places;
