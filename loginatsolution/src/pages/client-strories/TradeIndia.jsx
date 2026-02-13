import React, { useState} from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage4 from '../../assets/client-stories/largest-online.jpg'
import tradeindia from '../../assets/TradeIndia-logo.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function TradeIndia() {

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
        style={{backgroundImage: `url(${bgImage4})`}}
        >
            <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>B2B Portal</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>06</span>/08</p>
                </div>
                <div className=''>
                   <div>
                     <img src={tradeindia} alt=""  className='w-40'/>
                     <p className='text-left mt-5 text-sm'>Leading B2B Portal, India - A prominent digital marketplace connecting buyers and sellers across multiple industries.</p>
                    <h2 className='font-bold text-3xl my-6 '>Long-Term Content and Backend Support for a Leading B2B Portal in India</h2>   
                     
                   </div>
                  
                </div>
            </div>
        </div>


        <div className="mb-10">

              {/* Business Challenge */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Business Challenge</h2>                
                <p className="mt-5">
                  The client required reliable backend and content support to power its digital marketing initiatives across a vast range of products and services. With frequent updates and evolving requirements, the challenge was to deliver <strong>accurate, industry-specific, and scalable content</strong> while maintaining consistency and quality over time.
                </p>
              </div>

              {/* Scope of Work */}

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Work</h2>
                <p className="mb-6 text-lg">Loginat Solutions  has been associated with the client for over 12 years, providing dedicated backend and content services that include:</p>

                <ul className="list-disc ml-5 space-y-2">
                    <li>Creation of <strong>digital marketing content</strong> for a wide range of products and services</li>
                    <li>Writing detailed <strong>company profiles</strong> for businesses offering solutions across multiple industries</li>
                    <li>Ensuring content accuracy, relevance, and clarity through structured quality checks</li>
                </ul>
              </div>

              {/* Solution */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Solution</h2>
                <p className="mb-6 text-lg">Loginat Solutions  implemented a dedicated team model aligned with the client’s operational needs:</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Deployed skilled Content Writers supported by Quality Check Analysts</li>
                    <li>Established a robust management structure comprising Managers, Team Leads, Trainers, and Quality Resources</li>
                    <li>Enabled continuous training to ensure domain understanding across diverse industries</li>
                    <li>Applied strict quality assurance processes to deliver precise and dependable content</li>


                </ul>
              </div>


              
              {/* Results */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Maintained a successful partnership for more than a decadex</li>
                    <li>Delivered high-quality, accurate content supporting the client’s digital marketing and marketplace growth</li>
                    <li>Improved consistency and credibility of company profiles and product/service listings</li>
                    <li>Built a scalable and adaptable content operation to support ongoing business expansion</li>

                </ul>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
                <p>This long-standing collaboration highlights Loginat Solutions’ capability to deliver reliable, high-quality content and backend support through strong management, quality-driven processes, and continuous adaptation—making it a trusted partner for one of India’s leading B2B portals.</p>
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

export default TradeIndia