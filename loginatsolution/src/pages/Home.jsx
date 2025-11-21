import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import AfterHero from '../components/AfterHero'
import VerticalTabs from '../components/VerticalTabs'
import Solutions from '../components/Solutions'
import CallToAction from '../components/CallToAction'
import TestimonialSlider from '../components/Testimonial'
import LogoCarousel from '../components/LogoCarousel'
import ClientsLogo from '../components/ClientsLogo'
import PopUp from '../components/PopUp'


function Home() {
   const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>    
      
      <HeroSection onClick={() => setIsPopupOpen(true)} />
      <AfterHero onClick={() => setIsPopupOpen(true)}/>
      <VerticalTabs />      
      <Solutions />
      <CallToAction />
      <LogoCarousel bgColor={"gray-200"} cardColor={"white"} />
      <TestimonialSlider />
      <ClientsLogo />
      <PopUp isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

export default Home