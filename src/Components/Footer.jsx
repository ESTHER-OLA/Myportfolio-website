import React from "react";
import { useLocation } from "react-router-dom";
import SocioIcons from "./Pages/SocioIcons";

const Footer = () => {
  const location = useLocation();

  // Check if the current route is the home route
  const isHome = location.pathname === "/";

  // Render the footer only if it's not the home route
  if (isHome) {
    return null;
  }
  return (
    <div className="relative z-10 bg-dark bottom-0 w-full lg:flex lg:flex-row flex flex-col gap-4 lg:gap-6 lg:justify-between items-center text-white px-6 lg:py-8 py-2 ">
      <div className="text-white">
        Copyright &copy; 2024 ||
        <span className="text-yellow"> designed by realtecheo</span>
      </div>
      <div className="">
        <SocioIcons></SocioIcons>
      </div>
    </div>
  );
};

export default Footer;