import React, { useState} from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage5 from '../../assets/client-stories/hcl.jpeg'
import HCLTech from '../../assets/HCLTech.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Timeline from "../../components/client-stories-modules/Timeline";


const impactData = [
  {
    title: "Business Enablement",
    points: [
      "Supported multiple high-value bid pursuits",
      "Contributed to winning strategic enterprise deals through impactful presentations and storytelling",
    ],
  },
  {
    title: "Employee Engagement",
    points: [
      "Increased participation across internal events and programs",
      "Higher visibility of organizational culture initiatives",
    ],
  },
  {
    title: "Inclusion & Diversity",
    points: [
      "Strengthened engagement in women-focused programs",
      "Improved awareness of inclusion initiatives",
    ],
  },
  {
    title: "Community & Culture",
    points: [
      "Increased hobby and passion club memberships",
      "Enhanced cross-team collaboration and morale",
    ],
  },
  {
    title: "Learning Adoption",
    points: [
      "Improved participation in L&D programs",
      "Stronger communication effectiveness for training initiatives",
    ],
  },
  {
    title: "Onboarding Experience",
    points: [
      "Structured, brand-aligned induction presentations",
      "Enhanced new-joiner orientation and cultural assimilation",
    ],
  },
  {
    title: "Client Experience",
    points: [
      "Elevated perception during client visits",
      "Stronger capability storytelling through immersive environments",
    ],
  },
];


