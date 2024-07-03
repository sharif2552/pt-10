import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import logo from "../../Assets/img/logo.svg";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white dark:bg-custom-main-dark shadow fixed top-0 left-0 right-0 z-50">
      <div className="text-2xl font-bold">
        <img className=" " src={logo} alt="not found" />
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
