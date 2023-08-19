import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DesignButton } from "../atoms/DesignoButton";

type NotFoundProp = {
  title: string;
  description: string;
};

const NotFoundTemplate = ({ title, description }: NotFoundProp) => {
  return (
    <div>
      <Typography
        variant="h1"
        color="peach.main"
        sx={{ fontSize: { mobile: "4rem", tablet: "6rem" } }}
      >
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
          margin="0.625rem auto 1.7rem"
          maxWidth="50ch"
        >
          {description}
        </Typography>
        <DesignButton link="/" islight={false} text="take me home" />
      </Box>
    </div>
  );
};

export default NotFoundTemplate;
