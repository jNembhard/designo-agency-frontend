import { FormEvent, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormButton } from "../atoms/DesignoButton";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

type InputProps = {
  name: string;
  emailAddress: string;
  phoneNumber: string;
  message: string;
};

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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputProps>({ mode: "onBlur" });

  const [isDisabled, setIsDisabled] = useState<Boolean>(false);

  // const onSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   if (isDisabled) return;
  // };

  const onSubmit: SubmitHandler<InputProps> = (data) => console.log(data);
  return (
    <Box
      component="form"
      textAlign="center"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <Stack mb={{ mobile: "3rem" }}>
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
          error={errors.name ? true : false}
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
          id="standard-basic"
          placeholder="Email Address"
          variant="standard"
          inputProps={{
            style: inputStyles,
          }}
          sx={{
            height: "3.875rem",
          }}
          error={errors.emailAddress ? true : false}
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
          id="standard-basic"
          placeholder="Phone"
          variant="standard"
          inputProps={{
            style: inputStyles,
          }}
          sx={{
            height: "3.875rem",
            color: "white.main",
          }}
          error={errors.phoneNumber ? true : false}
          {...register("phoneNumber", {
            required: "Field cannot be empty",
            pattern: {
              value: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
              message: "Wrong format",
            },
          })}
          type="phone"
          aria-invalid={errors.phoneNumber ? "true" : "false"}
        />
        <WhiteTextField
          id="standard-basic"
          placeholder="Your Message"
          variant="standard"
          multiline
          rows={4}
          inputProps={{
            style: inputStyles,
          }}
          error={errors.message ? true : false}
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
      <FormButton islight={true} text="submit" />
    </Box>
  );
};

export default Form;
