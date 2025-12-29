import React, { useEffect, useState } from 'react'
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
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";


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
            <h2 className='lg:text-3xl md:text-xl text-lg mb-8 mt-10'>Access top global experts and scale faster with a Virtual Marketing Enabling Team trusted by leading  enterprises and startups.</h2>
            <button className={`bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 md:text-2xl tracking-wide py-3 rounded-lg ${scrolled ? "z-0" : "relative z-50"}`} onClick={onClick}>Connect with us</button>
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