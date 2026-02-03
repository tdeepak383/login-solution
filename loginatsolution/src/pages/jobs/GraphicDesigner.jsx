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
                                <h3 className='text-xl md:text-2xl font-bold'>Graphic Designer</h3>
                                <p className='py-2 text-sm'>Hiring for a creative and detail-oriented Graphic Designer</p>
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
                                    <li>Design creatives for websites, web banners, posters, e-brochures, e-newsletters, emailers, infographics, social media posts, and PowerPoint presentations.</li>
                                    <li>Create wireframes, prototypes, and high-fidelity designs for web and mobile platforms.</li>
                                    <li>Use Figma features (templates, text, shapes, images) to build professional designs.</li>
                                    <li>Collaborate with internal teams to understand requirements and incorporate feedback.</li>
                                    <li>Design materials for client communications, including newsletters, announcements, updates, and invitations.</li>
                                    <li>Create infographics to present information and data in a clear and engaging manner.</li>
                                    <li>Ensure consistency with brand guidelines and visual standards across all designs.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className='font-semibold mt-5'>Job Description</h4>
                                <p className='text-sm text-gray-700'>We are looking for a creative and detail-oriented Graphic Designer to create visually engaging digital and
                                print assets for our company. The ideal candidate should be proficient in modern design tools and able
                                to deliver high-quality designs while following brand guidelines.</p>
                            </div>
                            <div>
                                <h4 className='font-semibold mt-5'>Preferred Candidate Profile:</h4>
                                <ul className='list-disc text-sm ml-5 mt-3 text-gray-700 space-y-2'>
                                    <li>Proficiency in Adobe Photoshop, Illustrator, and InDesign.</li>
                                    <li>Experience with emailer designs (Outlook/email platforms).</li>
                                    <li>Knowledge of Figma and/or Canva is an added advantage.</li>
                                    <li>Understanding of user research, interaction design, and usability principles.</li>
                                    <li>Strong communication skills and ability to work collaboratively.</li>
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