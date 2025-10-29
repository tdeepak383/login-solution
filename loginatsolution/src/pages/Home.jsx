import React from 'react'
import HeroSection from '../components/HeroSection'
import AfterHero from '../components/AfterHero'
import VerticalTabs from '../components/VerticalTabs'
import Solutions from '../components/Solutions'
import CallToAction from '../components/CallToAction'
import TestimonialSlider from '../components/Testimonial'
import LogoCarousel from '../components/LogoCarousel'

function Home() {
  return (
    <>
      <HeroSection />
      <AfterHero />
      <VerticalTabs />      
      <Solutions />
      <CallToAction />
      <LogoCarousel />
      <TestimonialSlider />
    </>
  )
}

export default Home