import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { errorStyles } from "./ErrorHelperStyles";
import { styled } from "@mui/system";

const StyledErrorBox = styled(Box)(
  ({ errormessage }: { errormessage: string }) => ({
    width:
      errormessage === "Invalid phone number" ||
      errormessage === "Can't be empty"
        ? "11.25rem"
        : "7.5rem",
    marginLeft:
      errormessage === "Invalid phone number"
        ? "-5.5rem"
        : errormessage === "Can't be empty"
        ? "-3.5rem"
        : "-2.5rem",
    "@media (min-width: 767px)": {
      marginLeft:
        errormessage === "Invalid phone number"
          ? "-3.938rem"
          : errormessage === "Can't be empty"
          ? "-0.938rem"
          : "",
    },
    "@media (min-width: 1024px)": {
      marginLeft:
        errormessage === "Invalid phone number"
          ? "-7rem"
          : errormessage === "Can't be empty"
          ? "-4.2rem"
          : "-3rem",
    },
  })
);

type errormessage = {
  errormessage: string;
};

const ErrorHelper = ({ errormessage }: errormessage) => {
  return (
    <StyledErrorBox
      component="span"
      errormessage={errormessage}
      aria-label="when the icon is displayed, there is an input error that needs attention"
      sx={{
        ...errorStyles.wrapper,
      }}
    >
      <Typography component="div" sx={{ ...errorStyles.text }}>
        {errormessage}
      </Typography>
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
