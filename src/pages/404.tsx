import Container from "@mui/material/Container";
import NotFoundTemplate from "../components/templates/NotFoundTemplate";
import { SEO } from "../components/atoms/SEO";

const NotFound = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        my: "15vh",
      }}
    >
      <SEO
        author="Jason Nembhard"
        title="404 Page Not Found"
        description="Return to Designo's homepage by clicking the Take Me Home button"
        type="webapp"
      />
      <NotFoundTemplate
        title="Page Not Found"
        description="You've ventured into a land of uncharted sorrows...the black hole of NOTHINGNESS!"
      />
    </Container>
  );
};

export default NotFound;
