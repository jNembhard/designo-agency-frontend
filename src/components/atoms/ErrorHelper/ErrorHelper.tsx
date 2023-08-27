import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { errorStyles } from "./ErrorHelperStyles";

type ErrorMessage = {
  errorMessage: string;
};

const ErrorHelper = ({ errorMessage }: ErrorMessage) => {
  return (
    <Box
      aria-label={errorMessage === null ? "" : errorMessage}
      sx={{
        ...errorStyles.wrapper,
        width: {
          mobile:
            errorMessage === "Invalid phone number" ||
            errorMessage === "Can't be empty"
              ? "11.25rem"
              : "7.5rem",
        },
        ml: {
          mobile:
            errorMessage === "Invalid phone number"
              ? "-5.5rem"
              : errorMessage === "Can't be empty"
              ? "-3.5rem"
              : "-2.5rem",
          tablet:
            errorMessage === "Invalid phone number"
              ? "-3.938rem"
              : errorMessage === "Can't be empty"
              ? "-0.938rem"
              : "",
          laptop:
            errorMessage === "Invalid phone number"
              ? "-7rem"
              : errorMessage === "Can't be empty"
              ? "-4.2rem"
              : "-3rem",
        },
      }}
    >
      <Typography sx={{ ...errorStyles.text }}>{errorMessage}</Typography>
      <img
        src={
          process.env.REACT_APP_CLOUDFRONT_ENDPOINT +
          "assets/contact/desktop/icon-error.svg"
        }
        alt="error-icon"
      />
    </Box>
  );
};

export default ErrorHelper;
