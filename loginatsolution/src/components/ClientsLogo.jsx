import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Logo01 from '../assets/client-logo/01.png'
import Logo02 from '../assets/client-logo/02.png'
import Logo03 from '../assets/client-logo/03.png'
import Logo04 from '../assets/client-logo/04.png'
import Logo05 from '../assets/client-logo/05.png'
import Logo06 from '../assets/client-logo/06.png'
import Logo07 from '../assets/client-logo/07.png'
import Logo08 from '../assets/client-logo/08.png'
import Logo09 from '../assets/client-logo/09.png'
import Logo10 from '../assets/client-logo/10.png'
import Logo11 from '../assets/client-logo/11.png'
import Logo12 from '../assets/client-logo/12.png'
import Logo13 from '../assets/client-logo/13.png'
import Logo14 from '../assets/client-logo/14.png'
import Logo15 from '../assets/client-logo/15.png'
import Logo16 from '../assets/client-logo/16.png'


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
    Logo16
]
function ClientsLogo() {

var settings1 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
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
var settings2 = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    cssEase: "linear",
    pauseOnHover: true,
    slidesToShow: 7,
    centerMode: true,
    slidesToScroll: 1,
    rtl: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1
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
        <section className='pb-20 w-full z-50 relative bg-white flex flex-col items-center justify-center text-center'>
            <div className='w-full'>
                {/* <h2 className='text-2xl md:text-5xl text-black font-bold mb-5 max-w-5xl mx-auto'>Our Clients</h2>*/}
                <Slider {...settings1}>
                {logos.slice(0,8).map((logo, index) => (
                    <div key={index} className='p-2 mt-10'>
                        <div className={`content-center bg-white p-4 border border-gray-200 rounded-lg`}>
                            <img src={logo} alt={`Technology Logo ${index + 1}`} className='mx-auto object-contain' />
                        </div>
                    </div>
                ))}
                </Slider>               
                <Slider {...settings2}>
                {logos.slice(8,16).map((logo, index) => (
                    <div key={index} className='p-2'>
                        <div className={`content-center bg-white p-4 border border-gray-200 rounded-lg`}>
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

export default ClientsLogo