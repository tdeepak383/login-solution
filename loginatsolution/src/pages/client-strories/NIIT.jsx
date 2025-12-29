import React, { useState} from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage6 from '../../assets/client-stories/NIIT.jpg'
import NIITLogo from '../../assets/NIIT_logo.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function NIIT() {

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
        style={{backgroundImage: `url(${bgImage6})`}}
        >
            <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>eLearning</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>06</span>/07</p>
                </div>
                <div className=''>
                   <div>
                     <img src={NIITLogo} alt=""  className='w-40'/>
                     <p className='text-left mt-5 text-sm'>NIIT Ltd. - A leading global eLearning and skills development company delivering learning solutions across industries.</p>
                    <h2 className='font-bold text-3xl my-6 '>Staff Augmentation with High Resource Continuity for NIIT Ltd</h2>      
                                     
                    
                   </div>
                 
                </div>
            </div>
        </div>


        <div className="mb-10">

              {/* Business Challenge */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Business Challenge</h2>                
                <p className="mt-5">
                  NIIT required skilled eLearning professionals to support <strong>multiple projects simultaneously</strong> under a Full-Time Equivalent (FTE) model. The key challenge was not only scaling resources, but also ensuring <strong>minimal downtime due to absenteeism</strong> and <strong>high employee retention</strong>, so that knowledge transfer and process onboarding did not need to be repeated—ensuring continuity and efficiency across projects.
                </p>
              </div>

              {/* Scope of Work */}

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Work</h2>
                <p className="mb-6 text-lg">Loginat Solutions  provided staff augmentation services that included:</p>

                <ul className="list-disc ml-5 space-y-2">
                    <li>Deployment of highly trained resources on an FTE model</li>
                    <li>Allocation of multiple FTEs at the same time across parallel projects</li>
                    <li>Continuous support to meet NIIT’s quality and delivery expectations</li>

                </ul>
              </div>

              {/* Solution */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Solution</h2>
                <p className="mb-6 text-lg">Loginat Solutions  implemented a robust resource management and retention strategy:</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Carefully selected and trained resources aligned with NIIT’s project requirements</li>
                    <li>Maintained backup and cross-trained resources to reduce impact of absenteeism</li>
                    <li>Established strong people management practices to ensure high retention rates</li>
                    <li>Provided managerial oversight to monitor productivity, quality, and engagement</li>

                </ul>
              </div>


              
              {/* Results */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Ensured uninterrupted project delivery with minimal downtime</li>
                    <li>Maintained continuity of process knowledge, reducing repeated onboarding efforts</li>
                    <li>Delivered high-quality outputs across multiple projects</li>
                    <li>Enabled NIIT to focus on core delivery while Loginat Solutions  managed resource stability</li>

                </ul>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
                <p>Through effective staff augmentation and strong resource governance, Loginat Solutions  helped NIIT Ltd. scale efficiently while maintaining continuity and quality. The engagement highlights Loginat Solutions’ ability to provide reliable, long-term FTE resources with minimal disruption and high operational stability.</p>
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

export default NIIT