function IndiaMart() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
     <>
      <SubpageHeroSection
        onClick={() => setIsPopupOpen(true)}
        title={"Client Impact Stories"}
        subtitle={"A curated collection of the successes we've built with our clients—highlighting their goals, our solutions, and the results achieved."}
        buttontext={"Connect with us"}
        children={""}
      />
      <section className="margin-top-Subhero">

        {/* Banner */}
        <div className="max-w-6xl mx-auto py-10 px-6 ">
        <div className='relative p-5 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/10 mb-10' 
        style={{backgroundImage: `url(${bgImage5})`}}
        >
            <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>Technologies</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>08</span>/08</p>
                </div>
                <div>
                   <div>
                    <img src={HCLTech} alt=""  className='w-40'/>
                    <p className='text-left mt-5 text-lg font-semibold'>Internal & Client Experience Campaigns, Engagement Platforms, and Experiential Design</p>
                    <p className='text-left mt-2 text-sm'><strong>Client</strong>: IT Services & Consulting</p>
                    <p className='text-left mt-2 text-sm'><strong>Services</strong>: Internal Campaigns • Client Experience Design • Presentation Design • Experiential Branding • Employee Engagement Platforms</p>              
                    <p className='text-left mt-2 text-sm'><strong>Engagement Model</strong>: Extended Creative & Experience Partner (Dedicated)</p>       
                   </div>
                </div>
            </div>
        </div>
        <div className="mb-10">

              {/* Business Challenge */}
                             
              <div className="my-5 bg-gray-100 p-5 rounded-2xl">
                <h2 className="text-2xl md:text-3xl mb-6">Client Overview</h2>                
                <p className="mt-5">
                  HCL Technologies is a global technology enterprise serving Fortune 500 clients while supporting a vast, multicultural workforce. The organization required a creative partner capable of designing experience-led campaigns and communication platforms for both internal employees and external client stakeholders.
                </p>
                <p className="mt-5">Loginat Solutions partnered with HCL to build integrated engagement ecosystems spanning employee programs, client experiences, and leadership communications. </p>
              </div>

              <div>
                <Timeline />
              </div>

              {/* Scope of Work */}

              <div className="py-10">
                <h2 className="text-2xl md:text-3xl my-3">Business Challenge</h2>
                <p className="mb-6 text-lg">Required a unified creative approach to drive engagement, communication clarity, and experiential impact across two critical audiences:</p>
                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-[var(--purple-light)] p-5 rounded-xl">
                    <h3 className="font-semibold text-lg mb-2">Internal Audience</h3>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>Promoting employee Learning & development initiatives</li>
                      <li>Driving inclusion and women empowerment programs</li>
                      <li>Enabling hobby club participation</li>
                      <li>Supporting Learning & Development adoption</li>
                      <li>Creating structured onboarding experiences</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2 bg-gray-200 p-5 rounded-xl">
                    <div className="grid md:grid-cols-2 gap-10">
                      <div>
                        <h3 className="font-semibold text-lg mb-2">External Client Audience</h3>
                        <ul className="list-disc ml-5 space-y-2">
                          <li>Designing immersive environments for client visits</li>
                          <li>Communicating HCL's capabilities through experiential storytelling</li>
                          <li>Supporting high-value bids and strategic presentations</li>
                        </ul>                        
                      </div>
                      <div>
                          <img src={""} alt="" className="w-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-semibold mt-5">The challenge was ensuring brand consistency and engagement effectiveness across both workforce and customer ecosystems.</p>
              </div>

              {/* Solution */}

              <div className="py-10">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Engagement</h2>
                <p className="mb-6 text-lg">Loginat Solutions delivered a multi-dimensional experience and communications framework:</p>

                <div className="grid md:grid-cols-3 gap-5">
                  <div className="bg-[var(--pink-light)] p-5 rounded-xl">
                    <p className="font-semibold text-lg mb-2">Internal Campaign Platforms</p>
                    <ul className="list-disc ml-5 space-y-2">
                      <li>Program-specific internal websites</li>
                      <li>Employee upliftment campaign creatives</li>
                      <li>HR and culture communication ecosystems</li>
                    </ul>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-[var(--pink-light)] p-5 rounded-xl">
                      <p className="font-semibold text-lg mb-2">Women Empowerment & Inclusion Initiatives</p>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>Program-specific internal websites</li>
                        <li>Campaign branding and storytelling systems</li>
                        <li>Event communication and awareness creatives</li>
                      </ul>
                    </div>
                    <div className="grid md:grid-cols-2 gap-5 mt-5">
                      <div className="bg-gray-200 p-5 rounded-xl">
                        <p className="font-semibold text-lg mb-2">Hobby Club Programs</p>
                        <ul className="list-disc ml-5 space-y-2">
                          <li>Program-specific internal website</li>
                          <li>Identity design for employee communities</li>
                          <li>Membership drives and engagement campaigns</li>
                        </ul>
                      </div>
                      <div className="bg-gray-200 p-5 rounded-xl">
                        <p className="font-semibold text-lg mb-2">Learning & Development Campaigns</p>
                        <ul className="list-disc ml-5 space-y-2">
                          <li>Program-specific internal website</li>
                          <li>Training program promotions</li>
                          <li>Certification and learning journey creatives</li>
                        </ul>
                      </div>                      
                    </div>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-5 mt-5">
                  <div className="bg-[var(--purple-light)] p-5 rounded-xl">
                      <p className="font-semibold text-lg mb-2">Employee Induction & Onboarding</p>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>End-to-end employee induction presentations</li>
                        <li>Onboarding journey storytelling decks</li>
                        <li>Culture, values, and policy communication modules</li>
                      </ul>
                  </div>
                  <div className="bg-[var(--purple-light)] p-5 rounded-xl">
                       <p className="font-semibold text-lg mb-2">Client Experience & Experiential Design</p>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>Experience centre branding</li>
                        <li>Environmental graphics and storytelling walls</li>
                        <li>Capability showcase installations</li>
                      </ul>
                  </div>
                  <div className="bg-[var(--purple-light)] p-5 rounded-xl">
                      <p className="font-semibold text-lg mb-2">Presentation & Bid Support</p>
                      <ul className="list-disc ml-5 space-y-2">
                        <li>Strategic sales presentations</li>
                        <li>Leadership keynote decks</li>
                        <li>Bid and proposal storytelling frameworks</li>
                      </ul> 
                  </div>
                </div>
              </div>

              
              {/* Results */}
              <div className="grid md:grid-cols-2 gap-5 py-10">
                <div>
                  <h2 className="text-2xl md:text-3xl mb-6">Solution Approach</h2>
                  <p className="font-semibold my-5">Loginat Solutions implemented an integrated engagement model bridging internal communications and client experience design:</p>
                  <ul className="list-disc ml-5 space-y-2">
                      <li>Stakeholder alignment across HR, L&D, and Marketing</li>
                      <li>UX-structured internal campaign platforms</li>
                      <li>Culture-led storytelling for employee programs</li>
                      <li>Experience design for physical client environments</li>
                      <li>Executive-ready presentation systems for sales pursuits</li>
                      <li>Structured onboarding communication frameworks</li>
                  </ul>
                  <p className="font-semibold mt-3">This approach ensured seamless narrative continuity from employee experience to client perception.</p>
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </div>

              <div className="py-10">
                <h2 className="text-2xl md:text-3xl mb-6">Impact & Outcomes</h2>
                
                <div className="grid md:grid-cols-4 gap-5">
                {impactData.map((item, index) => (
                  <div className="bg-white shadow-md rounded-xl p-5 border" key={index}>
                    <p className="font-semibold mb-2">{item.title}</p>
                    <ul className="list-disc ml-5 space-y-2">
                      {item.points.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                ))}              
                </div>

              </div>

               <div className="py-10">
                  <h2 className="text-2xl md:text-3xl mb-6">Client Value Delivered</h2>
                  <ul className="flex gap-5 text-center">
                    <li className="bg-gray-50 border shadow-md rounded-xl p-5">Unified engagement across employees and clients</li>
                    <li className="bg-gray-50 border shadow-md rounded-xl p-5">Stronger employer branding and workplace culture</li>
                    <li className="bg-gray-50 border shadow-md rounded-xl p-5">Revenue enablement through bid-winning assets</li>
                    <li className="bg-gray-50 border shadow-md rounded-xl p-5">Scalable presentation and experience design systems</li>
                  </ul>   
                </div> 

               <div className="mt-5">
                <h2 className="text-2xl md:text-3xl mb-6">Conclusion</h2>
                <p className="my-5">The engagement highlights Loginat Solutions' ability to design holistic experience ecosystems spanning workforce engagement and client storytelling. By integrating internal campaigns, onboarding frameworks, experiential environments, and strategic presentations, Loginat enabled HCL Technologies to strengthen culture, drive participation, and enhance client perception — delivering impact across both people and business outcomes.</p>
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