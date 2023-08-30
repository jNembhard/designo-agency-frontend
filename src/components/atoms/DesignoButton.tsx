import { styled } from "@mui/system";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const DesignoButton = styled(Button)(({ islight }: { islight: string }) => ({
  boxShadow: "none",
  width: "9.5rem",
  height: "3.5rem",
  backgroundColor: islight === "true" ? "#ffffff" : "#e7816b",
  color: islight === "true" ? "#333136" : "#ffffff",
  borderRadius: "0.5rem",
  letterSpacing: "0.063rem",
  fontSize: "0.938rem",
  fontWeight: "medium",
  textDecoration: "none",
  "&:hover": {
    color: "#ffffff",
    backgroundColor: "#ffad9b",
    transition: "color 0.2s ease-in-out, background-color 0.2s ease-in-out",
  },
}));

type DesignoButtonProp = {
  link: string;
  islight: string;
  text: string;
};

type FormButtonProp = {
  islight: string;
  text: string;
};

const DesignButton = ({ link, islight, text }: DesignoButtonProp) => {
  return (
    <Link role="link" href={link}>
      <DesignoButton role="button" islight={islight}>
        {text}
      </DesignoButton>
    </Link>
  );
};

const FormButton = ({ islight, text }: FormButtonProp) => {
  return (
    <>
      <DesignoButton role="button" islight={islight} type="submit">
        {text}
      </DesignoButton>
    </>
  );
};

const CloseButton = ({ islight, text }: FormButtonProp) => {
  return (
    <>
      <DesignoButton role="button" islight={islight}>
        {text}
      </DesignoButton>
    </>
  );
};

export { CloseButton, DesignButton, FormButton };
