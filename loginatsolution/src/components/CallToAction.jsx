import React from 'react'
import RequirementForm from './Form'
import { FaPhoneVolume } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

function CallToAction() {
  return (
    <>
        <section className='gradient min-h-screen w-full z-50 relative flex flex-col items-center justify-center text-center px-5 py-10'>
            <div className='max-w-6xl mx-auto w-full'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className='lg:col-span-2 text-white'>
                        <h2 className='lg:text-6xl md:text-3xl text-2xl text-left tracking-wide'>Top Talent Made Easy!</h2>
                        <h4 className='lg:text-4xl md:text-3xl text-2xl text-left'>We take care of hiring, training, and everything in between.</h4>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'>
                            <div className='bg-white/10 rounded-xl p-5 group hover:bg-white/20 transition-all duration-500 delay-100'>
                                <FaPhoneVolume className='mx-auto text-3xl group-hover:-rotate-45 transition-all duration-500 delay-100'/>
                                <p className='text-xl px-5'>Call us for a discussion</p>
                            </div>
                            <div className='bg-white/10 rounded-xl p-5 group hover:bg-white/20 transition-all duration-500 delay-100'>
                                <RiNewspaperLine className='mx-auto text-3xl group-hover:-rotate-45 transition-all duration-500 delay-100'/>
                                <p className='text-xl'>We arrange Interviews with shortlisted candidates</p>
                            </div>
                            <div className='bg-white/10 rounded-xl p-5 group hover:bg-white/20 transition-all duration-500 delay-100'>
                                <MdOutlineConnectWithoutContact className='mx-auto text-3xl group-hover:-rotate-45 transition-all duration-500 delay-100'/>
                                <p className='text-xl'>Connect with the solver for regular deliveries</p>
                            </div>
                        </div>
                        <div className='mt-10 relative w-3/4 mx-auto'>                            
                            <hr />
                            <div className='absolute bg-white w-2 rounded-full h-2 -top-1 left-0'></div>
                            <div className='absolute bg-white w-2 rounded-full h-2 -top-1 left-1/2'></div>
                            <div className='absolute bg-white w-2 rounded-full h-2 -top-1 right-0'></div>
                        </div>
                    </div>
                    <div>
                        <RequirementForm />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CallToAction