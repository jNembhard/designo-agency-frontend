import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { errorStyles } from "./ErrorHelperStyles";
import { styled } from "@mui/system";

const StyledErrorBox = styled(Box)(
  ({ errorMessage }: { errorMessage: string }) => ({
    width:
      errorMessage === "Invalid phone number" ||
      errorMessage === "Can't be empty"
        ? "11.25rem"
        : "7.5rem",
    marginLeft:
      errorMessage === "Invalid phone number"
        ? "-5.5rem"
        : errorMessage === "Can't be empty"
        ? "-3.5rem"
        : "-2.5rem",
    "@media (min-width: 767px)": {
      marginLeft:
        errorMessage === "Invalid phone number"
          ? "-3.938rem"
          : errorMessage === "Can't be empty"
          ? "-0.938rem"
          : "",
    },
    "@media (min-width: 1024px)": {
      marginLeft:
        errorMessage === "Invalid phone number"
          ? "-7rem"
          : errorMessage === "Can't be empty"
          ? "-4.2rem"
          : "-3rem",
    },
  })
);

type ErrorMessage = {
  errorMessage: string;
};

const ErrorHelper = ({ errorMessage }: ErrorMessage) => {
  return (
    <StyledErrorBox
      errorMessage={errorMessage}
      aria-label="when the icon is displayed, there is an input error that needs attention"
      sx={{
        ...errorStyles.wrapper,
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
    </StyledErrorBox>
  );
};

export default ErrorHelper;
