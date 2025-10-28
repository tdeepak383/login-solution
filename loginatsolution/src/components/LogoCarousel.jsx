import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    Logo14
]
function LogoCarousel() {

var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 7,
    centerMode: true,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
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
     <>
        <section className='min-h-screen w-full z-50 bg-white relative flex flex-col items-center justify-center text-center py-10'>
            <div className='w-full'>
                <h2 className='text-2xl md:text-5xl text-black font-bold mb-5 max-w-5xl mx-auto'>Explore our comprehensive tool capabilities</h2>
                <p className='text-lg md:text-xl text-gray-700 mb-10 max-w-5xl mx-auto'>We leverage a diverse set of tools and technologies to deliver top-notch solutions tailored to your business needs. Our expertise spans across various domains, ensuring that we can provide the right fit for your projects.</p>
                
                <Slider {...settings}>
                {logos.map((logo, index) => (
                    <div key={index}>
                        <div className='content-center bg-[var(--purple)] w-40 md:w-24 h-40 md:h-24 lg:w-44 lg:h-44 p-4 border border-gray-200 rounded-lg'>
                            <img src={logo} alt={`Technology Logo ${index + 1}`} className='mx-auto object-contain' />
                        </div>
                    </div>
                ))}
                </Slider>               
            </div>
        </section>
    </>
  )
}

export default LogoCarousel