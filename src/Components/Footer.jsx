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
    <div className="bg-dark lg:flex lg:flex-row flex flex-col gap-3 lg:gap-[40rem] items-center text-white px-3 lg:py-3 py-2 footer">
      <div className="text-white">
        Copyright &copy; 2024 ||
        <span className="text-gold textfooter"> designed by realtecheo</span>
      </div>
      <div className="">
        <SocioIcons></SocioIcons>
      </div>
    </div>
  );
};

export default Footer;
