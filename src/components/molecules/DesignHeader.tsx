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

  const { header, name } = data.design;

  return (
    <Box
      bgcolor="peach.main"
      sx={{
        minHeight: {
          mobile: "20rem",
        },
        padding: {
          mobile: "6.563rem 1.5rem",
        },
      }}
    >
      {!loading && !error && (
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
      )}
    </Box>
  );
};

export default DesignHeader;
