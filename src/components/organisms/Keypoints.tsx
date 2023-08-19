import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GET_CALLOUTS } from "../../graphql/calloutQueries";
import { ICallout } from "../../interface/Callout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Keypoint from "../molecules/Keypoint";
import { Skeleton } from "@mui/material";
import { useState } from "react";

const KeypointsSkeleton = () => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");
  return (
    <Box
      sx={{
        display: { laptop: "flex" },
        alignItems: { laptop: "center" },
        justifyContent: { laptop: "center" },
        mx: { mobile: "1.5rem", tablet: "2.438rem", laptop: "unset" },
        mb: { tablet: "4.188rem", laptop: "10rem" },
      }}
    >
      <Stack direction={isBreakpoint1024 ? "row" : "column"}>
        {Array.from({ length: 3 }, (_, index) => (
          <Stack
            direction={
              isBreakpoint1024 ? "column" : isBreakpoint767 ? "row" : "column"
            }
            sx={{
              mb: { mobile: "5rem", tablet: "1.5rem" },
              alignItems: { tablet: "center", justifyContent: "center" },
              maxWidth: { laptop: "18rem", desktop: "21.875rem" },
              mx: { laptop: "0.625rem" },
            }}
          >
            <Skeleton
              animation="wave"
              key={index}
              variant="circular"
              width={202}
              height={202}
              sx={{
                margin: {
                  mobile: "0 auto 3rem",
                  tablet: "0 30px 3rem",
                  laptop: "0 auto 3rem",
                },
              }}
            />
            <Stack
              sx={{
                alignItems: {
                  mobile: "center",
                  tablet: "unset",
                  laptop: "center",
                },
                justifyContent: { mobile: "center", tablet: "left" },
              }}
            >
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{
                  width: { mobile: "50vw", tablet: "20vw", laptop: "12vw" },
                  my: "32px",
                }}
              />
              <Stack
                spacing={1}
                sx={{
                  width: { mobile: "85vw", tablet: "55vw", laptop: "20vw" },
                }}
              >
                <Skeleton animation="wave" variant="rounded" />
                <Skeleton animation="wave" variant="rounded" />
                <Skeleton animation="wave" variant="rounded" />
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

const Keypoints = () => {
  const isBreakpoint1024 = useMediaQuery("(min-width: 1024px");
  const [isLoading, setIsLoading] = useState(true);

  const { loading, error, data } = useQuery(GET_CALLOUTS, {
    variables: { count: 3 },
  });

  if (loading) {
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
    <Box
      sx={{
        display: { laptop: "flex" },
        alignItems: { laptop: "center" },
        justifyContent: { laptop: "center" },
        mx: { mobile: "1.5rem", tablet: "2.438rem", laptop: "unset" },
        mb: { tablet: "4.188rem", laptop: "10rem" },
      }}
    >
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
