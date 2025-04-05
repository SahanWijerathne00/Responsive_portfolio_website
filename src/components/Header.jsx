import React from "react";
import "../index.css";

const Header = () => {
  return (
    <header className="text-white py-5">
      <nav className="max-w-screen-lg mx-auto flex justify-between items-center px-4">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
