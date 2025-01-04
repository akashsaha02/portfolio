import React, { useState } from "react";
import { Link } from "react-scroll";
import {Link as LinkRouter} from "react-router-dom";
import { FaSun, FaMoon, FaBars } from "react-icons/fa"; // For light/dark mode icons and hamburger icon

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To manage the hamburger menu state

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar bg-base-100 dark:bg-base-200 z-30 flex items-center justify-between p-4 sticky top-0">
      <div className="flex-1">
        {/* Logo */}
        <LinkRouter
          to="/"
          smooth={true}
          duration={500}
          className="text-xl font-bold text-primary dark:text-dark-primary"
        >
          My Portfolio
        </LinkRouter>
      </div>

      {/* Mobile Hamburger Button */}
      <div className="lg:hidden flex-none">
        <button
          onClick={toggleMenu}
          className="btn btn-ghost"
        >
          <FaBars size={20} />
        </button>
      </div>

      {/* Navbar Links for Large Screens */}
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal p-0 space-x-6">
          <li>
            <LinkRouter
              to="/"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              Home
            </LinkRouter>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact-info"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className="btn btn-ghost">
        {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
      </button>

      {/* Mobile Menu (Hamburger) */}
      <div
        className={`lg:hidden ${isMenuOpen ? "block " : "hidden"}`}
      >
        <ul className="menu absolute z-50 right-[5%] border border-black top-16 menu-vertical p-2 space-y-2 bg-base-100 dark:bg-base-200 text-gray-700 dark:text-gray-100">
          <li>
            <LinkRouter
              to="/"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              Home
            </LinkRouter>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="contact-info"
              smooth={true}
              duration={500}
              className="hover:text-primary dark:hover:text-indigo-400"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
