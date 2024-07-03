import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import logo from "../../Assets/img/logo.svg";
import "./Navbar.css"; 

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`flex justify-between dark:bg-custom-main-dark items-center p-4 shadow fixed top-0 left-0 right-0 z-50`}
      style={{
        backdropFilter: "blur(10px)", // Blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari
      }}
    >
      <div className="flex items-center w-full sm:w-auto">
        {/* Hamburger menu for smaller screens */}
        <button
          className="block md:hidden ml-5 text-gray-800 dark:text-gray-400 focus:outline-none"
          onClick={toggleMenu}
        >
          <div className={`hamburger ${isOpen ? "open" : ""}`}>
            <div className="line top"></div>
            <div className="line middle"></div>
            <div className="line bottom"></div>
          </div>
        </button>

        {/* Logo centered in the middle for smaller screens */}
        <div className="mx-auto sm:mx-0">
          <img
            src={logo}
            alt="Logo"
            className="sm:hidden"
            style={{ maxWidth: "160px", height: "auto" }}
          />
        </div>
      </div>

      {/* Logo for larger screens */}
      <div className="hidden justify-start sm:flex">
        <img
        className=" justify-start left-0"
          src={logo}
          alt="Logo"
          style={{ maxWidth: "160px", height: "auto" }}
        />
      </div>

      {/* Menu items for larger screens */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex sm:space-x-8 space-y-4 sm:space-y-0 absolute sm:relative top-16 sm:top-0 left-0 sm:left-auto w-full sm:w-auto bg-white sm:bg-transparent dark:bg-custom-main-dark sm:dark:bg-transparent p-4 sm:p-0 shadow sm:shadow-none transition-all duration-300 ease-in-out`}
      >
        <a
          href="#hero"
          className="block font-semibold text-4xl md:text-xl  sm:inline hover:font-bold"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="#myusd"
          className="block font-semibold text-4xl md:text-xl sm:inline hover:font-bold"
          onClick={toggleMenu}
        >
          MyUSD
        </a>
        <a
          href="#social-proof"
          className="block font-semibold text-4xl md:text-xl sm:inline hover:font-bold"
          onClick={toggleMenu}
        >
          Social Proof
        </a>
        <a
          href="#partners"
          className="block font-semibold text-4xl md:text-xl sm:inline hover:font-bold"
          onClick={toggleMenu}
        >
          Partners
        </a>
        <a
          href="#roadmap"
          className="block font-semibold text-4xl md:text-xl sm:inline hover:font-bold"
          onClick={toggleMenu}
        >
          Roadmap
        </a>
        <a
          href="#team"
          className="block font-semibold text-4xl md:text-xl sm:inline hover:font-bold"
          onClick={toggleMenu}
        >
          Team
        </a>
      </div>

      {/* Dark mode toggle button */}
      <button
        onClick={toggleDarkMode}
        className={`p-2 rounded-full bg-blue-600 text-white dark:bg-gray-600 flex items-center justify-center hover:bg-blue-700 dark:hover:bg-gray-700 transition-colors duration-300`}
        style={{
          width: "40px",
          height: "40px",
        }}
      >
        <FontAwesomeIcon icon={darkMode ? faSun : faMoon} className="text-lg" />
      </button>
    </nav>
  );
};

export default Navbar;
