import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GET_CALLOUTS } from "../../graphql/calloutQueries";
import { ICallout } from "../../interface/Callout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Keypoint from "../molecules/Keypoint";
import { useState } from "react";
import { KeypointsSkeleton } from "./skeletons/KeypointsSkeleton";

const keypointsWrapper = {
  display: { laptop: "flex" },
  alignItems: { laptop: "center" },
  justifyContent: { laptop: "center" },
  mx: {
    mobile: "1.5rem",
    tablet: "2.438rem",
    laptop: "unset",
  },
  mb: {
    tablet: "4.188rem",
    laptop: "10rem",
  },
};

const Keypoints = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");
  const [isLoading, setIsLoading] = useState(true);

  const { loading, error, data } = useQuery(GET_CALLOUTS, {
    variables: { count: 3 },
  });

  if (loading || isLoading) {
    return <KeypointsSkeleton />;
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const callouts = [...data.callouts.callout];
  callouts.sort((a: ICallout, b: ICallout) =>
    a.calloutID.localeCompare(b.calloutID)
  );

  return (
    <Box sx={{ ...keypointsWrapper }}>
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
