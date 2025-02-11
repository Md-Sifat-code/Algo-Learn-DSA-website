import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Home/Navbar";
import Footer from "../Components/Home/Footer";

const Main_Layout: React.FC = () => {
  return (
    <section>
      <div>
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </section>
  );
};

export default Main_Layout;
