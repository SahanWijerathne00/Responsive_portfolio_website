import React, { useEffect, useState } from "react";
import "../index.css";
import Logo from "../images/logo.webp"; // Correct import syntax for an image file

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fade-in animation on page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300); // Delay to trigger animation
    return () => clearTimeout(timer);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 shadow-xl transition-all duration-500 ease-in-out hover:shadow-2xl w-full fixed top-0 left-0 z-50`}
    >
      <nav className="max-w-screen-full mx-auto flex justify-between items-center px-8">
        {/* Logo or Title */}
        <img
          src={Logo} // Now Logo is correctly imported as a default export
          alt="Portfolio Logo"
          className="w-32 h-auto hover:scale-110 transition-all duration-300"
        />

        {/* Hamburger Menu for Small Devices */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-12 text-lg font-medium">
          <li>
            <a
              href="#home"
              className="text-white no-underline hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:text-blue-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-white no-underline hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:text-blue-300"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-white no-underline hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:text-blue-300"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-white no-underline hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:text-blue-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu (Hamburger) */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-gradient-to-r from-blue-500 to-indigo-600 py-6 shadow-lg">
            <ul className="text-lg font-medium text-white flex flex-col items-center">
              <li>
                <a
                  href="#home"
                  className="text-white no-underline hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:text-blue-300 py-2"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-white no-underline hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:text-blue-300 py-2"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-white no-underline hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:text-blue-300 py-2"
                  onClick={toggleMenu}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-white no-underline hover:text-yellow-400 transition-all duration-300 transform hover:scale-110 hover:text-blue-300 py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
