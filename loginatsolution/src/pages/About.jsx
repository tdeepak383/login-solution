import React, { useEffect, useState } from 'react'
import ClientsLogo from '../components/ClientsLogo'
import CallToAction from '../components/CallToAction'
import LogoCarousel from '../components/LogoCarousel'
import Gunjan from '../assets/gunjan.jpg'
import Atul from '../assets/atul.jpg'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { RiDropFill } from "react-icons/ri";
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
import { Link } from 'react-router-dom'


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


function About({onClick}) {
   const [scrolled, setScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const heroHeight = document.querySelector(".hero-section")?.offsetHeight || 0;
        if (window.scrollY > heroHeight * 0.5) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  
    const handleScrollDown = () => {
      const nextSection = document.querySelector("#next-section");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }
    };




  return (
    <>
   
    <div className='w-full h-[90vh] fixed top-0'>
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          scrolled ? "bg-black bg-opacity-40" : "bg-black bg-opacity-0"
        }`}
      ></div>
        <div className="max-w-6xl mx-auto text-center py-16 px-4 mt-16 md:mt-28">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold mb-10">We connect you with the right talent for your business goals</h1>
            <Link to={"/contact-us"} className={`bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-10 md:px-16 md:text-2xl tracking-wide py-3 rounded-lg mt-5 ${scrolled ? "z-0" : "relative z-50"}`}>Connect with us</Link>
            <p className='mt-10 text-xl'>Our process ensures every professional is carefully vetted, technically proficient, and aligned with your company’s objectives. Helping you build a reliable, high-performing team that delivers consistent results</p>
        </div>
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
                  className="w-full object-cover"
                />
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
    </div>
      <section className='after-hero-section relative min-h-screen md:px-4 margin-top-about' id="next-section">
        <div className='max-w-6xl text-center mx-auto py-10 md:px-6 '>
          <h2 className='md:text-5xl sm:text-3xl font-bold text-xl mb-10'>We work as your Partner, <br />not a Service Provider</h2>
          <p className='max-sm:px-5 md:text-xl'>We connect with you as a partner, because we believe that true success is built on collaboration and trust. Our approach is centered around working alongside you, understanding your goals, and crafting solutions that align perfectly with your vision.</p>
        </div>
        <ClientsLogo/>
        <div className='bg-gray-50 max-sm:px-4'>         
        <div className="max-w-6xl mx-auto py-20 md:px-6">
          <h3 className="md:text-5xl sm:text-3xl font-bold text-2xl mb-10 text-center">
            About the Co-founders
          </h3>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* --- 1st Co-founder --- */}
            <div className="relative group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <img src={Gunjan} alt="Gunjan Gupta" className="rounded-3xl w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>

              {/* Info Card */}
              <div className="relative md:h-[600px] z-10 bg-[var(--blue-light)] border border-[var(--blue-light)] shadow-xl rounded-3xl p-5 md:p-8 mx-2 md:mx-6 -mt-10">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="md:text-2xl font-bold">Gunjan Gupta</h4>
                    <p className="md:text-xl">Co-founder</p>
                  </div>
                  <div className="flex space-x-2 text-white text-xl">
                    {/* <a
                      href="https://www.facebook.com/Loginat Solutions "
                      className="bg-[var(--pink)] hover:text-black cursor-pointer rounded-full p-3 transition-all duration-300"
                    >
                      <FaFacebookF />
                    </a> */}
                    <a
                      href="http://linkedin.com/in/gunjan-gupta-a700237"
                      className="bg-[var(--blue)] hover:text-black cursor-pointer rounded-full p-3 transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {/* <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="max-sm:text-xs ml-7">
                      “Gunjan is the co-founder of Loginat Solutions Pvt. Ltd., a journey that began with her roots in software development before transitioning into project management. With over 25+ years of experience, she discovered her true passion for entrepreneurship."
                    </p>
                  </div> */}
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="max-sm:text-xs ml-7">
                      Combines her strong technical foundation with strategic leadership to drive growth and innovation. Her professional journey began in software development and evolved into project management, giving her a deep understanding of how technology, people, and process come together to deliver impactful outcomes.

                    </p>
                  </div>
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="max-sm:text-xs ml-7">
                      Led diverse teams, managed complex digital initiatives, and built lasting partnerships based on trust and collaboration. Her transition from technologist to entrepreneur reflects a passion for creating meaningful value and fostering a culture of excellence.
                    </p>
                  </div>
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="max-sm:text-xs ml-7">
                      At Loginat, Gunjan continues to shape the organization's vision with a focus on quality, efficiency, and long-term client success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
             {/* --- 2nd Co-founder placeholder --- */}
            <div className="relative group cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <img src={Atul} alt="Gunjan Gupta" className="rounded-3xl w-full grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" />
              </div>

              {/* Info Card */}
              <div className="relative md:h-[600px] z-10 bg-[var(--blue-light)] border border-[var(--blue-light)] shadow-xl rounded-3xl p-5 md:p-8 mx-2 md:mx-6 -mt-10">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="md:text-2xl font-bold">Atul Gupta</h4>
                    <p className="md:text-xl">Co-founder</p>
                  </div>
                  <div className="flex space-x-2 text-white text-xl">
                    {/* <a
                      href="https://www.facebook.com/Loginat Solutions "
                      className="bg-[var(--blue)] hover:text-black cursor-pointer rounded-full p-3 transition-all duration-300"
                    >
                      <FaFacebookF />
                    </a> */}
                    <a
                      href="http://linkedin.com/in/atul-gupta-38333118"
                      className="bg-[var(--blue)] hover:text-black cursor-pointer rounded-full p-3 transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {/* <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="max-sm:text-xs ml-7">
                      “Atul Gupta co-founder of Loginat Solutions Pvt. Ltd., a Visualizer with strong understanding of communication strategy, advertising, design & development. Started career as a coder and became an entrepreneur.”
                    </p>
                  </div> */}
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="max-sm:text-xs ml-7">
                      Leads with a vision to merge creativity and technology into purposeful digital experiences. With a career spanning communication strategy, advertising, design, and software development, he brings a multidisciplinary perspective to every project.
                    </p>
                  </div>
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="max-sm:text-xs ml-7">
                      Atul’s deep technical roots give him a rare ability to align creative vision with executional precision. Over the years, he has helped brands strengthen their digital presence, streamline communication, and deliver results-driven marketing outcomes.
                    </p>
                  </div>
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="max-sm:text-xs ml-7">
                      His entrepreneurial spirit continues to shape Loginat’s mission, to empower ideas that inspire, engage, and perform.
                    </p>
                  </div>
               
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
        <CallToAction/>
        <LogoCarousel bgColor={"white"} cardColor={"gray-200"}/>
    </>
  )
}

export default About