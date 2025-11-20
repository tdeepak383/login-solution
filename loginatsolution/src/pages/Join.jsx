import React, { useState } from 'react'
import SubpageHeroSection from '../components/subpageHeroSection'
import JoinSlider from '../components/JoinSlider'
import CurrentOpenings from '../components/CurrentOpenings'
import JoinusPopup from '../components/JoinusPopup'

function Join() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  return (
    <>
      <SubpageHeroSection
       onClick={() => setIsPopupOpen(true)}
      title={"We build team, not individual employees"}
      subtitle={"You could be the next Solver!"}
      buttontext={"Join us now"}
      children={"At Loginat, we believe every individual is an essential part of the team. Through regular interactions, open feedback, and mutual trust, we foster a sense of comfort and collaboration that builds a strong, consistent team. Life@Loginat is dynamic, engaging, and full of life. A few snapshots below might just tell you the story!"}
      />
      <section className='margin-top-join'>
        <div className='max-w-6xl mx-auto md:py-0 md:px-6'>
          <JoinSlider />
          <CurrentOpenings onClick={() => setIsPopupOpen(true)} />
        </div>
      </section>
      {isPopupOpen && <JoinusPopup onClose={() => setIsPopupOpen(false)} />}
    </>
  )
}

export default Join