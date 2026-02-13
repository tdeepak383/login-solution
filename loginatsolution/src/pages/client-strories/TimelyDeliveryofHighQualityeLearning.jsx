import React, { useState } from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage1 from '../../assets/client-stories/leading-global.jpg'
import apartaLogo from '../../assets/aparta-logo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function TimelyDeliveryofHighQualityeLearning() {

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


         <div className='relative p-5 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/65 mb-10' 
        style={{backgroundImage: `url(${bgImage1})`}}
        >
            <div className='relative pt-60 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>eLearning</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>05</span>/08</p>
                </div>
                <div className=''>
                   <div>
                     <img src={apartaLogo} alt=""  className='w-40'/>
                     <p className='text-left mt-5 text-sm'>A leading India-based eLearning and digital content solutions provider serving global enterprises and publishers.</p>
                    <h2 className='font-bold text-3xl my-6 '>Timely Delivery of High-Quality eLearning Modules for Aptara</h2>                    
                     
                   </div>
                   
                </div>
            </div>
        </div>



          <div className="mb-10">

              {/* Business Challenge */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Business Challenge</h2>                
                <p className="mt-5">
                  Aptara required rapid development and delivery of multiple eLearning modules to support time-sensitive client programs. The key challenge was balancing <strong>strict delivery timelines</strong> with <strong>high-quality instructional design</strong>, visual consistency, and technical accuracy across modules.
                </p>
              </div>

              {/* Scope of Work */}

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Work</h2>
                <p className="mb-6 text-lg">Loginat Solutions  was engaged to:</p>

                <ul className="list-disc ml-5 space-y-2">
                  <li>Design and build end-to-end <strong>eLearning modules</strong></li>
                  <li>Develop interactive and engaging learning content aligned with client guidelines</li>
                  <li>Ensure compatibility with Aptara’s delivery platforms and standards</li>
                  <li>Deliver modules within <strong>tight, milestone-driven timelines</strong> without compromising quality</li>
                </ul>
              </div>

              {/* Solution */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Solution</h2>
                <p className="mb-6 text-lg">Loginat Solutions  implemented a structured and agile development approach:</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Established a streamlined production workflow to handle parallel module development</li>
                  <li>Collaborated closely with Aptara's teams for rapid feedback and alignment</li>
                  <li>Applied strong quality assurance checks at every stage—content, design, functionality, and compliance</li>
                  <li>Leveraged experienced designers and developers to ensure consistency and accuracy</li>
                </ul>
              </div>


              
              {/* Results */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Successfully delivered eLearning modules <strong>on time</strong>, meeting all critical deadlines</li>
                  <li>Maintained <strong>high-quality output</strong> across design, interactivity, and learning effectiveness</li>
                  <li>Enabled Aptara to meet its client commitments efficiently and scale delivery during peak demand</li>
                  <li>Strengthened long-term collaboration through reliability and performance excellence</li>
                </ul>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
                <p>By combining process efficiency with a strong focus on quality, Loginat Solutions  proved to be a dependable eLearning development partner for Aptara. The engagement highlights Loginat Solutions’ capability to deliver <strong>time-sensitive eLearning solutions</strong> while maintaining the highest standards of quality.</p>
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

export default TimelyDeliveryofHighQualityeLearning