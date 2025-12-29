import React, { useState} from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage3 from '../../assets/client-stories/Digital-Operations.jpg'
import vitriaLogo from '../../assets/vitria-logo.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function IntegratedCreativeandDigitalMarketingSupport() {

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
        style={{backgroundImage: `url(${bgImage3})`}}
        >
            <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>AI-driven</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>03</span>/07</p>
                </div>
                <div className=''>
                   <div>
                     <img src={vitriaLogo} alt=""  className='w-40'/>
                     <p className='text-left mt-5 text-sm'>Vitria Technology – A leading AI-driven enterprise technology company specializing in intelligent automation and real-time analytics.</p>
                    <h2 className='font-bold text-3xl my-6 '>Integrated Creative and Digital Marketing Support for an AI Technology Leader</h2>      
                     
                   </div>
                  
                </div>
            </div>
        </div>


        <div className="mb-10">

              {/* Business Challenge */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Business Challenge</h2>                
                <p className="mt-5">
                  Vitria Technology required a creative and digital marketing partner capable of translating complex AI solutions into engaging, consistent, and measurable marketing campaigns. The challenge was to deliver <strong>customized creative assets</strong>, manage social media presence, and track campaign performance—all while aligning with evolving marketing objectives.
                </p>
              </div>

              {/* Scope of Work */}

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Work</h2>
                <p className="mb-6 text-lg">Loginat Solutions  delivered a comprehensive range of tailored creative and digital marketing services, including:</p>

                <ul className="list-disc ml-5 space-y-2">
                    <li>Designing <strong>social media posts</strong> for ongoing campaigns</li>
                    <li>Creating <strong>whitepapers, case studies, and marketing collaterals</strong></li>
                    <li>Designing professional <strong>PowerPoint presentations</strong> for sales and leadership use</li>
                    <li>Managing <strong>LinkedIn activity</strong> through dedicated social media experts</li>
                    <li>Executing email campaigns using <strong>HubSpot</strong>, including click analysis</li>
                    <li>Generating <strong>Marketing Qualified Lead (MQL) reports</strong> for client review</li>
                    <li>Managing regular <strong>website updates</strong> to ensure accurate and timely content publishing</li>
                </ul>
              </div>

              {/* Solution */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Solution</h2>
                <p className="mb-6 text-lg">Loginat Solutions  assembled a specialized, cross-functional team to support Vitria Technology:</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Social media strategists to plan, execute, and optimize LinkedIn campaigns</li>
                    <li>Creative designers and content specialists delivering brand-aligned assets</li>
                    <li>Marketing operations support leveraging HubSpot for email execution and analytics</li>
                    <li>Agile workflows ensuring fast turnaround and adaptability to campaign needs</li>

                </ul>
              </div>


              
              {/* Results */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Improved brand visibility and engagement across LinkedIn</li>
                    <li>Consistent delivery of high-quality marketing assets supporting AI thought leadership</li>
                    <li>Actionable campaign insights through click analysis and MQL reporting</li>
                    <li>Streamlined digital presence through timely website updates</li>

                </ul>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
                <p>By providing end-to-end creative and digital marketing support, Loginat Solutions  helped Vitria Technology strengthen its market presence and drive measurable engagement. The engagement highlights Loginat Solutions’ ability to deliver custom, data-driven marketing solutions for advanced technology companies.</p>
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

export default IntegratedCreativeandDigitalMarketingSupport