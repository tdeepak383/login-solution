import React from 'react'
import SubpageHeroSection from '../components/subpageHeroSection'
import JoinSlider from '../components/JoinSlider'
import CurrentOpenings from '../components/CurrentOpenings'

function Join() {
  return (
    <>
      <SubpageHeroSection
      title={"We build team, not individual employees"}
      subtitle={"You could be the next Solver!"}
      buttontext={"Join Us Now"}
      children={"We believe the every individual in the team is important. Our regular interactions / feedbacks & faith in every individual inculcate a sense of comfort. This helps us in building a stable & consistent team Life@LoginAt is happening and full of life few snapshot might tell you the story"}
      />
      <section className='margin-top-Subhero  bg-gradient-to-b from-white to-gray-100'>
        <div className='max-w-6xl mx-auto py-10 px-6'>
          <JoinSlider />
          <CurrentOpenings />
        </div>
      </section>
    </>
  )
}

export default Join