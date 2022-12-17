import React, { FC, lazy, ReactElement } from "react";
import { AppProvider } from "../context";
import Navbar from "./navbar";

interface ILayoutProps {
  children: ReactElement;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <AppProvider>
      <Navbar />
      <main className="min-h-screen bg-main-dark text-white">
        <div className="max-w-[1200px] mx-auto px-2">{children}</div>
      </main>
    </AppProvider>
  );
};

export default Layout;
