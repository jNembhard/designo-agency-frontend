import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../atoms/DesignoButton";

type NotFoundProp = {
  title: string;
  description: string;
};

const notFoundHeading = {
  color: "peach.main",
  fontSize: {
    mobile: "4rem",
    tablet: "6rem",
  },
};

const notFoundContainer = {
  pt: "3.438rem",
};

const notFoundTitle = {
  color: "black.dark",
};

const notFoundDescription = {
  color: "black.dark",
  my: "0.625rem",
  mb: "1.7rem",
  margin: "0.625rem auto 1.7rem",
  maxWidth: "50ch",
};

const notFound = {
  heading: notFoundHeading,
  container: notFoundContainer,
  title: notFoundTitle,
  description: notFoundDescription,
};

const NotFoundTemplate = ({ title, description }: NotFoundProp) => {
  return (
    <div>
      <Typography variant="h1" color="peach.main" sx={{ ...notFound.heading }}>
        404
      </Typography>
      <Box sx={{ ...notFound.container }}>
        <Typography variant="h2" sx={{ ...notFound.title }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ ...notFound.description }}>
          {description}
        </Typography>
        <DesignButton link="/" islight={false} text="take me home" />
      </Box>
    </div>
  );
};

export default NotFoundTemplate;
