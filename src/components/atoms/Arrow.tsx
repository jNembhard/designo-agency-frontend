import Box from "@mui/material/Box";
import styled from "@mui/material/styles/styled";

const StyledArrow = styled(Box)(({ hexcolor }: { hexcolor: string }) => ({
  display: "inline-block",
  padding: "0.125rem",
  border: `solid ${hexcolor}`,
  borderWidth: "0 0.125rem 0.125rem 0",
  transform: "rotate(-45deg)",
  WebkitTransfrom: "rotate(-45deg)",
}));

type HexColor = {
  hexColor: string;
};

const Arrow = ({ hexColor }: HexColor) => {
  return <StyledArrow hexcolor={hexColor} />;
};

export default Arrow;
