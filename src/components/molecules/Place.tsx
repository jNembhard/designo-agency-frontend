import { IPlace } from "../../interface/Place";
import { DesignButton } from "../atoms/DesignoButton";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Place = ({ LocationID, images, title, slug }: IPlace) => {
  return (
    <Stack
      textAlign="center"
      my="1.5rem"
      alignItems="center"
      justifyContent="center"
      sx={{
        my: { mobile: "1.5rem", laptop: "0" },
        width: { laptop: "21.875rem" },
      }}
    >
      <Box
        borderRadius="100%"
        maxWidth="12.625rem"
        maxHeight="12.625rem"
        sx={{ margin: { mobile: "0 auto 3rem" } }}
      >
        <Box
          position="absolute"
          zIndex="-1"
          sx={{
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
      <Typography variant="h3" textTransform="uppercase" mb="2rem">
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
