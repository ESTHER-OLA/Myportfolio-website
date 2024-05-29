// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-icon-nav.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const handleNavLinkClick = (index) => {
    setActiveLink(index);
    closeNavbar();
  };
  return (
    <>
      <nav className="fixed z-50 h-[6vh] top-0 left-0 right-0 flex flex-rows p-2 justify-between items-center bg-black font-eb-garamond md:border-b-0 border-transparent border-b-white">
        <div className="">
          <img src={logo} alt="logo-img" className="h-[30px] w-[50px]" />
        </div>
        <div className="flex-row items-center justify-center gap-12 text-white hidden md:flex ">
          <Link
            to="/"
            className={`nav-link ${
              activeLink === 0 ? "text-yellow" : "text-white"
            } hover:text-yellow border-b-2 border-transparent hover:border-white`}
            onClick={() => handleNavLinkClick(0)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              activeLink === 1 ? "text-yellow" : "text-white"
            } hover:text-yellow border-b-2 border-transparent hover:border-white`}
            onClick={() => handleNavLinkClick(1)}
          >
            About
          </Link>
          <Link
            to="/resume"
            className={`nav-link ${
              activeLink === 2 ? "text-yellow" : "text-white"
            } hover:text-yellow border-b-2 border-transparent hover:border-white`}
            onClick={() => handleNavLinkClick(2)}
          >
            Resume
          </Link>
          <Link
            to="/portfolio"
            className={`nav-link ${
              activeLink === 3 ? "text-yellow" : "text-white"
            } hover:text-yellow border-b-2 border-transparent hover:border-white`}
            onClick={() => handleNavLinkClick(3)}
          >
            Portfolio
          </Link>
          <Link
            to="/service"
            className={`nav-link ${
              activeLink === 4 ? "text-yellow" : "text-white"
            } hover:text-yellow border-b-2 border-transparent hover:border-white`}
            onClick={() => handleNavLinkClick(4)}
          >
            Service
          </Link>
        </div>
        <div className="px-4 hidden md:block">
          <Link to="/contact">
            <button className="px-3 py-0 bg-red text-white hover:bg-blue transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
              Contact
            </button>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleNavbar}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#ffb703"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M22 8H2 M22 2H2 M22 14H2"
                  stroke="#ffb703"
                  strokeWidth="2.5"
                />
              )}
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="fixed top-[53px] h-[35vh] w-[38vw] flex flex-col bg-black gap-2 justify-start py-4 px-3 transition-transform transform ease-in-out duration-300 sidebar">
            <Link
              to="/"
              className={`nav-link ${
                activeLink === 0 ? "text-yellow" : "text-white"
              } cursor-pointer px-4 py-2`}
              onClick={() => handleNavLinkClick(0)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                activeLink === 1 ? "text-yellow" : "text-white"
              } cursor-pointer px-4 py-2`}
              onClick={() => handleNavLinkClick(1)}
            >
              About
            </Link>
            <Link
              to="/resume"
              className={`nav-link ${
                activeLink === 2 ? "text-yellow" : "text-white"
              } cursor-pointer px-4 py-2`}
              onClick={() => handleNavLinkClick(2)}
            >
              Resume
            </Link>
            <Link
              to="/portfolio"
              className={`nav-link ${
                activeLink === 3 ? "text-yellow" : "text-white"
              } cursor-pointer px-4 py-2`}
              onClick={() => handleNavLinkClick(3)}
            >
              Portfolio
            </Link>
            <Link
              to="/service"
              className={`nav-link ${
                activeLink === 4 ? "text-yellow" : "text-white"
              } cursor-pointer px-4 py-2`}
              onClick={() => handleNavLinkClick(4)}
            >
              Service
            </Link>

            <Link to="/contact">
              <button
                className="px-3 py-2 bg-red text-white hover:bg-blue transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
                onClick={closeNavbar}
              >
                Contact
              </button>
            </Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
