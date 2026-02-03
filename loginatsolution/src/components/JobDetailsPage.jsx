import React, { useState } from 'react'
import logo from '../assets/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import JoinusPopup from './JoinusPopup';
import { FaArrowRight } from "react-icons/fa";
import { IoBriefcase } from 'react-icons/io5';
// import LatestJobsCard from './LatestJobsCard';


function JobDetailsPage({
    title,
    subtitle,
    company,
    experience,
    location,
    salary,
    job_highlights,
    job_description,
    requirement,
    created_at
}) {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const daysAgo = (date) => {
    const createdDate = new Date(date);
    const today = new Date();

    const diffDays = Math.floor(
        (today - createdDate) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
    };

  return (
    <>
        <section>
            <div className='max-w-6xl mx-auto'>
                
                <div className='space-y-5'>
                    <div className='bg-gray-50 p-5 rounded-xl'>
                        <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className='text-xl md:text-2xl font-bold'>{title}</h3>
                            <p className='py-2 text-sm'>{subtitle}</p>
                            <p className='text-sm font-semibold'>{company}</p>
                        </div>
                        <div className='w-16 h-16 px-1 bg-gray-100 rounded-lg ml-auto flex items-center justify-center'>
                            <img src={logo} alt="" className='object-cover'/>
                        </div>
                    </div>
                    <div className='space-y-4 text-gray-700'>
                        <div className='flex gap-3 flex-wrap text-sm items-center'>
                            <IoBriefcase />
                            <span className='font-semibold'>Experience:</span>{experience}
                            <p>|</p>
                            <FaLocationDot />
                            <span className='font-semibold'>Location:</span> {location}
                        </div>
                        <div className='flex gap-3 flex-wrap text-sm items-center'>
                                <MdOutlineCurrencyRupee />
                            <span className='font-semibold'>Salary:</span> {salary}
                        </div>
                        <div>
                            <button
                                onClick={() => setIsPopupOpen(true)}
                                className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--pink)] to-[var(--purple)] text-white font-semibold py-2 px-6 rounded-lg transition hover:shadow-md"
                            >
                                Apply now <FaArrowRight className="text-sm" />
                            </button>
                        </div>
                        <p className='text-sm'>Posted: <span className='text-black font-semibold'>{daysAgo(created_at)}</span></p>
                    </div>
                    </div>
                    <div className='bg-gray-50 p-5 rounded-xl'>
                        <div className="bg-gray-200 p-5 rounded-lg">
                            <h4 className='font-semibold'>Job highlights</h4>
                            <div dangerouslySetInnerHTML={{ __html: job_highlights }} />
                        </div>
                        <div>
                            <h4 className='font-semibold mt-5'>Job Description</h4>
                            <div dangerouslySetInnerHTML={{ __html: job_description }} />
                        </div>
                        <div>
                            <h4 className='font-semibold mt-5'>Requirements:</h4>
                            <div dangerouslySetInnerHTML={{ __html: requirement }} />
                        </div>
                    </div>
                </div>
               
            </div>
        </section>
        {isPopupOpen && <JoinusPopup onClose={() => setIsPopupOpen(false)} />}
    </>
  )
}

export default JobDetailsPage