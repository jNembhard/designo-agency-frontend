import { ReactNode } from "react";
import { Navbar } from "../molecules/Navbar";
import Footer from "./Footer";

type Children = {
  children: ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
