import { ReactNode } from "react";
import { Navbar } from "../molecules/Navbar";
import Footer from "./Footer";
import Box from "@mui/material/Box";

type Children = {
  children: ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <Box>
      <Navbar />
      {children}
      <Footer />
    </Box>
  );
};

export default Layout;
