import React, { useState } from 'react'
import RecentBlogCard from '../../components/RecentBlogCard'
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
                                    <h3 className='text-xl md:text-2xl font-bold'>Project Delivery Executive (PDE)</h3>
                                    <p className='py-2 text-sm'>Hiring for India’s Leading B2B / E-commerce Company Process</p>
                                    <p className='text-sm font-semibold'>Loginat Solution Pvt. Ltd.</p>
                                </div>
                                <div className='w-10 h-10 bg-gray-100 rounded-lg ml-auto flex items-center justify-center'>
                                    <img src={logo} alt="" className='object-cover'/>
                                </div>
                            </div>
                            <div className='space-y-4 text-gray-700'>
                                <div className='flex gap-3 flex-wrap text-sm items-center'>
                                    <PiSuitcaseSimpleLight />
                                    <span className='font-semibold'>Experience:</span>0-6 months
                                    <p>|</p>
                                    <FaLocationDot />
                                    <span className='font-semibold'>Location:</span> B-91, B-Block, Sector- 63, Noida
                                </div>
                                <div className='flex gap-3 flex-wrap text-sm items-center'>
                                    <MdOutlineCurrencyRupee />
                                    <span className='font-semibold'>Salary:</span> 20,500 CTC
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
                                <h4 className='font-semibold'>Job highlights</h4>
                                <ul className='list-disc text-sm list-inside mt-3 text-gray-700 space-y-2'>
                                    <li>Hiring for India’s Leading B2B / E-commerce Company Process</li>
                                    <li>Designation: - Project Delivery Executive (PDE)</li>
                                    <li>Exp. : - 0-6 months</li>
                                    <li>Min. Qualification: -10th, 12th and Graduation/Post Grad. with min 60% marks</li>
                                    <li>Salary: - CTC:- 20,500</li>
                                    <li>Location: - B-91, B-Block, Sector- 63, Noida</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='font-semibold mt-5'>Job Description</h4>
                                <ul className='list-disc text-sm list-outside ml-5 mt-3 text-gray-700 space-y-2'>
                                    <li>Responsible for new customer onboarding process</li>
                                    <li>Co-ordination with client over call, catalog development and approval</li>
                                    <li>Fulfillment of Catalog needs as per Client Demand and Organization SOP</li>
                                    <li>60% Calling, 40% Backend Operations and Enrichment work</li>
                                    <li>Prior Knowledge / Experience on an E-commerce platform will be plus</li>
                                    <li>Good knowledge of the web applications and their functioning (Internet, Search Engines, Digital Marketing etc.)</li>
                                    <li>Applicant should possess strong Email handling skills</li>
                                    <li>Achievement of Daily / Weekly / Monthly Targets.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='font-semibold mt-5'>Success Areas:</h4>
                                <ul className='list-disc text-sm ml-5 mt-3 text-gray-700 space-y-2'>
                                    <li>Customer experience improvement mindset</li>
                                    <li>Improvement on overall TAT and quality</li>
                                    <li>Will help in Improved Communication</li>
                                    <li>Persuasion skills </li>
                                    <li>Industry knowledge expertise development </li>
                                </ul>
                            </div>
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