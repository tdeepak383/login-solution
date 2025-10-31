import React from 'react'
import SubpageHeroSection from '../components/subpageHeroSection'
import ClientsLogo from '../components/ClientsLogo'
import CallToAction from '../components/CallToAction'
import LogoCarousel from '../components/LogoCarousel'
import Gunjan from '../assets/gunjan-thumb.jpg'
import Atul from '../assets/atul-thumb.jpg'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'
import { RiDropFill } from "react-icons/ri";


function About() {
  return (
    <>
      <SubpageHeroSection
      title={"We connect you with the right talent for your business needs"}
      subtitle={""}
      buttontext={"Connect with Us"}
      children={"We connect you with the right talent to meet your business goals. Our process ensures every professional is carefully vetted, technically proficient, and aligned with your company’s objectives. Helping you build a reliable, high-performing team that delivers consistent results"}
      />
      <section className='margin-top-Subhero'>
        <div className='max-w-6xl text-center mx-auto py-10 px-6 '>
          <p className='text-xl'>Our Promise</p>
          <h2 className='md:text-5xl sm:text-3xl text-2xl font-bold mb-10'>We work as Partners, not supplier</h2>
          <p className='text-xl'>We connect with you as a partner, not a supplier, because we believe that true success is built on collaboration and trust. Our approach is centered around working alongside you, understanding your goals, and crafting solutions that align perfectly with your vision.</p>
        </div>
        <ClientsLogo/>
        <div className='bg-gray-50'>         
        <div className="max-w-6xl mx-auto py-20 px-6">
          <h3 className="md:text-5xl sm:text-3xl text-2xl font-bold mb-10 text-center">
            About the Co-founders
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* --- 1st Co-founder --- */}
            <div className="relative">
              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <img src={Gunjan} alt="Gunjan Gupta" className="rounded-3xl w-full" />
              </div>

              {/* Info Card */}
              <div className="relative z-10 bg-[var(--pink-light)] border border-[var(--pink-light)] shadow-xl rounded-3xl p-8 mx-6 -mt-12">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-2xl font-bold">Gunjan Gupta</h4>
                    <p className="text-xl">Founder & CEO</p>
                  </div>
                  <div className="flex space-x-2 text-white text-xl">
                    <a
                      href="https://www.facebook.com/LoginAtSolutions"
                      className="bg-[var(--pink)] hover:text-black cursor-pointer rounded-full p-3 transition-all duration-300"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/loginat-solutions-pvt-ltd-/"
                      className="bg-[var(--pink)] hover:text-black cursor-pointer rounded-full p-3 transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--pink)] rotate-90" />
                    <p className="ml-7">
                      Computer Engineer from Manipal University, has honed her technical skills working for
                      industry leaders such as American Express Bank and NIIT Ltd having extensive experience
                      in the field of Internet Development and Consulting.
                    </p>
                  </div>
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--pink)] rotate-90" />
                    <p className="ml-7">
                      A people's person, who likes to lead from the front, her biggest strength lies in her
                      entrepreneurial style and the ability to build strong relationships.
                    </p>
                  </div>
                </div>
              </div>
            </div>
             {/* --- 2nd Co-founder placeholder --- */}
            <div className="relative">
              {/* Image */}
              <div className="overflow-hidden rounded-3xl">
                <img src={Atul} alt="Gunjan Gupta" className="rounded-3xl w-full" />
              </div>

              {/* Info Card */}
              <div className="relative z-10 bg-[var(--blue-light)] border border-[var(--blue-light)] shadow-xl rounded-3xl p-8 mx-6 -mt-12">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-2xl font-bold">Atul Gupta</h4>
                    <p className="text-xl">Founder & CEO</p>
                  </div>
                  <div className="flex space-x-2 text-white text-xl">
                    <a
                      href="https://www.facebook.com/LoginAtSolutions"
                      className="bg-[var(--blue)] hover:text-black cursor-pointer rounded-full p-3 transition-all duration-300"
                    >
                      <FaFacebookF />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/loginat-solutions-pvt-ltd-/"
                      className="bg-[var(--blue)] hover:text-black cursor-pointer rounded-full p-3 transition-all duration-300"
                    >
                      <FaLinkedinIn />
                    </a>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="ml-7">
                      Lead designer and creative director on projects with some of the biggest companies in the world. Has strong understanding of communication strategy, Advertising, Design & Development. 
                    </p>
                  </div>
                  <div className="relative">
                    <RiDropFill className="absolute top-1 text-[var(--blue)] rotate-90" />
                    <p className="ml-7">
                      career as a coder but soon picked up Design and communication as his new career zone to work with with a ‘.com’ a venture of candico industries, vCustomer and HCL Technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <CallToAction/>
        <LogoCarousel/>
      </section>
    </>
  )
}

export default About