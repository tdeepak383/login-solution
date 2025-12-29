import React, { useState} from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage5 from '../../assets/client-stories/indiamart.jpg'
import indiamartLogo from '../../assets/indiamart-logo2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function IndiaMart() {

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
        style={{backgroundImage: `url(${bgImage5})`}}
        >
            <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>B2B Portal</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>05</span>/07</p>
                </div>
                <div className=''>
                   <div>
                     <img src={indiamartLogo} alt=""  className='w-40'/>
                     <p className='text-left mt-5 text-sm'>Leading B2B Portal, India - A prominent digital marketplace connecting businesses across multiple industries.</p>
                    <h2 className='font-bold text-3xl my-6 '>Long-Term Backend Operations Support for a Leading B2B Portal in India</h2>  
                                         
                   </div>
                </div>
            </div>
        </div>


        <div className="mb-10">

              {/* Business Challenge */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Business Challenge</h2>                
                <p className="mt-5">
                  The client required a reliable partner to manage critical backend operations while supporting rapid business growth and frequent process changes. The challenge was to maintain accuracy, speed, and customer satisfaction in a highly dynamic environment where workflows and requirements evolved continuously.
                </p>
              </div>

              {/* Scope of Work */}

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Work</h2>
                <p className="mb-6 text-lg">Loginat Solutions  has been supporting the client for nearly 15 years, providing end-to-end backend process support, including:</p>

                <ul className="list-disc ml-5 space-y-2">
                    <li>Dedicated executive support for <strong>customer interactions</strong></li>
                    <li><strong>Catalog creation, updates, and hosting</strong></li>
                    <li>Ongoing operational support aligned with changing business processes</li>
                </ul>
              </div>

              {/* Solution */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Solution</h2>
                <p className="mb-6 text-lg">Loginat Solutions  established a <strong>dedicated, scalable team model</strong> tailored specifically for the client:</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Set up a specialized team of trained executives focused on daily operations</li>
                    <li>Implemented a strong management structure comprising Managers, Team Leads, Quality Analysts, and Trainers</li>
                    <li>Ensured continuous training and process updates to quickly adapt to evolving requirements</li>
                    <li>Maintained strict quality checks to ensure accuracy, consistency, and service excellence</li>
                </ul>
              </div>


              
              {/* Results */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Results</h2>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Sustained a successful partnership for over 15 years</li>
                    <li>Delivered consistent, high-quality backend support despite frequent process changes</li>
                    <li>Improved operational efficiency and customer experience</li>
                    <li>Built a stable, adaptable team capable of scaling with the client's growth</li>
                </ul>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
                <p>The long-standing association reflects Loginat Solutions’ ability to provide robust, adaptable, and reliable backend process support. Through strong leadership, quality-driven execution, and continuous learning, Loginat Solutions  remains a trusted operational partner for one of India’s leading B2B portals.</p>
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

export default IndiaMart