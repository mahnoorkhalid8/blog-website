"use client";

import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //menu close/open
  };

  const closeMenu = () => {
    setIsMenuOpen(false); //menu close
  };

  return (
    <div className="container p-6 ">
      <div className="flex justify-between items-center font-semibold text-2xl px-16">
      
          <img src="logo.png" alt="logo" className="w-20 h-20 rounded-full " />
      
        <ul className="gap-8 md:gap-12 hidden md:flex text-white ">
          <a
            href="/"
            onClick={closeMenu}
            className="hover:text-gray-400 hover:cursor-pointer"
          >
            <li>Home</li>
          </a>
          <a
            href="#blog"
            onClick={closeMenu}
            className="hover:text-gray-400 hover:cursor-pointer"
          >
            <li>Blog</li>
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-gray-400 hover:cursor-pointer"
          >
            <li>Contact</li>
          </a>
        </ul>

        <div className="md:hidden text-gray-300" onClick={toggleMenu}>
          {isMenuOpen ? <RxCross1 size={30} /> : <TfiMenuAlt size={30} />}
        </div>
      </div>

      {isMenuOpen && (
        <ul className="gap-4 md:hidden flex flex-col mt-4 text-white w-full text-center">
          <a
            href="/"
            onClick={closeMenu}
            className="hover:text-gray-400 hover:cursor-pointer"
          >
            <li>Home</li>
          </a>
          <a
            href="#blog"
            onClick={closeMenu}
            className="hover:text-gray-400 hover:cursor-pointer"
          >
            <li>Blog</li>
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="hover:text-gray-400 hover:cursor-pointer"
          >
            <li>Contact</li>
          </a>
        </ul>
      )}
    </div>
  );
};

export default Navbar;