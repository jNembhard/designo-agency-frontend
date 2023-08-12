import { useQuery } from "@apollo/client";
import { GET_DESIGN_HEADER } from "../../graphql/designQueries";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const DesignHeader = ({ designID }: { designID: string }) => {
  const { loading, error, data } = useQuery(GET_DESIGN_HEADER, {
    variables: { DesignID: designID },
  });

  if (loading) {
    return (
      <Box
        bgcolor="peach.main"
        textAlign="center"
        sx={{
          minHeight: {
            mobile: "20rem",
          },
          padding: {
            mobile: "6.563rem 1.5rem",
          },
        }}
      >
        Loading...
      </Box>
    );
  }

  if (error) {
    return <div>Error occured while fetching data</div>;
  }

  const { header, images, name } = data.design;

  return (
    <>
      {!loading && !error && (
        <Box
          bgcolor="peach.main"
          position="relative"
          overflow="hidden"
          zIndex="1"
          sx={{
            minHeight: {
              mobile: "20rem",
            },
            padding: {
              mobile: "6.563rem 1.5rem",
            },
          }}
        >
          <Box
            component="img"
            position="absolute"
            src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.bgPattern}
            zIndex="-1"
            sx={{
              top: {
                mobile: "30px",
              },
              right: {
                mobile: "0",
              },
            }}
            alt=""
          />
          <Box textAlign="center">
            <Typography
              variant="h2"
              color="white.main"
              textTransform="capitalize"
              sx={{
                mb: {
                  mobile: "1.5rem",
                },
              }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              color="white.main"
              fontSize="0.938rem"
              lineHeight="1.563rem"
            >
              {header}
            </Typography>
          </Box>
        </Box>
      )}
    </>
  );
};

export default DesignHeader;
