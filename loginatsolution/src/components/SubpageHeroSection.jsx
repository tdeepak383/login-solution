import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';



function SubpageHeroSection({title, subtitle,buttontext, children}) {

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


  return (
    <div className='w-full h-[90vh] fixed top-0'>
      <div
        className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          scrolled ? "bg-black bg-opacity-40" : "bg-black bg-opacity-0"
        }`}
      ></div>
        <div className="max-w-6xl mx-auto text-center py-16 px-4 mt-28">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">{title}</h1>
            <h2 className='lg:text-3xl md:text-xl text-lg mb-8 mt-10'>{subtitle}</h2>
            <Link to="/contact" className={`bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 text-2xl tracking-wide py-3 rounded-lg ${scrolled ? "z-0" : "relative z-50"}`}>{buttontext}</Link>
            <p className='mt-10 text-xl'>{children}</p>
        </div>
    </div>
  )
}

export default SubpageHeroSection