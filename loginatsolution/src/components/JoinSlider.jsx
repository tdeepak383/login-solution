import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../assets/join/slide1.jpg";
import img2 from "../assets/join/slide2.jpg";
import img3 from "../assets/join/slide3.jpg";
import img4 from "../assets/join/slide4.jpg";
import img5 from "../assets/join/slide5.jpg";
import img6 from "../assets/join/slide6.jpg";

const JoinSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false, // disable default arrows
  };

  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="relative py-20">
      {/* Custom buttons (top right) */}
      <div className="absolute top-4 right-6 z-20 flex gap-3">
        <button
          onClick={() => sliderRef.current.slickPrev()}
          className="bg-[var(--purple)] hover:bg-[var(--blue)] text-white rounded p-4 shadow-lg transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => sliderRef.current.slickNext()}
          className="bg-[var(--purple)] hover:bg-[var(--blue)] text-white rounded p-4 shadow-lg transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-2xl"
            />          
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default JoinSlider;
