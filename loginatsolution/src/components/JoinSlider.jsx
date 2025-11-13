import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import img1 from "../assets/join/slide1.jpg";
import img2 from "../assets/join/slide2.jpg";
import img3 from "../assets/join/slide3.jpg";
import img4 from "../assets/join/slide4.jpg";
import img5 from "../assets/join/slide5.jpg";
import img6 from "../assets/join/slide6.jpg";

const JoinSlider = () => {
  const swiperRef = useRef(null);
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="relative py-20">
      {/* Custom Navigation Buttons */}
      <div className="absolute top-4 right-6 z-20 flex gap-3">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-[var(--purple)] hover:bg-[var(--pink)] text-white rounded p-4 shadow-lg transition"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-[var(--purple)] hover:bg-[var(--pink)] text-white rounded p-4 shadow-lg transition"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          el: ".custom-pagination", // custom pagination container
        }}
        speed={2000}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="join-swiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="px-2">
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination placed below */}
      <div className="custom-pagination !relative mt-6 flex justify-center"></div>
    </div>
  );
};

export default JoinSlider;
