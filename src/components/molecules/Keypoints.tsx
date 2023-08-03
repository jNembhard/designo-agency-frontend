import { useQuery } from "@apollo/client";
import { GET_CALLOUTS } from "../../graphql/calloutQueries";
import { ICallout } from "../../interface/Callout";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Keypoints = () => {
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
    <Box sx={{ margin: { mobile: "0 0.75rem" } }}>
      {!loading && !error && (
        <Stack>
          {callout.map((callout: ICallout) => (
            <Stack
              key={callout.calloutID}
              textAlign="center"
              sx={{ marginBottom: { mobile: "5rem" } }}
            >
              <Box
                bgcolor="white.dark"
                borderRadius="100%"
                maxWidth="12.625rem"
                maxHeight="12.625rem"
                sx={{ margin: { mobile: "0 auto 3rem" } }}
              >
                <img src={callout.image} alt={callout.title} />
              </Box>
              <Box>
                <Typography
                  variant="h3"
                  textTransform="uppercase"
                  sx={{
                    lineHeight: { mobile: "1.625rem" },
                    marginBottom: { mobile: "2rem" },
                  }}
                >
                  {callout.title}
                </Typography>
                <Typography
                  variant="body1"
                  color="black.main"
                  sx={{ lineHeight: { mobile: "1.75rem" } }}
                >
                  {callout.description}
                </Typography>
              </Box>
            </Stack>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Keypoints;
