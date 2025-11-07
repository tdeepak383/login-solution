import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

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
    <footer className="w-full z-40 relative flex flex-col items-center bg-gray-200 justify-center text-center px-5 pt-10 pb-5">
      <motion.div
        className="max-w-6xl w-full"
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
          <motion.div className="flex flex-col justify-between col-span-2" variants={fadeUp}>
            <div className="flex items-center space-x-3">
              <Link to="/"><img src={logo} alt="logo" className="w-40 md:w-48" /></Link>
            </div>
            
            <div className="flex space-x-4 text-black text-xl mt-10">
              {/* <a href="https://www.facebook.com/LoginAtSolutions" className="bg-gray-100 p-3 hover:bg-[var(--purple)] hover:text-white rounded">
              <FaFacebookF />
              </a> */}
              <a href="https://www.linkedin.com/company/loginat-solutions-pvt-ltd-/" className="bg-gray-100 p-3 hover:bg-[var(--purple)] hover:text-white rounded">
              <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@loginatsolution" className="bg-gray-100 p-3 hover:bg-[var(--purple)] hover:text-white rounded">
              <FaYoutube />
              </a>
            </div>
          </motion.div>
            {/* Company */}
          <motion.div variants={fadeUp} className="text-left">
            {/* <h3 className="font-semibold text-xl text-gray-900 mb-4">Company</h3> */}
            <ul className="space-y-3 text-black">
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/jobfunction">Job Function</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/services">Services</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/about">About Us</Link></li>
              
            </ul>
          </motion.div>
          {/* Product */}
          <motion.div variants={fadeUp} className="text-left">
            {/* <h3 className="font-semibold text-xl text-gray-900 mb-4">Quick Links</h3> */}
            <ul className="space-y-3 text-black">
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/blogs">Blogs</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/join-us" >Join Us</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp} className="flex flex-col justify-start text-left">
            {/* <h3 className="font-semibold text-xl text-gray-900 mb-4">Resources</h3> */}
            <ul className="space-y-3 text-black">
              
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/terms-service">Terms of Service</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/cookies-policy">Cookies Settings</Link></li>
            </ul>
          </motion.div>

        
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-200 text-center text-black"
          variants={fadeUp}
        >
          <p>© 2025 <a href="https://loginatsolution.com/" className="underline text-[var(--purple)]">LoginAtSolutions Pvt. Ltd.</a> |  All rights reserved.</p>
          
        </motion.div>
      </motion.div>
    </footer>
  );
}

export default Footer;
