import styled from "@mui/material/styles/styled";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const DesignoButton = styled(Button)(({ isLight }: { isLight: boolean }) => ({
  boxShadow: "none",
  width: "9.5rem",
  height: "3.5rem",
  backgroundColor: isLight ? "#ffffff" : "#e7816b",
  color: isLight ? "#333136" : "#ffffff",
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
  isLight,
  text,
}: {
  link: string;
  isLight: boolean;
  text: string;
}) => {
  return (
    <Link href={link}>
      <DesignoButton isLight={isLight}>{text}</DesignoButton>
    </Link>
  );
};

export default DesignButton;
