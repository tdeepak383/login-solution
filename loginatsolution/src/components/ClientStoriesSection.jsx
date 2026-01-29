import React from 'react'
import data from '../data/clientstories.json'
import { Link } from 'react-router-dom'
import CaseStudiesLayout from './CaseStudiesLayout'
function ClientStoriesSection() {
  return (
    <>
     <section className='py-10 w-full z-50 bg-gray-100 relative flex flex-col items-center justify-center text-center px-5'>
        <div className='max-w-6xl mx-auto md:py-10 md:p-6'>
          <h1 className="text-2xl md:text-5xl text-black mb-5 font-bold max-w-5xl mx-auto">Client Impact Stories</h1>
          <p className='text-lg md:text-xl text-gray-700 mb-10 max-w-5xl mx-auto'>A curated collection of the successes we've built with our clients—highlighting their goals, our solutions, and the results achieved.</p>
          <div className="">
            <CaseStudiesLayout />
          </div>
          <div className='mt-20'>
            <Link to={"/client-stories"} className='bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white text-xl py-2 px-16 rounded-lg transition hover:shadow'>See More</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default ClientStoriesSection