import { ReactNode } from "react";
import { Navbar } from "../molecules/Navbar";
import Footer from "./Footer";

type Children = {
  children: ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
