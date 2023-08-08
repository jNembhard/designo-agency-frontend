import DesignButton from "../atoms/DesignoButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const WhiteTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:before": {
    borderColor: "white",
  },
  "& .MuiInput-underline:hover:before": {
    borderColor: "black",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const inputStyles = {
  color: "white",
  fontWeight: "medium",
  textIndent: "0.875rem",
};

const Form = () => {
  return (
    <Box textAlign="center">
      <Stack component="form" mb={{ mobile: "48px" }}>
        <WhiteTextField
          id="standard-basic"
          placeholder="Name"
          variant="standard"
          inputProps={{
            style: inputStyles,
          }}
          sx={{
            height: "3.875rem",
          }}
        />
        <WhiteTextField
          id="standard-basic"
          placeholder="Email Address"
          variant="standard"
          inputProps={{
            style: inputStyles,
          }}
          sx={{
            height: "3.875rem",
          }}
        />
        <WhiteTextField
          id="standard-basic"
          placeholder="Phone"
          variant="standard"
          inputProps={{
            style: inputStyles,
            inputMode: "numeric",
            pattern: "[0-9]*",
          }}
          sx={{
            height: "3.875rem",
            color: "white.main",
          }}
        />
        <WhiteTextField
          id="standard-basic"
          placeholder="Text Field"
          variant="standard"
          multiline
          rows={4}
          inputProps={{
            style: inputStyles,
          }}
        />
      </Stack>
      <DesignButton link="/" isLight={true} text="submit" />{" "}
    </Box>
  );
};

export default Form;
