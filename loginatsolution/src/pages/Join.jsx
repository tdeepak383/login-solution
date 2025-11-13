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
      buttontext={"Join Us Now"}
      children={"We believe the every individual in the team is important. Our regular interactions / feedbacks & faith in every individual inculcate a sense of comfort. This helps us in building a stable & consistent team Life@LoginAt is happening and full of life few snapshot might tell you the story"}
      />
      <section className='margin-top-Subhero'>
        <div className='max-w-6xl mx-auto md:py-10 md:px-6'>
          <JoinSlider />
          <CurrentOpenings onClick={() => setIsPopupOpen(true)} />
        </div>
      </section>
      {isPopupOpen && <JoinusPopup onClose={() => setIsPopupOpen(false)} />}
    </>
  )
}

export default Join