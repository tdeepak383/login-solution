import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoSearch } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
 

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="w-full shadow-sm relative z-50">
     
      <nav className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" className="w-40 md:w-48" />
            </a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 font-medium text-gray-700">
            <li><a href="/" className="hover:text-[var(--purple)] transition">Capabilities</a></li>
            <li><a href="/about" className="hover:text-[var(--purple)] transition">Services</a></li>
            <li><a href="/services" className="hover:text-[var(--purple)] transition">About</a></li>
            <li><a href="/blog" className="hover:text-[var(--purple)] transition">Blog</a></li>
            <li><a href="/contact" className="hover:text-[var(--purple)] transition">Contact Us</a></li>
            <li><a href="/join" className="hover:text-[var(--purple)] transition">Join Us</a></li>
          </ul>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            <IoSearch className="text-2xl text-gray-700 cursor-pointer hover:text-[var(--purple)] transition" />

            {/* Mobile Toggle */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-3xl text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-lg rounded-b-lg">
            <ul className="flex flex-col py-4 space-y-2 text-center font-medium text-gray-700">
              <li><a href="/" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Capabilities</a></li>
              <li><a href="/about" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Services</a></li>
              <li><a href="/services" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="/blog" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Blog</a></li>
              <li><a href="/contact" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Contact Us</a></li>
              <li><a href="/join" className="block hover:text-[var(--purple)] transition" onClick={() => setMenuOpen(false)}>Join Us</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
