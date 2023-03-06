import React, { ReactNode } from "react";
import Header from "../Header/Header-container/Header.component";

type LayoutPropsType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropsType): JSX.Element => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
