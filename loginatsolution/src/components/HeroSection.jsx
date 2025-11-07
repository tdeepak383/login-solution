import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import video1 from '../assets/art-1.mp4'
import video2 from '../assets/art-2.mov'
import video3 from '../assets/art-3.mov'
import video4 from '../assets/art-4.mov'
import video5 from '../assets/art-5.mov'
import video6 from '../assets/art-6.mov'
import video7 from '../assets/art-7.mov'
import video8 from '../assets/art-8.mov'
import video9 from '../assets/art-9.mov'
import { BsArrowDown } from "react-icons/bs";
import { Link } from 'react-router-dom';


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


function HeroSection({onClick}) {

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

    var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 500,
    cssEase: "linear",
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='w-full h-[90vh] fixed top-0'>
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          scrolled ? "bg-black bg-opacity-40" : "bg-black bg-opacity-0"
        }`}
      ></div>
        <div className="max-w-6xl mx-auto text-center py-16 px-4 mt-28">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">
              Scale Without  <span className="text-[var(--purple)]">Boundaries </span></h1>
            {/* <p className="lg:text-3xl md:text-xl text-lg mt-10">Hire your Virtual Marketing Team </p> */}
            <h2 className='lg:text-3xl md:text-xl text-lg mb-8 mt-10'>Access top global experts and scale faster with a Virtual Marketing Team trusted by leading startups and enterprises.</h2>
            <button className={`bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 text-2xl tracking-wide py-3 rounded-lg ${scrolled ? "z-0" : "relative z-50"}`} onClick={onClick}>Connect with Us</button>
        </div>
        <div className="slider-container">
        <Slider {...settings}>
            {videoSlide.map((videoSrc, index) => (
                <div key={index}>
                    <video  src={videoSrc} autoPlay loop muted className="" />
                </div>
            ))}
        </Slider>
        </div>
        <button
        onClick={handleScrollDown}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-md border border-white/30"
        aria-label="Scroll Down"
      >
        <BsArrowDown  className="w-10 h-10 animate-bounce" />
      </button>
    </div>
  )
}

export default HeroSection