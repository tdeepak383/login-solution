import React from 'react'
import SubpageHeroSection from '../components/subpageHeroSection'
import JobFunctionTabs from '../components/JobFunctionTabs'


function JobFunction() {
  return (
    <>
    <SubpageHeroSection
      title={"Job Functions"}
      subtitle={""}
      buttontext={"Schedule a Consultation"}
      children={"FTE-based delivery model allows our clients to scale with dedicated experts across various job functions, including marketing, design, development, customer support, and back-office operations."}
    />
    <section className='margin-top-Subhero'>
        <div className='max-w-6xl text-center mx-auto py-10 px-6 '>
            <JobFunctionTabs/>
        </div>
    </section>
    </>
  )
}

export default JobFunction