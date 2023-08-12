import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const DesignoButton = styled(Button)(({ islight }: { islight: boolean }) => ({
  boxShadow: "none",
  width: "9.5rem",
  height: "3.5rem",
  backgroundColor: islight ? "#ffffff" : "#e7816b",
  color: islight ? "#333136" : "#ffffff",
  borderRadius: "0.5rem",
  letterSpacing: "0.063rem",
  fontSize: "0.938rem",
  fontWeight: "medium",
  "&:hover": {
    backgroundColor: "#ffad9b",
    color: "#ffffff",
  },
}));

const DesignButton = ({
  link,
  islight,
  text,
}: {
  link: string;
  islight: boolean;
  text: string;
}) => {
  return (
    <div>
      <Link href={link}>
        <DesignoButton islight={islight}>{text}</DesignoButton>
      </Link>
    </div>
  );
};

const FormButton = ({ islight, text }: { islight: boolean; text: string }) => {
  return (
    <>
      <DesignoButton islight={islight} type="submit">
        {text}
      </DesignoButton>
    </>
  );
};

export { DesignButton, FormButton };
