import { IPlace } from "../../interface/Place";
import { DesignButton } from "../atoms/DesignoButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const placeWrapper = {
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  my: {
    mobile: "1.5rem",
    laptop: "0",
  },
  width: {
    laptop: "21.875rem",
  },
};

const placeContainer = {
  borderRadius: "100%",
  maxWidth: "12.625rem",
  maxHeight: "12.625rem",
  margin: { mobile: "0 auto 3rem" },
};

const placeImageWrapper = {
  position: "absolute",
  zIndex: "-1",
};

const placeHeading = {
  mb: "2rem",
  textTransform: "uppercase",
};

const placeStyles = {
  wrapper: placeWrapper,
  container: placeContainer,
  imageWrapper: placeImageWrapper,
  heading: placeHeading,
};

const Place = ({ LocationID, images, title, slug }: IPlace) => {
  return (
    <Stack sx={{ ...placeStyles.wrapper }}>
      <Box sx={{ ...placeStyles.container }}>
        <Box
          sx={{
            ...placeStyles.imageWrapper,
            transform:
              LocationID === "location-1"
                ? "rotate(90deg)"
                : LocationID === "location-2"
                ? ""
                : "rotate(270deg)",
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
            src={process.env.REACT_APP_CLOUDFRONT_ENDPOINT + images.icon}
            alt={title}
          />
        </Box>
      </Box>
      <Typography variant="h3" sx={{ ...placeStyles.heading }}>
        {title}
      </Typography>
      <DesignButton
        link={`/locations${slug}`}
        text="see location"
        islight={false}
      />
    </Stack>
  );
};

export default Place;
