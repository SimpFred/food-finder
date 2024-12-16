import { JSX, ReactNode } from "react";
import Header from "../header";

interface PropsInterface {
  children: ReactNode;
}

const Layout = ({ children }: PropsInterface): JSX.Element => {
  return (
    <>
      <Header />
      <main className="layout-grid">{children}</main>
    </>
  );
};

export default Layout;
