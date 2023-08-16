import Box from "@mui/material/Box";

const Arrow = ({ hexColor }: { hexColor: string }) => {
  return (
    <Box
      sx={{
        display: "inline-block",
        padding: "0.125rem",
        border: `solid ${hexColor}`,
        borderWidth: "0 2px 2px 0",
        transform: "rotate(-45deg)",
        WebkitTransfrom: "rotate(-45deg)",
      }}
    />
  );
};

export default Arrow;
