import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { styled } from "@mui/system";
import { IFormState } from "../../../interface/Form";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import ErrorHelper from "../../atoms/ErrorHelper/ErrorHelper";
import { FormButton } from "../../atoms/DesignoButton";
import { formStyles, inputStyles } from "./FormStyles";
import FormModal from "../../molecules/FormModal/FormModal";

const WhiteTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#ffffff",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:hover:before": {
    borderBottomColor: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiFormHelperText-root": {
    color: "white",
    marginLeft: "80% !important",
    marginTop: "-30px !important",
    fontStyle: "italic",
    width: "fit-content",
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

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<IFormState>({ mode: "onBlur" });

  const [open, setOpen] = useState(false);

  const handleTextFieldError = (text: string) => {
    return <ErrorHelper errormessage={text} />;
  };

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    setOpen(true);
    console.log(data);
  };

  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ name: "", emailAddress: "", phoneNumber: "", message: "" });
    }
  });

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      sx={{ ...formStyles.form }}
    >
      <Stack sx={{ ...formStyles.container }}>
        <WhiteTextField
          id="name"
          placeholder="Name"
          variant="standard"
          inputProps={{
            style: inputStyles,
          }}
          sx={{
            ...formStyles.textField,
          }}
          error={errors.name ? true : false}
          helperText={errors.name ? handleTextFieldError("Invalid name") : ""}
          {...register("name", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[^<>%$#^*]*$/,
              message: "Wrong format",
            },
          })}
          aria-invalid={errors.name ? "true" : "false"}
        />

        <WhiteTextField
          id="email"
          placeholder="Email Address"
          variant="standard"
          inputProps={{
            style: inputStyles,
          }}
          sx={{
            ...formStyles.textField,
          }}
          error={errors.emailAddress ? true : false}
          helperText={
            errors.emailAddress ? handleTextFieldError("Invalid email") : ""
          }
          {...register("emailAddress", {
            required: "Field cannot be empty",
            pattern: {
              value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/,
              message: "Wrong format",
            },
          })}
          aria-invalid={errors.emailAddress ? "true" : "false"}
        />
        <WhiteTextField
          id="phone"
          placeholder="Phone"
          variant="standard"
          inputProps={{
            style: inputStyles,
          }}
          sx={{
            ...formStyles.textField,
          }}
          error={errors.phoneNumber ? true : false}
          helperText={
            errors.phoneNumber
              ? handleTextFieldError("Invalid phone number")
              : ""
          }
          {...register("phoneNumber", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: "Wrong format",
            },
          })}
          aria-invalid={errors.phoneNumber ? "true" : "false"}
        />
        <WhiteTextField
          id="message"
          placeholder="Your Message"
          variant="standard"
          multiline
          rows={4}
          inputProps={{
            style: inputStyles,
            color: "white.main",
          }}
          error={errors.message ? true : false}
          helperText={
            errors.message ? handleTextFieldError("Can't be empty") : ""
          }
          {...register("message", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[^<>%$#^*]*$/,
              message: "Wrong format",
            },
          })}
          aria-invalid={errors.message ? "true" : "false"}
        />
      </Stack>
      <Box sx={{ ...formStyles.buttonWrapper }}>
        <FormButton islight="true" text="submit" />
      </Box>
      <FormModal openModal={open} closeModal={handleClose} />
    </Box>
  );
};

export default Form;
