import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GET_CALLOUTS } from "../../../graphql/calloutQueries";
import { ICallout } from "../../../interface/Callout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Keypoint from "../../molecules/Keypoint/Keypoint";
import { KeypointsSkeleton } from "./KeypointsSkeleton";
import { keypointsStyles } from "./KeypointsStyles";

const Keypoints = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");

  const { loading, error, data } = useQuery(GET_CALLOUTS, {
    variables: { count: 3 },
  });

  if (loading) return <KeypointsSkeleton />;

  if (error) return <div>Error occured while fetching data</div>;

  const callouts = [...data.callouts.callout];
  callouts.sort((a: ICallout, b: ICallout) =>
    a.calloutID.localeCompare(b.calloutID)
  );

  return (
    <Box sx={{ ...keypointsStyles.wrapper }}>
      {!loading && !error && (
        <Stack direction={isBreakpoint1024 ? "row" : "column"}>
          {callouts.map((callout: ICallout) => (
            <Keypoint key={callout.calloutID} {...callout} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Keypoints;
