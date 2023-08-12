import { ReactNode } from "react";
import Box from "@mui/material/Box";
import { Navbar } from "../molecules/Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
