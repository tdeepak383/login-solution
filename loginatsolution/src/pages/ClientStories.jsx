import React, { useState } from 'react'
import data from '../data/clientstories.json'
import ClientStoriesCard from '../components/ClientStoriesCard'
import SubpageHeroSection from '../components/subpageHeroSection'
import PopUp from '../components/PopUp';

function ClientStories() {

   const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
    <SubpageHeroSection
      onClick={() => setIsPopupOpen(true)}
      title={"Client Impact Stories"}
      subtitle={"A curated collection of the successes we’ve built with our clients—highlighting their goals, our solutions, and the results achieved."}
      buttontext={"Connect with us"}
      children={""}
    />
    <section className='margin-top-Subhero'>
        <div className='bg-gray-100'>
          <div className='max-w-6xl mx-auto md:py-14 p-6 '>
          {/* <h1 className="lg:text-5xl text-center md:text-4xl text-2xl font-bold max-sm:my-5 lg:mb-20">Client Stories</h1> */}
          <div className="grid md:grid-cols-2 gap-6">
            {
            data.map((blog, index) => (
              <ClientStoriesCard 
                key={index}
                title={blog.title}
                challenge={blog.challenge}
                slug={blog.slug}
                content1={blog.content1}
                content2={blog.content2}
              />
            ))
          }
          </div>
        </div>
        </div>
        <PopUp isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </section>
    </>
  )
}

export default ClientStories