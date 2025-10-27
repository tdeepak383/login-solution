import React from 'react'
import HeroSection from '../components/HeroSection'
import AfterHero from '../components/AfterHero'
import VerticalTabs from '../components/VerticalTabs'
import Solutions from '../components/Solutions'
import CallToAction from '../components/CallToAction'
import ToolsTechnology from '../components/ToolsTechnology'
import TestimonialSlider from '../components/Testimonial'

function Home() {
  return (
    <>
      <HeroSection />
      <AfterHero />
      <VerticalTabs />      
      <Solutions />      
      <CallToAction />
      <ToolsTechnology />
      <TestimonialSlider />
    </>
  )
}

export default Home