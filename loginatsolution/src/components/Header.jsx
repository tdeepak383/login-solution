import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <header className="w-full shadow-sm bg-white relative z-40">
     
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" className="w-40 md:w-48" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 font-medium text-gray-700">
            <li><NavLink to="/jobfunction" className={({ isActive }) =>
          isActive ? "text-[var(--purple)]" : "hover:text-[var(--purple)] transition" }>Job Functions</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) =>
          isActive ? "text-[var(--purple)]" : "hover:text-[var(--purple)] transition" }>Services</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) =>
          isActive ? "text-[var(--purple)]" : "hover:text-[var(--purple)] transition" }>About Us</NavLink></li>
            <li><NavLink to="/blogs" className={({ isActive }) =>
          isActive ? "text-[var(--purple)]" : "hover:text-[var(--purple)] transition" }>Blog</NavLink></li>
            <li><NavLink to="/contact-us" className={({ isActive }) =>
          isActive ? "text-[var(--purple)]" : "hover:text-[var(--purple)] transition" }>Contact Us</NavLink></li>
            <li><NavLink to="/join-us" className={({ isActive }) =>
          isActive ? "text-[var(--purple)]" : "hover:text-[var(--purple)] transition" }>Join Us</NavLink></li>
          </ul>

          {/* Right Icons */}
          <div className="lg:hidden flex items-center gap-4">
            {/* <IoSearch className="text-2xl text-gray-700 cursor-pointer hover:text-[var(--purple)] transition" /> */}

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className=" text-3xl text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg rounded-b-lg">
            <ul className="flex flex-col py-4 space-y-2 text-center font-medium text-gray-700">
              <li><NavLink to="/jobfunction" className={({ isActive }) =>
          isActive ? "block text-[var(--purple)]" : "hover:text-[var(--purple)] transition" } onClick={() => setMenuOpen(false)}>Job Functions</NavLink></li>
              <li><NavLink to="/services" className={({ isActive }) =>
          isActive ? "block text-[var(--purple)]" : "hover:text-[var(--purple)] transition" } onClick={() => setMenuOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/about" className={({ isActive }) =>
          isActive ? "block text-[var(--purple)]" : "hover:text-[var(--purple)] transition" } onClick={() => setMenuOpen(false)}>About Us</NavLink></li>
              <li><NavLink to="/blogs" className={({ isActive }) =>
          isActive ? "block text-[var(--purple)]" : "hover:text-[var(--purple)] transition" } onClick={() => setMenuOpen(false)}>Blog</NavLink></li>
              <li><NavLink to="/contact-us" className={({ isActive }) =>
          isActive ? "block text-[var(--purple)]" : "hover:text-[var(--purple)] transition" } onClick={() => setMenuOpen(false)}>Contact Us</NavLink></li>
              <li><NavLink to="/join-us" className={({ isActive }) =>
          isActive ? "block text-[var(--purple)]" : "hover:text-[var(--purple)] transition" } onClick={() => setMenuOpen(false)}>Join Us</NavLink></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
