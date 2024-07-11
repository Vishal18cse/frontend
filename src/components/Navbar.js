import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Icons.js";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-gray-800 text-gray-100 body-font">
      <div className="container mx-auto flex flex-wrap p-3 flex-row items-center justify-between">
        <div className="flex items-center">
          <Link className="flex title-font font-medium items-center text-white" to="/">
            <Logo />
            <span className="ml-3 text-xl">CoolCuts</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <nav
        className={`md:flex md:items-center md:ml-auto md:mr-0 w-full md:w-auto ${isOpen ? 'block' : 'hidden'}`}
        >
          <Link
            className="block md:inline-block mt-3 md:mt-0 mr-5 hover:text-violet-400 text-white text-base md:text-lg"
            to="/"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            className="block md:inline-block mt-3 md:mt-0 mr-5 hover:text-violet-400 text-white text-base md:text-lg"
            to="/Price"
            onClick={closeMenu}
          >
            Price
          </Link>
          <Link
            className="block md:inline-block mt-3 md:mt-0 mr-5 hover:text-violet-400 text-white text-base md:text-lg"
            to="/BookingForm"
            onClick={closeMenu}
          >
            Book Now
          </Link>
          <Link
            className="block md:inline-block mt-3 md:mt-0 mr-5 hover:text-violet-400 text-white text-base md:text-lg"
            to="/Contact"
            onClick={closeMenu}
          >
            Contact Us
          </Link>
          <Link
            className="block md:inline-block mt-3 md:mt-0 mr-5 hover:text-violet-400 text-white text-base md:text-lg"
            to="/About"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className="block md:inline-block mt-3 md:mt-0 mr-5 hover:text-violet-400 text-white text-base md:text-lg"
            to="/Login"
            onClick={closeMenu}
          >
            Admin Login
          </Link>
          <Link
            className="block md:inline-block mt-3 md:mt-0 mr-5 hover:text-violet-400 text-white text-base md:text-lg"
            to="/AppointmentList"
            onClick={closeMenu}
          >
            AppointmentList
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
