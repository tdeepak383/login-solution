import React, { useState} from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage7 from '../../assets/client-stories/TE_Connectivity.jpg'
import TEConnectivityLogo from '../../assets/TE_Connectivity_logo.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function TEConnectivity() {

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
      <section className="margin-top-Subhero">

        {/* Banner */}
        <div className="max-w-6xl mx-auto py-10 px-6 ">


         <div className='relative p-5 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/55 mb-10' 
        style={{backgroundImage: `url(${bgImage7})`}}
        >
            <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>Intranet</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>04</span>/08</p>
                </div>
                <div className=''>
                   <div>
                     <img src={TEConnectivityLogo} alt=""  className='w-40'/>
                     <p className='text-left mt-5 text-sm'>TE Connectivity - Connectors & Sensors for a Connected World A global engineering leader enabling connectivity and sensor solutions across industries.</p>
                    <h2 className='font-bold text-3xl my-6 '>Creative and Intranet Solutions for Internal Communications at TE Connectivity</h2> 
                     
                   </div>
                  
                </div>
            </div>
        </div>


        <div className="mb-10">

              {/* Business Challenge */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Business Challenge</h2>                
                <p className="mt-5">
                  TE Connectivity required a creative partner to strengthen its <strong>internal communications</strong> through visually engaging, consistent, and timely collaterals. The challenge was to design and maintain a centralized intranet platform while also responding quickly to ongoing creative requirements across the organization.
                </p>
              </div>

              {/* Scope of Work */}

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Work</h2>
                <p className="mb-6 text-lg">Loginat Solutions  delivered a range of custom internal communication solutions, including:</p>

                <ul className="list-disc ml-5 space-y-2">
                    <li>Designing and developing the corporate intranet</li>
                    <li>Providing monthly updates and ongoing maintenance of the intranet</li>
                    <li>Designing internal communication collaterals such as mailers, posters, newsletters, and reports</li>
                    <li>Supporting ad-hoc creative requests aligned with internal campaigns and initiatives</li>


                </ul>
              </div>

              {/* Solution */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Solution</h2>
                <p className="mb-6 text-lg">Loginat Solutions  adopted a design FTE-based engagement model:</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Allocated dedicated design resources (FTEs) to support TE Connectivity on a real-time basis</li>
                    <li>Ensured quick turnaround for multiple, parallel creative requirements</li>
                    <li>Maintained brand consistency and quality across all internal assets</li>
                    <li>Worked closely with internal stakeholders to align communication goals with design output</li>
                </ul>
              </div>


              
              {/* Results */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Successfully delivered and maintained a user-friendly, visually consistent intranet</li>
                    <li>Improved effectiveness and reach of internal communications</li>
                    <li>Enabled faster response to evolving communication needs through dedicated design support</li>
                    <li>Established a reliable and scalable creative partnership</li>

                </ul>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
                <p>Through dedicated design resources and a flexible engagement model, Loginat Solutions  helped TE Connectivity enhance its internal communications ecosystem. The engagement highlights Loginat Solutions’  capability to deliver high-quality, real-time creative support for global engineering organizations.</p>
              </div>
          </div>
          <hr />
        </div>
        
        <div className="max-w-6xl mx-auto py-10 px-6">
          <h4 className="text-xl font-bold">Other Stories</h4>

          <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={1000}
            spaceBetween={0}
            slidesPerView={3}
            allowTouchMove={false}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 3 },
            }}
            className="mt-10"
          >
            {
              data.map((story, index) => (
                <SwiperSlide key={index} className='px-2'>
                  <OtherStoriesCard
                    key={index}
                    title={story.title}
                    challenge={story.challenge}
                    slug={`/client-stories/${story.slug}`}
                    content1={story.content1}
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>

        </div>
      </section>
      <PopUp isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  )
}

export default TEConnectivity