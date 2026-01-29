import React from 'react'
import Logo1 from '../assets/logo/tech-1.png'
import Logo2 from '../assets/logo/tech-2.png'
import Logo3 from '../assets/logo/tech-3.png'
import Logo4 from '../assets/logo/tech-4.png'
import Logo5 from '../assets/logo/tech-5.png'
import Logo6 from '../assets/logo/tech-6.png'
import Logo7 from '../assets/logo/tech-7.png'
import Logo8 from '../assets/logo/tech-8.png'
import Logo9 from '../assets/logo/tech-9.png'
import Logo10 from '../assets/logo/tech-10.png'
import Logo11 from '../assets/logo/tech-11.png'
import Logo12 from '../assets/logo/tech-12.png'
import Logo13 from '../assets/logo/tech-13.png'
import Logo14 from '../assets/logo/tech-14.png'
import Logo15 from '../assets/logo/tech-15.png'
import Logo16 from '../assets/logo/tech-16.png'
import Logo17 from '../assets/logo/tech-17.png'
import Logo18 from '../assets/logo/tech-18.png'
import Logo19 from '../assets/logo/tech-19.png'
import Logo20 from '../assets/logo/tech-20.png'
import Logo21 from '../assets/logo/tech-21.png'
import Logo22 from '../assets/logo/tech-22.png'
import Logo23 from '../assets/logo/tech-23.png'
import Logo24 from '../assets/logo/tech-24.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const logos = [
  Logo1,
  Logo2,
  Logo3,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Logo8,
  Logo9,
  Logo10,
  Logo11,
  Logo12,
  Logo13,
  Logo14,
  Logo15,
  Logo16,
  Logo17,
  Logo18,
  Logo19,
  Logo20,
  Logo21,
  Logo22,
  Logo23,
  Logo24

]
function LogoCarousel({ bgColor, cardColor }) {




  return (
    <>
      <section className={`py-20 w-full z-50 bg-${bgColor} relative flex flex-col items-center justify-center text-center`}>
        <div className='w-full'>
          <h2 className='text-2xl md:text-5xl text-black mb-5 font-bold max-w-5xl mx-auto'>Our technical depth</h2>
          <p className='text-lg md:text-xl text-gray-700 mb-10 max-w-5xl mx-auto max-sm:px-4'>We provide talent who specializes in specific tools and technologies to deliver high-quality solutions tailored to your business needs. Each professional brings focused expertise, ensuring the right skills are matched to your project requirements.</p>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false, }}
            speed={2000}
            spaceBetween={20}
            slidesPerView={7}
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 7 },
            }}
          >
            {logos.map((logo, index) => (
              <SwiperSlide >
                <div className={`content-center bg-${cardColor} p-4 border border-gray-200 rounded-lg`}>
                  <img src={logo} alt={`Technology Logo ${index + 1}`} className='mx-auto object-contain' />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default LogoCarousel