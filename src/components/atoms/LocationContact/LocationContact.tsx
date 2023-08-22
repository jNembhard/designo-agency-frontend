import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { locationContactStyles } from "./LocationContactStyles";

type LocationContactProp = {
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
      <Box sx={{ ...locationContactStyles.textContainer }}>
        <Typography
          variant="body1"
          sx={{ ...locationContactStyles.subheading }}
        >
          {subHeading}
        </Typography>
        <Typography variant="body1" sx={{ ...locationContactStyles.title }}>
          {titleOne}
        </Typography>
        <Typography variant="body1" sx={{ ...locationContactStyles.title }}>
          {titleTwo}
        </Typography>
      </Box>
    </Box>
  );
};

export default LocationContact;
