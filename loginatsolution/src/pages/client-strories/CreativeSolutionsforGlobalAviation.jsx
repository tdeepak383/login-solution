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
                    <p className='text-sm'><span className='text-xl font-semibold'>01</span>/08</p>
                </div>
                <div className=''>
                   <div>
                     <img src={KLMLogo} alt=""  className='w-40'/>
                     <p className='text-left mt-5 text-sm'>Creative Campaigns, Engagement & Event Experience Design</p>
                    <h2 className='font-bold text-3xl my-6 '>Air France & KLM</h2> 
                     
                   </div>                  
                </div>
            </div>
        </div>


        <div className="mb-10">

              {/* Business Challenge */}
                <p className='text-left mt-5 text-sm'><strong>Client</strong>: Aviation / Airline Industry</p>
                <p className='text-left mt-5 text-sm'><strong>Services</strong>: Campaign Design • Motion • Interactive • PowerPoint Presentations • Internal Communications • Experiential Design</p>              
                <p className='text-left mt-5 text-sm'><strong>Engagement Model</strong>: Dedicated Creative Partner</p>   
              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Designing High-Impact Campaign Experiences for Global Aviation Leaders</h2>                
                <p className="mt-5">
                  Loginat Solutions partnered with Air France and KLM to deliver fast-turnaround, brand-compliant creative solutions powering internal engagement, global events, airport experiences, and communication campaigns.
                </p>
                <button className="bg-[var(--purple)] text-white px-6 py-3 rounded-full mt-5">View Work</button>
                <button className="bg-[var(--purple)] text-white px-6 py-3 rounded-full mt-5 ml-5">Discuss a Similar Project</button>
              </div>

              {/* Scope of Work */}

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Client Overview</h2>
                <p className="mb-6 text-lg">Air France and KLM Royal Dutch Airlines are among the world’s most recognized full-service airlines, operating extensive international networks and large employee ecosystems.</p>
                <p className="mb-6 text-lg">They required a creative partner capable of supporting high-visibility initiatives across geographies while adhering to strict brand governance.</p>

                
              </div>

              {/* Solution */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-3">Business Challenge</h2>
                <p className="mb-6 text-lg">Operating in a time-critical communications environment, the airlines needed:</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Rapid development of campaign assets for events and announcements</li>
                  <li>Engaging formats to improve employee and stakeholder participation</li>
                  <li>Interactive experiences beyond static communication</li>
                  <li>Experiential creatives for airport and on-ground environments</li>
                  <li>Absolute adherence to global brand guidelines</li>
                  <li>Scalable support across simultaneous initiatives</li>
                </ul>
              </div>


              
              {/* Results */}

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Scope of Engagement</h2>
                <p className="mb-6 text-lg">Loginat Solutions functioned as an extended creative studio delivering:</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Event campaign identity & collateral systems</li>
                  <li>Internal communication toolkits</li>
                  <li>External marketing assets</li>
                  <li>Awareness & corporate videos</li>
                  <li>Gamified engagement modules</li>
                  <li>Campaign PowerPoint presentations & event communication decks</li>
                  <li>Airport experience creatives & environmental branding</li>
                  <li>Agent Meet event creatives including backdrops & stage design</li>
                  <li>Custom-designed board games for engagement</li>
                  <li>Online interactive games for digital participation</li>
                </ul>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Solution Delivered</h2>
                <p className="font-semibold">We implemented an agile, pod-based delivery model:</p>
                <p className="text-xl font-bold my-5">Discovery → Concept → Design → Motion → Interactive → Launch</p>
                <p className="font-semibold">Key execution pillars:</p>
                <ul className="list-disc ml-5 space-y-2 mt-5">
                  <li>Rapid requirement decoding workshops</li>
                  <li>Brand-aligned creative concepting</li>
                  <li>Motion graphics & video storytelling</li>
                  <li>Executive-ready PowerPoint presentation design</li>
                  <li>Physical + digital gamification mechanics</li>
                  <li>Experiential design for airport and event environments</li>
                  <li>Parallel asset production pipelines</li>

                </ul>
              </div>
              <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Metrics & Impact Callouts</h2>
                
                <p className="font-semibold text-lg my-5">Delivery Efficiency</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Supporting Aviation Campaigns Since 2010</li>
                  <li>72-hour turnaround on fast-track requests</li>
                </ul>

                <p className="font-semibold text-lg my-5">Engagement</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li><strong>Event</strong>: Agent Meet Engagement Program</li>
                  <li><strong>Solution</strong>: Board Games • Backdrops • Online Gamification</li>
                  <li><strong>Impact</strong>: 2-3x Higher Participation vs. Previous Formats</li>
                </ul>

                <p className="font-semibold text-lg my-5">Campaign Scale</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Supported multiple global & regional events</li>
                  <li>Assets deployed across airport, on-ground, digital, and internal platforms</li>
                </ul>
                <p className="font-semibold text-lg my-5">Brand Compliance</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>100% alignment with Air France & KLM brand systems</li>
                  <li>Zero rework on final master approvals (post-governance review)</li>
                </ul>


                <h2 className="text-2xl md:text-3xl my-6">Experience Highlights</h2>
                <p className="font-semibold">Airport Experience Creatives</p>
                <p className="mb-6 text-lg">Designed immersive airport branding and passenger-facing campaign creatives including standees, buntings, digital display adaptations, wayfinding visuals, and environmental storytelling aligned to airline brand standards.</p>


                <p className="font-semibold">Campaign & Event Design</p>
                <p className="mb-6 text-lg">High-visibility event creatives including stage visuals, branded backdrops, standees, digital banners, and delegate engagement kits for global programs and Agent Meet forums.</p>

                <p className="font-semibold">Interactive & Gamification Experiences</p>
                <p className="mb-6 text-lg">Custom-designed engagement formats including:</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Tailor-made board games themed around airline programs</li>
                    <li>Reward-led participation mechanics</li>
                    <li>Online interactive games for hybrid engagement</li>
                    <li>Quiz and challenge modules driving awareness and learning</li>
                </ul>
                <p className="my-3">These experiences transformed passive audiences into active participants.</p>



                <p className="font-semibold">PowerPoint Presentation Experiences</p>
                <p className="mb-6 text-lg">Strategically designed presentation decks supporting campaign storytelling, leadership messaging, and event communication. Integrated video, data visualization, and brand-aligned layouts ensured clarity, engagement, and executive impact.</p>
              
              
                <p className="font-semibold">Technology & Capabilities</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>UX/UI Design (Figma, Adobe XD)</li>
                  <li>Visual Design (Photoshop, Illustrator, InDesign)</li>
                  <li>Motion (After Effects, Premiere Pro)</li>
                  <li>Presentation Design (PowerPoint, Keynote)</li>
                  <li>Gamification Frameworks</li>
                  <li>Experiential & Environmental Design Systems</li>
                </ul>


                <p className="font-semibold mt-5">Client Value Delivered</p>
                <ul className="list-disc ml-5 space-y-2">
                  <li>Reliable partner for time-sensitive launches</li>
                  <li>Scalable creative bandwidth on demand</li>
                  <li>Experiential engagement across airport and event ecosystems</li>
                  <li>Interactive participation beyond static communications</li>
                  <li>Enterprise-grade brand governance adherence</li>
                </ul>
              </div>
              <div className="mt-10">
                <h3 className="text-3xl font-bold">Need a creative partner for high-velocity campaigns?</h3>
                <p className="text-lg mt-5">Let’s build engagement experiences that perform under pressure.</p>
                <button className="bg-[var(--purple)] text-white px-6 py-3 rounded-full mt-5">Contact Us</button>
                <button className="bg-[var(--purple)] text-white px-6 py-3 rounded-full mt-5 ml-5">View More Case Studies</button>
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