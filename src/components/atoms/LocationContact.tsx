import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export type LocationContactProp = {
  anchorID?: string;
  subHeading: string;
  titleOne: string;
  titleTwo: string;
};

const LocationContact = ({
  subHeading,
  titleOne,
  titleTwo,
}: LocationContactProp) => {
  return (
    <Box>
      <Box
        sx={{
          my: {
            mobile: "1.5rem",
            tablet: "unset",
          },
          textAlign: { tablet: "left" },
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: "black.main",
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
          sx={{ color: "black.main" }}
          fontSize="1rem"
          lineHeight="1.625rem"
        >
          {titleOne}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "black.main" }}
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
