import { ReactNode } from "react";
import Container from "@mui/material/Container";
import Navbar from "../molecules/Navbar/Navbar";
import Footer from "./Footer/Footer";

const layoutContainer = {
  maxWidth: "desktop",
  padding: 0,
  margin: {
    mobile: 0,
    tablet: "auto",
  },
};

type LayoutProp = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProp) => {
  return (
    <Container sx={{ ...layoutContainer }}>
      <Navbar />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
