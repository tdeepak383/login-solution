import React, { useState } from 'react'
import SubpageHeroSection from '../components/subpageHeroSection'
import JobFunctionTabs from '../components/JobFunctionTabs'
import PopUp from '../components/PopUp';


function JobFunction() {


   const [isPopupOpen, setIsPopupOpen] = useState(false);


  return (
    <>
    <SubpageHeroSection
      onClick={() => setIsPopupOpen(true)}
      title={"Job Functions"}
      subtitle={""}
      buttontext={"Schedule a consultation"}
      children={"FTE-based delivery model allows our clients to scale with dedicated experts across various job functions, including marketing, design, development, customer support, and back-office operations."}
    />
    <section className='margin-top-Subhero'>
        <div className='max-w-6xl text-center mx-auto pb-10 px-6 '>
            <JobFunctionTabs/>
        </div>
    </section>
     <PopUp isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

export default JobFunction