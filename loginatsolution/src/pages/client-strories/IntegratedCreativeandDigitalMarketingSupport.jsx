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

import Image1 from '../../assets/client-stories/Brand-Visibility.png'
import Image2 from '../../assets/client-stories/solution-approch.png'

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
          <div className='relative p-5 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/55' 
          style={{backgroundImage: `url(${bgImage3})`}}
          >
              <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                  <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                      <h2>AI-driven</h2>
                  </div>
                  <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                      <p className='text-sm'><span className='text-xl font-semibold'>03</span>/08</p>
                  </div>
                  <div className=''>
                    <div>
                      <img src={vitriaLogo} alt=""  className='w-40'/>
            
                        <p className='text-left mt-5 text-lg font-semibold'>Creative Campaigns, Thought Leadership & Digital Marketing Enablement</p>
                        <p className='text-left mt-2 text-sm'><strong>Client</strong>: Enterprise AI & Analytics Technology</p>
                        <p className='text-left mt-2 text-sm'><strong>Services</strong>: Campaign Design • Social Media Creatives • Thought Leadership Assets • Whitepapers & Case Studies • PowerPoint Presentations • Email Campaigns • Marketing Automation • Website Content Management • Performance Reporting</p>              
                        <p className='text-left mt-2 text-sm'><strong>Engagement Model</strong>: Dedicated Creative & Digital Marketing Partner</p>
                    </div>
                    
                  </div>
              </div>
          </div>
        </div>

        {/* Business Challenge */}
        <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto py-10 px-6">
          <h2 className="text-2xl md:text-3xl mb-6">Business Challenge</h2>                
          <p className="mt-5">
            Vitria Technology required a creative and digital marketing partner capable of translating complex AI and analytics solutions into compelling, market-ready narratives. Beyond content creation, the mandate extended to managing always-on social media engagement, executing performance-driven email campaigns, and generating measurable pipeline insights — all while aligning to evolving product marketing priorities.
          </p>
          <p className="mt-3">The core challenge was integrating creative storytelling with marketing operations to drive both visibility and qualified demand.</p>
        </div>
        </div>

        {/* Scope of Work */}

        <div className="max-w-6xl mx-auto py-10 px-6">
          <h2 className="text-2xl md:text-3xl mb-3">Scope of Work</h2>
          <p className="mb-6 text-lg">Loginat Solutions delivered an integrated suite of creative and digital marketing services:</p>

          <ul className="grid md:grid-cols-4 grid-cols-1 gap-5">
              <li className="border font-semibold rounded-xl p-5">Social media campaign design and content production</li>
              <li className="border font-semibold rounded-xl p-5">Whitepapers, case studies, and long-form thought leadership assets</li>
              <li className="border font-semibold rounded-xl p-5">Sales and leadership PowerPoint presentations</li>
              <li className="border font-semibold rounded-xl p-5">Dedicated LinkedIn management and optimization</li>
              <li className="border font-semibold rounded-xl p-5">HubSpot-driven email campaign execution</li>
              <li className="border font-semibold rounded-xl p-5">Click-through and engagement analytics reporting</li>
              <li className="border font-semibold rounded-xl p-5">Marketing Qualified Lead (MQL) tracking and reporting</li>
              <li className="border font-semibold rounded-xl p-5">Ongoing website content updates and publishing</li>
          </ul>
        </div>

        {/* Solution */}
        <div className="gradient text-white">
          <div className="max-w-6xl mx-auto py-10 px-6">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h2 className="text-2xl md:text-3xl mb-3">Solution Approach</h2>
                <p className="mb-6 text-lg">A cross-functional delivery pod was deployed combining strategy, creative, and marketing operations:</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Social media strategists driving LinkedIn content calendars and engagement plans</li>
                    <li>Designers and content specialists producing brand-aligned assets</li>
                    <li>Marketing automation experts executing and analyzing HubSpot campaigns</li>
                    <li>Agile sprint workflows enabling rapid campaign launches and iterations</li>
                </ul>
                <p>This integrated model ensured continuity from content creation to performance measurement.</p>
              </div>
              <div>
                <img src={Image2} alt="Solution Approach" className="w-9/12 mx-auto" />
              </div>
            </div>
          </div>
        </div>
        {/* Results */}

        <div className="max-w-6xl mx-auto py-10 px-6">

          <h2 className="text-2xl md:text-3xl mb-6">Impact & Results</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-gray-200 flex flex-col rounded-xl">
              <div className="p-5">
                <p className="text-lg font-bold mb-3">Brand Visibility & Thought Leadership</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li>Elevated LinkedIn presence through consistent, insight-led content</li>
                    <li>Strengthened positioning of Vitria’s AI solutions in enterprise conversations</li>
                </ul>
              </div>
              <div className="">
                <img src={Image1} alt="Vitria Brand Visibility" className="w-[60%] p-2 mx-auto" />
              </div>
            </div>
            <div>
              <div className="bg-gray-200 p-5 rounded-xl">
              <p className="text-lg font-bold mb-2">Demand Generation Insights</p>
              <ul className="list-disc ml-5 space-y-2">
                  <li>Actionable click-through analytics from HubSpot campaigns</li>
                  <li>Structured MQL reporting enabling marketing-to-sales alignment</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-5 my-5 rounded-xl">
              <p className="text-lg font-bold mb-2">Sales Enablement</p>
              <ul className="list-disc ml-5 space-y-2">
                  <li>High-impact presentation decks supporting leadership and pre-sales teams</li>
                  <li>Clearer articulation of complex AI value propositions</li>
              </ul>
            </div>
            <div className="bg-gray-200 p-5 rounded-xl">
              <p className="text-lg font-bold mb-2">Digital Ecosystem Efficiency</p>
              <ul className="list-disc ml-5 space-y-2">
                  <li>Streamlined website updates ensuring timely campaign and product messaging</li>
                  <li>Improved consistency across owned digital touchpoints</li>
              </ul>
            </div>
            </div>
          </div>
        </div>

        {/* Conclusion */}
        <div className="gradient text-white">
          <div className="max-w-6xl mx-auto py-10 px-6">
            <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
            <p>Through an integrated creative + marketing operations model, Loginat Solutions enabled Vitria Technology to transform complex AI narratives into measurable marketing outcomes. The partnership demonstrates Loginat's capability to drive brand visibility, engagement, and qualified demand for deep-tech enterprises through data-informed creative execution.</p>
          </div>
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