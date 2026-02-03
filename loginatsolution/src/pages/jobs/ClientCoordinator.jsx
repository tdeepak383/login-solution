import React, { useState } from 'react'
import data from '../../data/openings.json'
import logo from '../../assets/logo.png'
import { PiSuitcaseSimpleLight } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineCurrencyRupee } from "react-icons/md";
import JoinusPopup from '../../components/JoinusPopup';
import { FaArrowRight } from "react-icons/fa";
import LatestJobsCard from '../../components/LatestJobsCard';


function PDE() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    


  return (
    <>
        <section>
            <div className='max-w-6xl mx-auto py-10 px-6'>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-5 ">
                    <div className='lg:col-span-3 space-y-5'>
                        <div className='bg-gray-50 p-5 rounded-xl'>
                            <div className="flex justify-between items-center mb-8">
                            <div>
                                <h3 className='text-xl md:text-2xl font-bold'>Client Coordinator</h3>
                                <p className='py-2 text-sm'>Hiring for a proactive and detail-oriented Client Coordinator to join our team.</p>
                                <p className='text-sm font-semibold'>Loginat Solution Pvt. Ltd.</p>
                            </div>
                            <div className='w-10 h-10 bg-gray-100 rounded-lg ml-auto flex items-center justify-center'>
                                <img src={logo} alt="" className='object-cover'/>
                            </div>
                        </div>
                        <div className='space-y-4 text-gray-700'>
                            <div className='flex gap-3 flex-wrap text-sm items-center'>
                                <PiSuitcaseSimpleLight />
                                <span className='font-semibold'>Experience:</span>2 to 5 Years
                                <p>|</p>
                                <FaLocationDot />
                                <span className='font-semibold'>Location:</span> B-91, B-Block, Sector- 63, Noida
                                                             
                            </div>
                            <div className='flex gap-3 flex-wrap text-sm items-center'>
                                 <MdOutlineCurrencyRupee />
                                <span className='font-semibold'>Salary:</span> As per industry standards
                            </div>
                            <div>
                                <p className='text-sm text-gray-700'>LoginAt Solutions Pvt. Ltd. is looking for a proactive and detail-oriented Client Coordinator to join our
                                    team. The ideal candidate will be responsible for managing client communications, ensuring smooth
                                    coordination between teams, and maintaining a high level of client satisfaction.</p>
                            </div>
                            <div>
                                <button
                                    onClick={() => setIsPopupOpen(true)}
                                    className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--pink)] to-[var(--purple)] text-white font-semibold py-2 px-6 rounded-lg transition hover:shadow-md"
                                >
                                    Apply now <FaArrowRight className="text-sm" />
                                </button>
                            </div>
                        </div>
                        </div>
                        <div className='bg-gray-50 p-5 rounded-xl'>
                            <div className="bg-gray-200 p-5 rounded-lg">
                                <h4 className='font-semibold'>Roles & Responsibilities</h4>
                                <ul className='list-disc text-sm list-inside mt-3 text-gray-700 space-y-2'>
                                    <li>Manage day-to-day client interactions and relationships</li>
                                    <li>Coordinate with internal teams to meet client requirements and timelines</li>
                                    <li>Ensure timely follow-ups and updates to clients</li>
                                    <li>Maintain records of client communications and project updates</li>
                                    <li>Address client queries and resolve issues effectively</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='font-semibold mt-5'>Key Skills</h4>
                                <ul className='list-disc text-sm ml-5 mt-3 text-gray-700 space-y-2'>
                                    <li>Strong communication and interpersonal skills</li>
                                    <li>Fluent in spoken and written English</li>
                                    <li>Ability to multitask and manage time efficiently</li>
                                    <li>Client-focused attitude with a problem-solving approach</li>
                                    <li>Proficiency in MS Office and basic coordination tools</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='font-semibold mt-5'>Eligibility</h4>
                                <ul className='list-disc text-sm ml-5 mt-3 text-gray-700 space-y-2'>
                                    <li>Any graduate can apply (MBA preferred)</li>
                                    <li>Freshers with good communication skills are welcome</li>
                                    <li>Prior experience in client servicing or coordination will be an added advantage</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div>
                            <p className='text-sm text-gray-700'><strong>To Apply:</strong> Send your updated resume to hr@loginatsolution.com</p>
                        </div>
                    </div>
                        


                    <div className='lg:col-span-2'>
                        <div className='bg-gray-50 border rounded-xl p-5'>
                            <h4>Jobs you might be interested in</h4>
                            <div className='mt-5'>
                                {
                                    data.map((job, index) => (
                                    <LatestJobsCard
                                        key={index}
                                        title={job.title}
                                        location={job.location}
                                        posted={job.posted}
                                        slug={`/jobs/${job.slug}`}
                                    />
                                    ))
                                }
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {isPopupOpen && <JoinusPopup onClose={() => setIsPopupOpen(false)} />}
    </>
  )
}

export default PDE