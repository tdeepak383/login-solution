import React from "react";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaLinkedinIn,  
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full z-50 relative flex flex-col items-center bg-black justify-center text-center px-5 py-10">
      <div className="max-w-6xl w-full bg-white rounded-3xl shadow-sm border border-gray-200 p-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Left - Logo and description */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              {/* <div className="bg-black text-white font-bold px-2 py-1 rounded-md text-xl">
                Login
              </div>
              <h2 className="  font-semibold text-gray-900">@Solution</h2> */}
              <img src={logo} alt="logo" className="w-28"/>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-md text-left">
             We're a diverse team of visionary developers and creative designers, driven by curiosity and a shared passion for problem-solving and collaboration.
            </p>
            <div className="flex space-x-5 text-[var(--pink)] text-xl">
              <FaFacebookF className="hover:text-black cursor-pointer" />
              <FaInstagram className="hover:text-black cursor-pointer" />
              <FaLinkedinIn className="hover:text-black cursor-pointer" />
              <FaYoutube className="hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3 text-gray-500  ">
              <li className="hover:text-black cursor-pointer">Features</li>
              <li className="hover:text-black cursor-pointer">Pricing</li>
              <li className="hover:text-black cursor-pointer">Integrations</li>
              <li className="hover:text-black cursor-pointer">Changelog</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-500  ">
              <li className="hover:text-black cursor-pointer">Documentation</li>
              <li className="hover:text-black cursor-pointer">Tutorials</li>
              <li className="hover:text-black cursor-pointer">Blog</li>
              <li className="hover:text-black cursor-pointer">Support</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-gray-500  ">
              <li className="hover:text-black cursor-pointer">About</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Contact</li>
              <li className="hover:text-black cursor-pointer">Partners</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400  ">
          <p>© 2025 LoginatSolution. All rights reserved.</p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
