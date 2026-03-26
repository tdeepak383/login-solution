import React, { useState } from 'react'

// import ContactUsForm from '../components/ContactUsForm';
import { IoMdCall } from "react-icons/io";
import { FaEnvelopeOpen } from "react-icons/fa";
import contactus from '../assets/contact-us.jpg';
import sector63 from '../assets/sector-63.png';
import RequirementForm from '../components/Form'
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

function Contact() {

  const [activeMap, setActiveMap] = useState("noida")

   const handleButton = (mapId) => {
    setActiveMap(mapId)
  }

  return (
    <>
    <div className='grid lg:grid-cols-2'>      
        <div className="p-5 md:p-20 bg-gray-50">
            <h1 className="lg:text-5xl md:text-4xl text-2xl font-bold">Contact us</h1>
            <p className='mt-10 font-semibold text-xl'>Hire exceptional global talent—fast and hassle-free.</p>
            <p className='text-xl'>Our expert-matched professionals integrate seamlessly into your team. With managed recruiting, onboarding, and compliance, you get quality talent in your timezone ready to deliver from day one.</p>
            <div className='mt-10 flex gap-4 items-start'>
              <FaEnvelopeOpen className='text-2xl text-[var(--purple)]'/>
              <div >                
                <h4 className='text-2xl font-bold'>Write to us:</h4>
                <p className='md:text-xl'>sales@loginatsolution.com</p>
                <p className='md:text-xl'>hr@loginatsolution.com</p>
              </div>
            </div>
        </div>
        <div className='p-5 md:p-20 bg-white'>
          <RequirementForm title={"Share your requirement"} color={""}/>
        </div>
    </div>
    <div className=''>
       <div className="p-5 md:p-20">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">Our Offices</h1>
            <p className='mt-10 font-semibold text-xl'>Feel free to drop in for a conversation or a cup of coffee.</p>           
            <div className='mt-10 grid md:grid-cols-3'>
                <div className='mt-8 md:border-r lg:px-10 px-5'>
                  <h4 className='text-2xl font-bold'>London</h4>
                  <div className=" mt-3">
                    <IoLocationSharp className='text-2xl'/><p className='mt-3'>4th Floor, Silverstream House 45 Fitzroy Street, Fitzrovia London W1T 6EB GB</p>
                  </div>
                </div>
             <div className='mt-8 md:border-r lg:px-10 px-5'>
                  <h4 className='text-2xl font-bold'>Noida</h4>
                  <div className=" mt-3">
                  <IoLocationSharp className='text-2xl'/><p className='mt-3'>B91, B Block, Sector 63, Noida, Uttar Pradesh 201309</p>
                  </div>
                </div>
                <div className='mt-8 lg:px-10 px-5'>
                  <h4 className='text-2xl font-bold'>Ghaziabad</h4>
                  <div className=" mt-3">
                  <IoLocationSharp className='text-2xl'/><p className='mt-3'>702, Star Infinity Building, Plot No.-14, Seemant Vihar Society, Sector 14, Kaushambi, Ghaziabad, Uttar Pradesh 201010</p>
                  </div>
                </div>
            </div>
        </div>
       
    </div>
    </>
  )
}

export default Contact