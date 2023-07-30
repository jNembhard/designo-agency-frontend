import Box from "@mui/material/Box";
import HeroCTA from "../components/organisms/HeroCTA";

const Home = () => {
  return (
    <Box
      sx={{
        bgcolor: "peach.main",
        display: { textAlign: "center" },
      }}
    >
      <HeroCTA />
    </Box>
  );
};

export default Home;
