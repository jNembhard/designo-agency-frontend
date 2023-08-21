import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../../atoms/DesignoButton";
import { notFoundStyles } from "./NotFoundStyles";

type NotFoundProp = {
  title: string;
  description: string;
};

const NotFoundTemplate = ({ title, description }: NotFoundProp) => {
  return (
    <div>
      <Typography variant="h1" sx={{ ...notFoundStyles.heading }}>
        404
      </Typography>
      <Box sx={{ ...notFoundStyles.container }}>
        <Typography variant="h2" sx={{ ...notFoundStyles.title }}>
          {title}
        </Typography>
        <Typography variant="body1" sx={{ ...notFoundStyles.description }}>
          {description}
        </Typography>
        <DesignButton link="/" islight={false} text="take me home" />
      </Box>
    </div>
  );
};

export default NotFoundTemplate;
