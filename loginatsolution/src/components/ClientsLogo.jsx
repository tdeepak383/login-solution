import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import Logo01 from "../assets/client-logo/01.png";
import Logo02 from "../assets/client-logo/02.png";
import Logo03 from "../assets/client-logo/03.png";
import Logo04 from "../assets/client-logo/04.png";
import Logo05 from "../assets/client-logo/05.png";
import Logo06 from "../assets/client-logo/06.png";
import Logo07 from "../assets/client-logo/07.png";
import Logo08 from "../assets/client-logo/08.png";
import Logo09 from "../assets/client-logo/09.png";
import Logo10 from "../assets/client-logo/10.png";
import Logo11 from "../assets/client-logo/11.png";
import Logo12 from "../assets/client-logo/12.png";
import Logo13 from "../assets/client-logo/13.png";
import Logo14 from "../assets/client-logo/14.png";
import Logo15 from "../assets/client-logo/15.png";
import Logo16 from "../assets/client-logo/16.png";

const logos = [
  Logo01,
  Logo02,
  Logo03,
  Logo04,
  Logo05,
  Logo06,
  Logo07,
  Logo08,
  Logo09,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
];

function ClientsLogo() {
  const settings = {
    modules: [Autoplay],
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    speed: 2000,
    spaceBetween: 10,
    slidesPerView: 7,
    allowTouchMove: false,
    breakpoints: {
      320: { slidesPerView: 2, spaceBetween: 0 },
      480: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      1024: { slidesPerView: 5 },
      1280: { slidesPerView: 7 },
    },
  };

  return (
    <section className="pb-20 w-full relative bg-white flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="w-full">
        {/* First Row - Left to Right */}
        <Swiper {...settings} className="client-swiper">
          {logos.slice(0, 8).map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="px-1">
                <div className="bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition">
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 1}`}
                    className="mx-auto h-16 md:h-20 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Second Row - Right to Left (reverse direction) */}
        <Swiper
          {...settings}
          dir="rtl"
          className="client-swiper mt-2"
        >
          {logos.slice(8, 16).map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="px-1">
                <div className="bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition">
                  <img
                    src={logo}
                    alt={`Client Logo ${index + 9}`}
                    className="mx-auto h-16 md:h-20 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default ClientsLogo;
