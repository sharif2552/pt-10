import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import logo from "../../Assets/img/logo.svg";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav
      className={`flex justify-between dark:bg-custom-main-dark items-center p-4 shadow fixed top-0 left-0 right-0 z-50`}
      style={{
       
        backdropFilter: "blur(10px)", // Blur effect
        WebkitBackdropFilter: "blur(10px)", // For Safari
      }}
    >
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 dark:bg-none rounded-lg p-2">
        <img
          src={logo}
          alt="Logo"
          style={{ maxWidth: "160px", height: "auto" }}
        />
      </div>
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


