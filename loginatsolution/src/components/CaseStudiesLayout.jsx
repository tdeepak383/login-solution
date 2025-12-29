import React from 'react'
import apartaLogo from '../assets/aparta-logo.png'
import KLMLogo from '../assets/KLM-logo.png'
import vitriaLogo from '../assets/vitria-logo.png'
import indiamartLogo from '../assets/indiamart-logo2.png'
import NIITLogo from '../assets/NIIT_logo.png'
import TEConnectivity from '../assets/TE_Connectivity_logo.png'
import tradeindia from '../assets/TradeIndia-logo.png'
import bgImage1 from '../assets/client-stories/leading-global.jpg'
import bgImage2 from '../assets/client-stories/premier-european.jpg'
import bgImage3 from '../assets/client-stories/Digital-Operations.jpg'
import bgImage4 from '../assets/client-stories/largest-online.jpg'
import bgImage5 from '../assets/client-stories/indiamart.jpg'
import bgImage6 from '../assets/client-stories/NIIT.jpg'
import bgImage7 from '../assets/client-stories/TE_Connectivity.jpg'

import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6";

function CaseStudiesLayout() {
    return (
        <>
        <div className='relative md:p-5 p-2 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/60 mb-10'
            style={{ backgroundImage: `url(${bgImage1})` }}
        >
            <div className='relative pt-32 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>eLearning</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>01</span>/07</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <img src={apartaLogo} alt="" className='w-40' />
                        <p className='text-left mt-5 text-xs'>A leading India-based eLearning and digital content solutions provider serving global enterprises and publishers.</p>
                        <h2 className='font-bold text-3xl my-6 '>Timely Delivery of High-Quality eLearning Modules for Aptara</h2>
                    </div>
                    <div className='content-end mb-5'>
                        <h4 className='text-xl font-bold '>Our Solution</h4>
                        <hr className='w-32 border-b-1 ' />
                        <ul className='ml-5 list-disc mt-5 leading-tight space-y-2'>
                            <li>Established a streamlined production workflow to handle parallel module development</li>
                            <li>Collaborated closely with Aptara’s teams for rapid feedback and alignment</li>
                            <li>Applied strong quality assurance checks at every stage—content, design, functionality, and compliance</li>
                            <li>Leveraged experienced designers and developers to ensure consistency and accuracy</li>
                        </ul>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <h4 className='text-xl font-bold'>Business Challenge</h4>
                        <hr className='w-52 border-b-1 ' />
                        <p className='text-left mt-5'>Aptara required rapid development and delivery of multiple eLearning modules to support time-sensitive client programs. The key challenge was balancing strict delivery timelines with high-quality instructional design, visual consistency, and technical accuracy across modules.</p>
                    </div>

                    <div>
                        <h4 className='text-xl font-bold'>Conclusion</h4>
                        <hr className='w-28 border-b-1 ' />
                        <p className='text-left mt-5'>By combining process efficiency with a strong focus on quality, Loginat Solutions  proved to be a dependable eLearning development partner for Aptara. The engagement highlights Loginat Solutions’ capability to deliver time-sensitive eLearning solutions while maintaining the highest standards of quality.</p>
                    </div>
                </div>
                <div className='mt-5 group flex justify-end'>
                    <Link to="/client-stories/timely-delivery-high-quality-elearning-modules-aptara" className='flex items-center gap-4 px-4 py-2 text-sm rounded-full bg-white text-[var(--purple)]'>Read More <FaArrowRight className='group-hover:ml-5 transition-all delay-200 duration-200' /></Link>
                </div>

            </div>
        </div>

        <div className='relative md:p-5 p-2 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/60 mb-10'
            style={{ backgroundImage: `url(${bgImage2})` }}
        >
            <div className='relative pt-32 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>Aviation</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>02</span>/07</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <img src={KLMLogo} alt="" className='w-40' />
                        <p className='text-left mt-5 text-xs'>Air France and KLM Royal Dutch Airlines – Two of the world’s leading aviation brands with global operations and high-impact communication needs.</p>
                        <h2 className='font-bold text-3xl my-6 '>Creative Solutions for Global Aviation Leaders in High-Pressure Environments</h2>
                    </div>
                    <div className='content-end mb-5'>
                        <h4 className='text-xl font-bold '>Our Solution</h4>
                        <hr className='w-32 border-b-1 ' />
                        <ul className='ml-5 list-disc mt-5 leading-tight space-y-2'>
                            <li>Quickly understood evolving requirements and translated them into impactful creative concepts</li>
                            <li>Delivered custom-designed solutions aligned with the distinct branding and communication goals of Air France and KLM</li>
                            <li>Leveraged cross-functional creative teams to handle parallel workstreams efficiently</li>
                            <li>Maintained speed, creativity, and quality despite aggressive timelines</li>
                        </ul>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <h4 className='text-xl font-bold'>Business Challenge</h4>
                        <hr className='w-52 border-b-1 ' />
                        <p className='text-left mt-5 '>Air France and KLM required innovative, engaging creative solutions to support multiple internal and external initiatives—often within highly time-challenged environments. The key challenge was delivering custom, high-quality creative assets rapidly while aligning with strict brand guidelines and diverse communication objectives.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Conclusion</h4>
                        <hr className='w-28 border-b-1 ' />
                        <p className='text-left mt-5 '>Loginat Solutions  consistently rose above challenges to deliver innovative, time-sensitive creative solutions for Air France and KLM. The engagement highlights Loginat Solutions’ strength in providing custom-tailored, high-quality creative services for global brands operating in demanding environments.</p>
                    </div>
                </div>
                <div className='mt-5 group flex justify-end'>
                    <Link to="/client-stories/creative-solutions-global-aviation-leaders-in-high-pressure-environments" className='flex items-center gap-4 px-4 py-2 text-sm rounded-full bg-white text-[var(--purple)]'>Read More <FaArrowRight className='group-hover:ml-5 transition-all delay-200 duration-200' /></Link>
                </div>
            </div>
        </div>

        <div className='relative md:p-5 p-2 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/60 mb-10'
            style={{ backgroundImage: `url(${bgImage3})` }}
        >
            <div className='relative pt-32 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>AI-driven</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>03</span>/07</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <img src={vitriaLogo} alt="" className='w-40' />
                        <p className='text-left mt-5 text-xs'>Vitria Technology – A leading AI-driven enterprise technology company specializing in intelligent automation and real-time analytics.</p>
                        <h2 className='font-bold text-3xl my-6 '>Integrated Creative and Digital Marketing Support for an AI Technology Leader</h2>
                    </div>
                    <div className='content-end mb-5'>
                        <h4 className='text-xl font-bold '>Our Solution</h4>
                        <hr className='w-32 border-b-1 ' />
                        <ul className='ml-5 list-disc mt-5 leading-tight space-y-2'>
                            <li>Social media strategists to plan, execute, and optimize LinkedIn campaigns</li>
                            <li>Creative designers and content specialists delivering brand-aligned assets</li>
                            <li>Marketing operations support leveraging HubSpot for email execution and analytics</li>
                            <li>Agile workflows ensuring fast turnaround and adaptability to campaign needs</li>
                        </ul>
                    </div>
                </div>


                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <h4 className='text-xl font-bold'>Business Challenge</h4>
                        <hr className='w-52 border-b-1 ' />
                        <p className='text-left mt-5 '>Vitria Technology required a creative and digital marketing partner capable of translating complex AI solutions into engaging, consistent, and measurable marketing campaigns. The challenge was to deliver customized creative assets, manage social media presence, and track campaign performance—all while aligning with evolving marketing objectives.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Conclusion</h4>
                        <hr className='w-28 border-b-1 ' />
                        <p className='text-left mt-5'>By providing end-to-end creative and digital marketing support, Loginat Solutions  helped Vitria Technology strengthen its market presence and drive measurable engagement. The engagement highlights Loginat Solutions’ ability to deliver custom, data-driven marketing solutions for advanced technology companies.</p>
                    </div>

                </div>
                <div className='mt-5 group flex justify-end'>
                    <Link to="/client-stories/integrated-creative-and-digital-marketing-support-for-an-ai-technology-leader" className='flex items-center gap-4 px-4 py-2 text-sm rounded-full bg-white text-[var(--purple)]'>Read More <FaArrowRight className='group-hover:ml-5 transition-all delay-200 duration-200' /></Link>
                </div>
            </div>
        </div>

        <div className='relative md:p-5 p-2 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/60 mb-10'
            style={{ backgroundImage: `url(${bgImage4})` }}
        >
            <div className='relative pt-32 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>B2B Portal</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>04</span>/07</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <img src={tradeindia} alt="" className='w-40' />
                        <p className='text-left mt-5 text-xs'>Leading B2B Portal, India - A prominent digital marketplace connecting buyers and sellers across multiple industries.</p>
                        <h2 className='font-bold text-3xl my-6 '>Long-Term Content and Backend Support for a Leading B2B Portal in India</h2>
                    </div>
                    <div className='content-end mb-5'>
                        <h4 className='text-xl font-bold '>Our Solution</h4>
                        <hr className='w-32 border-b-1 ' />
                        <ul className='ml-5 list-disc mt-5 leading-tight space-y-2'>
                            <li>Deployed skilled Content Writers supported by Quality Check Analysts</li>
                            <li>Established a robust management structure comprising Managers, Team Leads, Trainers, and Quality Resources</li>
                            <li>Enabled continuous training to ensure domain understanding across diverse industries</li>
                            <li>Applied strict quality assurance processes to deliver precise and dependable content</li>
                        </ul>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <h4 className='text-xl font-bold'>Business Challenge</h4>
                        <hr className='w-52 border-b-1 ' />
                        <p className='text-left mt-5'>The client required reliable backend and content support to power its digital marketing initiatives across a vast range of products and services. With frequent updates and evolving requirements, the challenge was to deliver accurate, industry-specific, and scalable content while maintaining consistency and quality over time.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Conclusion</h4>
                        <hr className='w-28 border-b-1 ' />
                        <p className='text-left mt-5'>This long-standing collaboration highlights Loginat Solutions ’ capability to deliver reliable, high-quality content and backend support through strong management, quality-driven processes, and continuous adaptation—making it a trusted partner for one of India’s leading B2B portals.</p>
                    </div>
                </div>
                <div className='mt-5 group flex justify-end'>
                    <Link to="/client-stories/long-term-content-and-backend-support-for-a-leading-b2b-portal-in-india" className='flex items-center gap-4 px-4 py-2 text-sm rounded-full bg-white text-[var(--purple)]'>Read More <FaArrowRight className='group-hover:ml-5 transition-all delay-200 duration-200' /></Link>
                </div>
            </div>
        </div>

        <div className='relative md:p-5 p-2 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/60 mb-10'
            style={{ backgroundImage: `url(${bgImage5})` }}
        >
            <div className='relative pt-32 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>B2B Portal</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>05</span>/07</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <img src={indiamartLogo} alt="" className='w-40' />
                        <p className='text-left mt-5 text-xs'>Leading B2B Portal, India – A prominent digital marketplace connecting businesses across multiple industries.</p>
                        <h2 className='font-bold text-3xl my-6 '>Long-Term Backend Operations Support for a Leading B2B Portal in India</h2>
                    </div>
                    <div className='content-end mb-5'>
                        <h4 className='text-xl font-bold '>Our Solution</h4>
                        <hr className='w-32 border-b-1 ' />
                        <ul className='ml-5 list-disc mt-5 leading-tight space-y-2'>
                            <li>Set up a specialized team of trained executives focused on daily operations</li>
                            <li>Implemented a strong management structure comprising Managers, Team Leads, Quality Analysts, and Trainers</li>
                            <li>Ensured continuous training and process updates to quickly adapt to evolving requirements</li>
                            <li>Maintained strict quality checks to ensure accuracy, consistency, and service excellence</li>
                        </ul>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <h4 className='text-xl font-bold'>Business Challenge</h4>
                        <hr className='w-52 border-b-1 ' />
                        <p className='text-left mt-5 '>The client required a reliable partner to manage critical backend operations while supporting rapid business growth and frequent process changes. The challenge was to maintain accuracy, speed, and customer satisfaction in a highly dynamic environment where workflows and requirements evolved continuously.</p>
                    </div>

                    <div>
                        <h4 className='text-xl font-bold'>Conclusion</h4>
                        <hr className='w-28 border-b-1 ' />
                        <p className='text-left mt-5'>The long-standing association reflects Loginat Solutions’ ability to provide robust, adaptable, and reliable backend process support. Through strong leadership, quality-driven execution, and continuous learning, Loginat Solutions  remains a trusted operational partner for one of India’s leading B2B portals.</p>
                    </div>
                </div>
                <div className='mt-5 group flex justify-end'>
                    <Link to="/client-stories/long-term-backend-operations-support-for-a-leading-b2b-portal-in-india" className='flex items-center gap-4 px-4 py-2 text-sm rounded-full bg-white text-[var(--purple)]'>Read More <FaArrowRight className='group-hover:ml-5 transition-all delay-200 duration-200' /></Link>
                </div>
            </div>
        </div>

        <div className='relative md:p-5 p-2 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/60 mb-10'
            style={{ backgroundImage: `url(${bgImage6})` }}
        >
            <div className='relative pt-32 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>eLearning</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>06</span>/07</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <img src={NIITLogo} alt="" className='w-40' />
                        <p className='text-left mt-5 text-xs'>NIIT Ltd. - A leading global eLearning and skills development company delivering learning solutions across industries.</p>
                        <h2 className='font-bold text-3xl my-6 '>Staff Augmentation with High Resource Continuity for NIIT Ltd</h2>
                    </div>
                    <div className='content-end mb-5'>
                        <h4 className='text-xl font-bold '>Our Solution</h4>
                        <hr className='w-32 border-b-1 ' />
                        <ul className='ml-5 list-disc mt-5 leading-tight space-y-2'>
                            <li>Carefully selected and trained resources aligned with NIIT’s project requirements</li>
                            <li>Maintained backup and cross-trained resources to reduce impact of absenteeism</li>
                            <li>Established strong people management practices to ensure high retention rates</li>
                            <li>Provided managerial oversight to monitor productivity, quality, and engagement</li>
                        </ul>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <h4 className='text-xl font-bold mt-6'>Business Challenge</h4>
                        <hr className='w-52 border-b-1 ' />
                        <p className='text-left mt-5 '>NIIT required skilled eLearning professionals to support multiple projects simultaneously under a Full-Time Equivalent (FTE) model. The key challenge was not only scaling resources, but also ensuring minimal downtime due to absenteeism and high employee retention, so that knowledge transfer and process onboarding did not need to be repeated—ensuring continuity and efficiency across projects.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold mt-5'>Conclusion</h4>
                        <hr className='w-28 border-b-1 ' />
                        <p className='text-left mt-5 '>Through effective staff augmentation and strong resource governance, Loginat Solutions  helped NIIT Ltd. scale efficiently while maintaining continuity and quality. The engagement highlights Loginat Solutions’ ability to provide reliable, long-term FTE resources with minimal disruption and high operational stability.</p>
                    </div>
                </div>
                <div className=' group flex justify-end'>
                    <Link to="/client-stories/staff-augmentation-with-high-resource-continuity-for-niit-ltd" className='flex items-center gap-4 px-4 py-2 text-sm rounded-full bg-white text-[var(--purple)]'>Read More <FaArrowRight className='group-hover:ml-5 transition-all delay-200 duration-200' /></Link>
                </div>
            </div>
        </div>

        <div className='relative md:p-5 p-2 bg-blend-overlay bg-center bg-cover rounded-3xl bg-no-repeat bg-black/60 mb-10'
            style={{ backgroundImage: `url(${bgImage7})` }}
        >
            <div className='relative pt-40 pb-5 text-white text-left md:px-10 '>
                <div className='absolute top-10 md:-left-20 bg-[var(--purple)] py-3 px-8 rounded-full'>
                    <h2>Engineering</h2>
                </div>
                <div className='absolute top-0 right-0 bg-[var(--purple)] p-2 px-6 rounded-full'>
                    <p className='text-sm'><span className='text-xl font-semibold'>07</span>/07</p>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <img src={TEConnectivity} alt="" className='w-40' />
                        <p className='text-left mt-5 text-xs'>TE Connectivity – Connectors & Sensors for a Connected World A global engineering leader enabling connectivity and sensor solutions across industries.</p>
                        <h2 className='font-bold text-3xl my-6 '>Creative and Intranet Solutions for Internal Communications at TE Connectivity</h2>
                    </div>
                    <div className='content-end mb-5'>
                        <h4 className='text-xl font-bold '>Our Solution</h4>
                        <hr className='w-32 border-b-1 ' />
                        <ul className='ml-5 list-disc mt-5 leading-tight space-y-2'>
                            <li>Allocated dedicated design resources (FTEs) to support TE Connectivity on a real-time basis</li>
                            <li>Ensured quick turnaround for multiple, parallel creative requirements</li>
                            <li>Maintained brand consistency and quality across all internal assets</li>
                            <li>Worked closely with internal stakeholders to align communication goals with design output</li>
                        </ul>
                    </div>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <div>
                        <h4 className='text-xl font-bold'>Business Challenge</h4>
                        <hr className='w-52 border-b-1 ' />
                        <p className='text-left mt-5 '>TE Connectivity required a creative partner to strengthen its internal communications through visually engaging, consistent, and timely collaterals. The challenge was to design and maintain a centralized intranet platform while also responding quickly to ongoing creative requirements across the organization.</p>
                    </div>
                    <div>
                        <h4 className='text-xl font-bold'>Conclusion</h4>
                        <hr className='w-28 border-b-1 ' />
                        <p className='text-left mt-5'>Through dedicated design resources and a flexible engagement model, Loginat Solutions  helped TE Connectivity enhance its internal communications ecosystem. The engagement highlights Loginat Solutions  capability to deliver high-quality, real-time creative support for global engineering organizations.</p>
                    </div>
                </div>
                <div className='mt-5 group flex justify-end'>
                    <Link to="/client-stories/creative-and-intranet-solutions-for-internal-communications-at-te-connectivity" className='flex items-center gap-4 px-4 py-2 text-sm rounded-full bg-white text-[var(--purple)]'>Read More <FaArrowRight className='group-hover:ml-5 transition-all delay-200 duration-200' /></Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default CaseStudiesLayout