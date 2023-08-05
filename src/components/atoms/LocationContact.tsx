import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const LocationContact = ({
  heading,
  subHeading,
  titleOne,
  titleTwo,
}: {
  heading?: string;
  subHeading: string;
  titleOne: string;
  titleTwo: string;
}) => {
  return (
    <Box>
      {heading && (
        <Typography
          variant="h2"
          color="peach.main"
          textAlign="center"
          textTransform="capitalize"
        >
          {heading}
        </Typography>
      )}
      <Box
        sx={{
          my: {
            mobile: "1.5rem",
          },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "black.main",
            textAlign: {
              mobile: "center",
            },
          }}
          textTransform="capitalize"
          fontWeight="700"
          fontSize="1rem"
          lineHeight="1.625rem"
        >
          {subHeading}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "black.main", textAlign: { mobile: "center" } }}
          fontSize="1rem"
          lineHeight="1.625rem"
        >
          {titleOne}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "black.main", textAlign: { mobile: "center" } }}
          fontSize="1rem"
          lineHeight="1.625rem"
        >
          {titleTwo}
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationContact;
