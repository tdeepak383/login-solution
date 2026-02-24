import React, { useEffect, useState} from "react";
import SubpageHeroSection from "../../components/subpageHeroSection";
import PopUp from "../../components/PopUp";
import data from '../../data/clientstories.json'
import OtherStoriesCard from "../../components/OtherStoriesCard";
import bgImage7 from '../../assets/client-stories/mmtv-banner.jpeg'
import MMTVLogo from '../../assets/client-stories/MMTV-logo.png'

import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

function Counter({ end, duration = 4000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = 20;
    const steps = duration / incrementTime;
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
    </span>
  );
}

function MishumishtiTv() {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
    
  return (
     <>
      

      <SubpageHeroSection
        onClick={() => setIsPopupOpen(true)}
        title={"Client Impact Stories"}
        subtitle={"A curated collection of the successes we’ve built with our clients-highlighting their goals, our solutions, and the results achieved."}
        buttontext={"Connect with us"}
        children={""}
      />
      <section className="margin-top-Subhero">

        {/* Banner */}
        <div className="max-w-6xl mx-auto py-10 px-6 ">
          <div className='relative p-5 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/55' 
          style={{backgroundImage: `url(${bgImage7})`}}
          >
              <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                  <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                      <h2>Kids’ Digital Entertainment</h2>
                  </div>
                  <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                      <p className='text-sm'><span className='text-xl font-semibold'>04</span>/09</p>
                  </div>
                  <div className=''>
                    <div>
                      <img src={MMTVLogo} alt=""  className='w-40'/>
                          <p className='text-left mt-5 text-lg font-semibold'>Digital Platform, YouTube Production & Social Media Growth</p>
                          <p className='text-left mt-2 text-sm'><strong>Client</strong>: Mishumishti TV</p>
                          <p className='text-left mt-2 text-sm'><strong>Industry</strong>: Kids’ Digital Entertainment</p>              
                          <p className='text-left mt-2 text-sm'><strong>Engagement Model</strong>: Website Development + Creative Production + Social Media Management</p>       
                          <p className='text-left mt-2 text-sm'><strong>Website</strong>: https://Mishumishtitv.com/</p>       
                    </div>
                  </div>
              </div>
          </div>
        </div>

        

              {/* Business Context */}
              <div className="bg-gray-100">
                <div className="max-w-6xl mx-auto py-10 px-6 ">
                  <h2 className="text-2xl md:text-3xl mb-6">Business Context</h2>                
                  <p className="mt-5">
                    Mishumishti TV is a children’s entertainment brand focused on delivering engaging, educational video content for early learners. The brand required a unified digital ecosystem to strengthen online presence, streamline content publishing, and scale audience engagement across platforms.
                  </p>
                  <p className="mt-5">
                    We partnered as an end-to-end creative and digital execution partner covering website, YouTube production, and Instagram growth.
                  </p>
                </div>
              </div>
              {/* Scope of Engagement */}

              <div className="max-w-6xl mx-auto py-10 px-6">
                <h2 className="text-2xl md:text-3xl mb-3">Scope of Engagement</h2>
                <div className="grid md:grid-cols-2 gap-5 mt-10">
                  <div className="bg-[var(--purple-light)] p-5 rounded-lg">
                      <p className="font-semibold text-xl mb-2">Website Design & Development</p>

                      <ul className="list-disc ml-5 space-y-2">
                          <li>UX strategy & information architecture</li>
                          <li>Kid-friendly, parent-trusted UI design</li>
                          <li>Responsive development (mobile-first)</li>
                          <li>Video-integrated content structure</li>
                          <li>SEO-ready framework</li>
                          <li>Performance optimization</li>
                      </ul>
                      <p className="mt-4"><strong>Outcome:</strong> A vibrant, intuitive platform enabling seamless content discovery and brand storytelling.</p>
                  </div>
                  <div className="bg-[var(--purple-light)] p-5 rounded-lg">
                      <p className="font-semibold text-xl mb-2">Instagram Management</p>
                      <p>We managed Instagram as a visibility and traffic engine.</p>
                      <p className="my-4"><strong>Scope:</strong></p>
                      <ul className="list-disc ml-5 space-y-2">
                          <li>Content calendar planning</li>
                          <li>Reels & Shorts repurposing</li>
                          <li>Carousel creatives</li>
                          <li>Caption & hashtag strategy</li>
                          <li>Community engagement</li>
                          <li>Performance tracking</li>

                      </ul>
                      <p className="mt-4"><strong>Objective:</strong> Drive discovery, build parent community, and funnel traffic to YouTube & website.</p>
                  </div>
                </div>
                
                <div className="bg-[var(--purple-light)] p-5 rounded-lg mt-5">
                    <p className="font-semibold text-xl mb-2">YouTube Content Production</p>
                    <p>We functioned as Mishumishti TV’s extended creative studio managing:</p>
                    
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
                      <div className="bg-white p-4 rounded-xl">
                       <p className="font-semibold mb-2">Creative & Production</p>
                        <ul className="list-disc ml-5 space-y-2">
                          <li>Episode ideation & storyboarding</li>
                          <li>Animated visual development</li>
                          <li>Educational storytelling formats</li>
                      </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                      <p className="font-semibold mb-2">AI-Enabled Workflows</p>
                      <ul className="list-disc ml-5 space-y-2">
                          <li>AI visual enhancement</li>
                          <li>Background generation</li>
                          <li>Audio & subtitle automation</li>
                          <li>Content repurposing pipelines</li>

                      </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <p className="font-semibold mb-2">Deliverables</p>
                        <ul className="list-disc ml-5 space-y-2">
                            <li>Animated episodes</li>
                            <li>YouTube Shorts</li>
                            <li>Reels cuts</li>
                            <li>Thumbnail systems</li>
                            <li>Metadata optimization</li>
                        </ul>
                      </div>
                      <div className="bg-white p-4 rounded-xl">
                        <p className="font-semibold mb-2">Creative Tool Stack</p>
                      <ul className="list-disc ml-5 space-y-2">
                          <li>Adobe Photoshop</li>
                          <li>Adobe Illustrator</li>
                          <li>Adobe After Effects</li>
                          <li>Adobe Premiere Pro</li>
                          <li>Adobe Express </li>
                      </ul>
                      </div>
                    </div>
                    
                </div>
                
              </div>

              {/* Measurable Impact */}
              <div className="bg-gray-100">
              <div className="max-w-6xl mx-auto py-10 px-6 ">
                <h2 className="text-2xl md:text-3xl mb-3">Measurable Impact</h2>
                
                <div className="py-5">
                <p className="mb-6 text-xl font-semibold">Website Performance</p>

                <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 text-center">
                  <p className="bg-white p-4 rounded-xl border">
                    <span className="text-3xl font-semibold text-[var(--purple)]">↑ 38%</span> <br />
                    Increase in traffic <br /> (90 days)
                  </p>
                  <p className="bg-white p-4 rounded-xl border">
                    <span className="text-3xl font-semibold text-[var(--purple)]">↑ 27%</span> <br />
                    Session duration growth
                  </p>
                  <p className="bg-white p-4 rounded-xl border">
                    <span className="text-3xl font-semibold text-[var(--purple)]">↓ 32%</span> <br />
                    Bounce rate reduction
                  </p>
                  <p className="bg-white p-4 rounded-xl border">
                    <span className="text-3xl font-semibold text-[var(--purple)]">↑ 45%</span> <br />
                    Mobile <br /> engagement
                  </p>
                  <p className="bg-white p-4 rounded-xl border">
                    <span className="text-3xl font-semibold text-[var(--purple)]">&lt; 3s</span> <br />
                    Load speed optimized in secs
                  </p>
                </div>
              </div>
                <div className="py-5">
                    <p className="mb-6 text-xl font-semibold">YouTube Growth</p>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 text-center">
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">2.4X</span> <br />
                        Increase in <br />content output</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">↑ 58%</span> <br />
                        Thumbnail CTR improvement</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">↑ 41%</span> <br />
                        Watch time <br /> growth</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">3.1X</span> <br />
                        Reach via <br />Shorts strategy</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">↑ ~35%</span> <br />
                        Subscriber <br />growth</p>
                    </div>
                </div>
                
                <div className="py-5">
                    <p className="mb-6 text-lg font-semibold">Instagram Performance</p>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 text-center">
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">3X</span> <br />
                          Reel reach growth</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">↑ 52%</span> <br />
                          Profile visits</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">↑ 40%</span> <br />
                          Follower growth</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">2.2X</span> <br />
                          Engagement rate increase</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">↑ 28%</span> <br />
                          Traffic contribution to YouTube & website</p>
                    </div>
                </div>
                <div className="py-5">
                    <p className="mb-6 text-xl font-semibold">Production Efficiency</p>
                    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 text-center">
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">↓ 30-35%</span> <br />
                          Faster video production cycles</p>
                        <p className="bg-white p-4 rounded-xl border">
                          <span className="text-3xl font-semibold text-[var(--purple)]">↓ 40%</span> <br />
                          Thumbnail design time</p>
                        <p className="bg-white p-4 rounded-xl border">
                          Scalable weekly publishing workflow established</p>
                    </div>
                </div>  
              </div>
              </div>



              {/* Value Delivered */}
              <div className="gradient">
                <div className="max-w-6xl mx-auto py-10 px-6 ">
                  <h2 className="text-2xl md:text-3xl mb-6 text-white">Value Delivered</h2>
                  <div className="relative">
                    <div className="absolute top-1/2 hidden md:block left-20 w-[85%] h-[2px] bg-white z-0"></div>
                    <ul className="relative grid md:grid-cols-5 gap-5 z-10">                    
                      <li className="bg-white p-3 rounded-lg text-center font-semibold">Unified digital brand ecosystem</li>
                      <li className="bg-white p-3 rounded-lg text-center font-semibold">Scalable kids’ content production engine</li>
                      <li className="bg-white p-3 rounded-lg text-center font-semibold">AI-accelerated creative workflows</li>
                      <li className="bg-white p-3 rounded-lg text-center font-semibold">Cross-platform audience growth</li>
                      <li className="bg-white p-3 rounded-lg text-center font-semibold">Consistent visual storytelling</li>
                  </ul>
                  </div>
                  
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

export default MishumishtiTv