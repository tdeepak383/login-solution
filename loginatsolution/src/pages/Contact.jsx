import React from 'react'
import SubpageHeroSection from '../components/subpageHeroSection'
import Form from '../components/Form'

function Contact() {
  return (
    <>
      <SubpageHeroSection
      title={"Get in touch"}
      subtitle={"sales@loginatsolution.com"}
      buttontext={"Connect with Us"}
      children={""}
      />
      <section className='margin-top-Subhero  bg-gradient-to-b to-white from-gray-100'>
        <div className='max-w-2xl mx-auto py-10 px-6 '>
          <Form />
        </div>
      </section>
    </>
  )
}

export default Contact