import { ReactNode } from "react";
import { Navbar } from "../molecules/Navbar";

type Children = {
  children: ReactNode;
};

const Layout = ({ children }: Children) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
