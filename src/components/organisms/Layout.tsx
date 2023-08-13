import { ReactNode } from "react";
import Container from "@mui/material/Container";
import { Navbar } from "../molecules/Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container maxWidth="lg" sx={{ margin: { xs: 0, sm: "auto" }, padding: 0 }}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
