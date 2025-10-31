import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);


  return (
    <header className="w-full shadow-sm relative z-50">
     
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="logo">
            <a href="/clientdemo/loginatsol">
              <img src={logo} alt="Logo" className="w-40 md:w-48" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8 font-medium text-gray-700">
            <li><Link to="/capabilities" className="hover:text-[var(--purple)] transition">Capabilities</Link></li>
            <li><Link to="/services" className="hover:text-[var(--purple)] transition">Services</Link></li>
            <li><Link to="/about" className="hover:text-[var(--purple)] transition">About</Link></li>
            <li><Link to="/blogs" className="hover:text-[var(--purple)] transition">Blog</Link></li>
            <li><Link to="/contact-us" className="hover:text-[var(--purple)] transition">Contact Us</Link></li>
            <li><Link to="/join-us" className="hover:text-[var(--purple)] transition">Join Us</Link></li>
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
              <li><Link to="/capabilities" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Capabilities</Link></li>
              <li><Link to="/services" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Services</Link></li>
              <li><Link to="/about" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>About</Link></li>
              <li><Link to="/blogs" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Blog</Link></li>
              <li><Link to="/contact-us" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
              <li><Link to="/join-us" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Join Us</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
