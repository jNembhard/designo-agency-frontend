import Typography from "@mui/material/Typography";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <div>
      <Typography variant="h1">404: Page Not Found</Typography>
      <Typography>
        You've ventured into a land of uncharted sorrows... the black hole of
        nothingness!
      </Typography>
    </div>
  );
};

export default NotFound;
