import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa6";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

function Footer() {
  return (
    <footer className="w-full z-50 relative flex flex-col items-center bg-black justify-center text-center px-5 py-10">
      <motion.div
        className="max-w-6xl w-full bg-white rounded-3xl shadow-sm border border-gray-200 p-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-10"
          variants={staggerContainer}
        >
          {/* Left - Logo and description */}
          <motion.div className="md:col-span-2 space-y-6" variants={fadeUp}>
            <div className="flex items-center space-x-3">
              <img src={logo} alt="logo" className="w-32" />
            </div>
            <p className="text-gray-500 leading-relaxed max-w-md text-left">
              We're a diverse team of visionary developers and creative designers,
              driven by curiosity and a shared passion for problem-solving and
              collaboration.
            </p>
            <div className="flex space-x-5 text-black text-xl">
              <FaFacebookF className="hover:text-[var(--purple)] cursor-pointer" />
              <FaInstagram className="hover:text-[var(--purple)] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[var(--purple)] cursor-pointer" />
              <FaYoutube className="hover:text-[var(--purple)] cursor-pointer" />
            </div>
          </motion.div>

          {/* Product */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-xl text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-black cursor-pointer hover:underline">Features</li>
              <li className="hover:text-black cursor-pointer hover:underline">Pricing</li>
              <li className="hover:text-black cursor-pointer hover:underline">Integrations</li>
              <li className="hover:text-black cursor-pointer hover:underline">Changelog</li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-xl text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-black cursor-pointer hover:underline">Documentation</li>
              <li className="hover:text-black cursor-pointer hover:underline">Tutorials</li>
              <li className="hover:text-black cursor-pointer hover:underline">Blog</li>
              <li className="hover:text-black cursor-pointer hover:underline">Support</li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeUp}>
            <h3 className="font-semibold text-xl text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3 text-gray-500">
              <li className="hover:text-black cursor-pointer hover:underline">About</li>
              <li className="hover:text-black cursor-pointer hover:underline">Careers</li>
              <li className="hover:text-black cursor-pointer hover:underline">Contact</li>
              <li className="hover:text-black cursor-pointer hover:underline">Partners</li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400"
          variants={fadeUp}
        >
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
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
