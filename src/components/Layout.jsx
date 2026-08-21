import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import SmoothScroll from "./SmoothScroll";
const Layout = () => {
  return (
    <div className="bg-primary-bg font-open-sans">
      <SmoothScroll />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
