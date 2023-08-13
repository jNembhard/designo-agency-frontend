import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../atoms/DesignoButton";

const NotFoundTemplate = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <Typography variant="h1" fontSize="9.375rem" color="peach.main">
        404
      </Typography>
      <Box pt="3.438rem">
        <Typography variant="h2" color="black.dark">
          {title}
        </Typography>
        <Typography
          variant="body1"
          color="black.dark"
          my="0.625rem"
          mb="1.7rem"
        >
          {description}
        </Typography>
        <DesignButton link="/" islight={false} text="take me home" />
      </Box>
    </div>
  );
};

export default NotFoundTemplate;
