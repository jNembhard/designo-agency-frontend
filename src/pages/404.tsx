import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../components/atoms/DesignoButton";

const NotFound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        my: "15vh",
      }}
    >
      <Typography variant="h1" fontSize="9.375rem" color="peach.main">
        404
      </Typography>
      <Box pt="3.438rem">
        <Typography variant="h2" color="black.dark">
          Page Not Found
        </Typography>
        <Typography
          variant="body1"
          color="black.dark"
          my="0.625rem"
          mb="1.7rem"
        >
          You've ventured into a land of uncharted sorrows... the black hole of
          nothingness!
        </Typography>
        <DesignButton link="/" isLight={false} text="take me home" />
      </Box>
    </Container>
  );
};

export default NotFound;
