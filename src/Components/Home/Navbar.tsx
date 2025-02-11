import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="mt-6 flex flex-row justify-between items-center px-4 sm:px-6 md:px-8">
          <div>
            <h1 className="text-purple-800 mark text-4xl sm:text-3xl md:text-4xl">
              Al<span className="hana">g</span>o
            </h1>
          </div>
          {/* navlinks */}
          <div className="flex mark text-2xl flex-row gap-8 sm:text-xl md:text-2xl lg:text-3xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-purple-800 font-bold" : "hover:text-purple-600"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/developer"
              className={({ isActive }) =>
                isActive ? "text-purple-800 font-bold" : "hover:text-purple-600"
              }
            >
              Developer Info
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
