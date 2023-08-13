import { useQuery } from "@apollo/client";
import useMediaQuery from "@mui/material/useMediaQuery";
import { GET_CALLOUTS } from "../../graphql/calloutQueries";
import { ICallout } from "../../interface/Callout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Keypoints = () => {
  const isBreakpoint767 = useMediaQuery("(min-width: 767px)");
  const isBreakpoint1200 = useMediaQuery("(min-width: 1200px");

  const { loading, error, data } = useQuery(GET_CALLOUTS, {
    variables: { count: 3 },
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const callout = [...data.callouts.callout];
  callout.sort((a: ICallout, b: ICallout) =>
    a.calloutID.localeCompare(b.calloutID)
  );
  return (
    <Box
      sx={{
        display: { laptop: "flex" },
        alignItems: { laptop: "center" },
        justifyContent: { laptop: "center" },
        mx: { mobile: "1.5rem", tablet: "2.438rem", laptop: "unset" },
        mb: { tablet: "4.188rem" },
      }}
    >
      {!loading && !error && (
        <Stack direction={isBreakpoint1200 ? "row" : "column"}>
          {callout.map((callout: ICallout) => (
            <Stack
              key={callout.calloutID}
              direction={
                isBreakpoint1200
                  ? isBreakpoint1200
                    ? "column"
                    : "row"
                  : isBreakpoint767
                  ? "row"
                  : "column"
              }
              sx={{
                mb: { mobile: "5rem", tablet: "1.5rem" },
                alignItems: { tablet: "center", justifyContent: "center" },
                maxWidth: { laptop: "6.25rem", desktop: "21.875rem" },
                mx: { laptop: "0.625rem" },
              }}
            >
              <Box
                borderRadius="100%"
                position="relative"
                maxWidth="12.625rem"
                maxHeight="12.625rem"
                sx={{
                  margin: {
                    mobile: "0 auto 3rem",
                    tablet: "0",
                    laptop: "0 auto 3rem",
                  },
                }}
              >
                <Box
                  position="absolute"
                  zIndex="-1"
                  sx={{
                    transform:
                      callout.calloutID === "callout-1"
                        ? ""
                        : callout.calloutID === "callout-2"
                        ? "rotate(270deg)"
                        : "rotate(90deg)",
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
                      `${process.env.REACT_APP_CLOUDFRONT_ENDPOINT}` +
                      callout.image
                    }
                    alt={callout.title}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  textAlign: {
                    mobile: "center",
                    tablet: "left",
                    laptop: "center",
                  },
                  ml: {
                    tablet: "2.5rem",
                    laptop: "unset",
                  },
                }}
              >
                <Typography
                  variant="h3"
                  textTransform="uppercase"
                  sx={{
                    lineHeight: { mobile: "1.625rem" },
                    marginBottom: { mobile: "2rem", tablet: "1rem" },
                  }}
                >
                  {callout.title}
                </Typography>
                <Typography variant="body1">{callout.description}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Keypoints;
