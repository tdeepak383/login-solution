import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import testimonials from "../data/testimonial.json";
import Rating from "@mui/material/Rating";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function TestimonialSlider() {
  const swiperRef = useRef(null);

  return (
    <section className="py-20 w-full z-50 bg-white relative flex flex-col items-center justify-center text-center px-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="text-gray-500 tracking-wider">Testimonials</h3>
          <h2 className="text-3xl md:text-5xl text-gray-800">
            What our clients say
          </h2>
        </div>
      </div>

      <div className="relative lg:w-1/2 md:w-3/4 w-72 mx-auto">
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-3 md:-left-20 z-20 flex gap-3">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="bg-[var(--purple)] hover:bg-[var(--pink)] text-white rounded-lg p-4 shadow-lg transition"
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute top-1/2 right-3 md:-right-20 z-20 flex gap-3">
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="bg-[var(--purple)] hover:bg-[var(--pink)] text-white rounded-lg p-4 shadow-lg transition"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          speed={700}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="testimonial-swiper"
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <article className="bg-white border rounded-3xl p-6 flex flex-col text-left">
                <div className="md:flex md:items-center gap-4 mb-4">
                  <img
                    src={t.avatar}
                    alt={`${t.name} avatar`}
                    className="w-20 md:w-14 h-20 md:h-14 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <h4 className="text-lg font-semibold">{t.name}</h4>
                    <p className="text-gray-600">{t.role}</p>
                    <div className="flex items-center mt-2">
                      <Rating
                        name="half-rating-read"
                        value={parseFloat(t.rating)}
                        precision={0.5}
                        readOnly
                      />
                    </div>
                  </div>
                </div>
                <p className="max-sm:text-sm leading-relaxed mb-4 flex-1 text-gray-700">
                  “{t.quote}”
                </p>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
