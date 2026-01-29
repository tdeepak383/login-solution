import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import {
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import video1 from '../assets/art-1.mp4'
import video2 from '../assets/art-2.mov'
import video3 from '../assets/art-3.mov'
import video4 from '../assets/art-4.mov'
import video5 from '../assets/art-5.mov'
import video6 from '../assets/art-6.mov'
import video7 from '../assets/art-7.mov'
import video8 from '../assets/art-8.mov'
import video9 from '../assets/art-9.mov'


import iso1 from '../assets/iso1.png';
import iso2 from '../assets/iso2.png';

const videoSlide = [
    video1,
    video2,
    video3,
    video4,
    video5,
    video6,
    video7,
    video8,
    video9
]

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
    <>
   <div className="">
      <div className='w-full overflow-hidden'>
          <Swiper
          modules={[Autoplay]}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          spaceBetween={0}
          slidesPerView={7}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 7 },
          }}
          className="overflow-hidden"
        >
              {videoSlide.map((videoSrc, index) => (
              <SwiperSlide key={index}>
                <video
                  src={videoSrc}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-4 object-cover"
                />
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
    <footer className="w-full z-40 relative flex flex-col items-center bg-gray-200 justify-center text-center px-5 pt-10 pb-5">
      <motion.div
        className="max-w-6xl w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-5"
          variants={staggerContainer}
        >
          {/* Left - Logo and description */}
          <motion.div className="flex justify-between" variants={fadeUp}>
            <div className="flex items-center space-x-3">
              <Link to="/"><img src={logo} alt="logo" className="w-40 md:w-48" /></Link>
            </div>
          </motion.div>
          <motion.div className="lg:ml-20">
            <div className="flex space-x-4 text-black text-xl">
              {/* <a href="https://www.facebook.com/Loginat Solutions " className="bg-gray-100 p-3 hover:bg-[var(--purple)] hover:text-white rounded">
              <FaFacebookF />
              </a> */}
              <a href="https://www.linkedin.com/company/loginat-solutions-pvt-ltd-/" className="bg-gray-100 p-3 hover:bg-[var(--purple)] hover:text-white rounded">
              <FaLinkedinIn />
              </a>
              {/* <a href="https://www.youtube.com/@loginatsolution" className="bg-gray-100 p-3 hover:bg-[var(--purple)] hover:text-white rounded">
              <FaYoutube />
              </a> */}
            </div>
          </motion.div>
            {/* Company */}
          <motion.div variants={fadeUp} className="text-left col-span-2">
            {/* <h3 className="font-semibold text-xl text-gray-900 mb-4">Company</h3> */}
            <ul className="space-y-3 text-black md:columns-2 columns-2">
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/jobfunction">Job Function</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/services">Services</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/about">About Us</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/blogs">Blogs</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/client-stories">Client Stories</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/join-us" >Join Us</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/contact-us">Contact Us</Link></li>
            </ul>
          </motion.div>
          {/* Product */}
          <motion.div variants={fadeUp} className="flex justify-center items-center gap-3">
            <div className="flex flex-col justify-center items-center">
              <a href="/LAS(ISOIEC_27001-2022)_FINAL.pdf" target="_blank"><img src={iso1} alt="" className="w-24 mx-auto mb-2" />
              <p className="text-xs">27001:2022 (ISMS) Certifications</p></a>
            </div>
            <div className="flex flex-col justify-center items-center">
              <a href="/LAS(ISO 9001-2015)201123019101.pdf" target="_blank"><img src={iso2} alt="" className="w-24 mx-auto mb-2" />
              <p className="text-xs">ISO 9001:2015 (QMS) & ISO</p></a>
            </div>
          </motion.div>

          {/* Resources */}
          <motion.div variants={fadeUp} className="flex flex-col justify-start text-left">
            {/* <h3 className="font-semibold text-xl text-gray-900 mb-4">Resources</h3> */}
            <ul className="space-y-3 text-black">
              {/* <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/join-us" >Join Us</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/contact-us">Contact Us</Link></li> */}
              {/* <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/terms-service">Terms of Service</Link></li>
              <li className="hover:text-[var(--purple)] cursor-pointer"><Link to="/cookies-policy">Cookies Policy</Link></li> */}
            </ul>
          </motion.div>

        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-400 text-sm text-center pt-2 text-black "
          variants={fadeUp}
        >
          <p className="mb-1">Copyright © 2025 Loginat Solutions Pvt. Ltd. | <Link to="/privacy-policy" className="underline text-[var(--purple)]">Privacy Policy</Link> |  <Link to="/terms-service" className="underline text-[var(--purple)]">Terms of use</Link></p>
          <p>We use cookies on our site. Please read more about cookies policy <Link to="/cookies-policy" className="underline text-[var(--purple)]">here.</Link></p>
          
        </motion.div>
      </motion.div>
    </footer>
   </div>
    </>
  );
}

export default Footer;
