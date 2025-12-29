import React, { useState} from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage2 from '../../assets/client-stories/premier-european.jpg'
import KLMLogo from '../../assets/KLM-logo.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function CreativeSolutionsforGlobalAviation() {

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
        style={{backgroundImage: `url(${bgImage2})`}}
        >
            <div className='relative pt-60 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>Aviation</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>02</span>/07</p>
                </div>
                <div className=''>
                   <div>
                     <img src={KLMLogo} alt=""  className='w-40'/>
                     <p className='text-left mt-5 text-sm'>Air France and KLM Royal Dutch Airlines – Two of the world’s leading aviation brands with global operations and high-impact communication needs.</p>
                    <h2 className='font-bold text-3xl my-6 '>Creative Solutions for Global Aviation Leaders in High-Pressure Environments</h2> 
                     
                   </div>                  
                </div>
            </div>
        </div>


        <div className="mb-10">

              {/* Business Challenge */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Business Challenge</h2>                
                <p className="mt-5">
                  Air France and KLM required innovative, engaging creative solutions to support multiple internal and external initiatives—often within <strong>highly time-challenged environments</strong>. The key challenge was delivering <strong>custom, high-quality creative assets</strong> rapidly while aligning with strict brand guidelines and diverse communication objectives.
                </p>
              </div>

              {/* Scope of Work */}

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Work</h2>
                <p className="mb-6 text-lg">Loginat Solutions  partnered with both airlines to deliver a wide range of tailored creative solutions, including:</p>

                <ul className="list-disc ml-5 space-y-2">
                  <li>Designing <strong>campaigns for multiple client-led events</strong></li>
                  <li>Creating <strong>internal and external communication collaterals</strong></li>
                  <li>Producing <strong>engaging videos</strong> for awareness and communication</li>
                  <li>Building <strong>dynamic, interactive games</strong> to enhance engagement</li>
                  <li>Developing <strong>microsites</strong> to support campaigns and events</li>
                </ul>
              </div>

              {/* Solution */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Solution</h2>
                <p className="mb-6 text-lg">Loginat Solutions  adopted a flexible and collaborative approach:</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Quickly understood evolving requirements and translated them into impactful creative concepts</li>
                  <li>Delivered <strong>custom-designed solutions</strong> aligned with the distinct branding and communication goals of Air France and KLM</li>
                  <li>Leveraged cross-functional creative teams to handle parallel workstreams efficiently</li>
                  <li>Maintained speed, creativity, and quality despite aggressive timelines</li>
                </ul>
              </div>


              
              {/* Results */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Successfully delivered campaigns and creative assets <strong>within tight deadlines</strong></li>
                  <li>Enhanced engagement through interactive and visually compelling solutions</li>
                  <li>Supported multiple high-visibility events and initiatives for both airlines</li>
                  <li>Established Loginat Solutions  as a <strong>trusted creative partner</strong> capable of performing under pressure</li>
                </ul>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
                <p>Loginat Solutions  consistently rose above challenges to deliver innovative, time-sensitive creative solutions for Air France and KLM. The engagement highlights Loginat Solutions’ strength in providing <strong>custom-tailored, high-quality creative services</strong> for global brands operating in demanding environments.</p>
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

export default CreativeSolutionsforGlobalAviation