import React, { useState } from 'react'

// import ContactUsForm from '../components/ContactUsForm';
import { IoMdCall } from "react-icons/io";
import { FaEnvelopeOpen } from "react-icons/fa";
import contactus from '../assets/contact-us.jpg';
import sector63 from '../assets/sector-63.png';
import RequirementForm from '../components/Form'

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
              <FaEnvelopeOpen className='text-2xl text-[var(--blue)]'/>
              <div >                
                <h4 className='text-2xl font-bold'>Write to us:</h4>
                <p className='md:text-xl'>sales@loginatsolution.com</p>
                <p className='md:text-xl'>hr@loginatsolution.com</p>
              </div>
            </div>
           
        </div>
        <div className='p-5 md:p-20 bg-white'>
          <RequirementForm FormTitle={"Book an intro call"} color={""}/>
        </div>

    </div>
    <div className='grid lg:grid-cols-2'>
       <div className="p-5 md:p-20">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">Our Offices</h1>
            <p className='mt-10 font-semibold text-xl'>Feel free to drop in for a conversation or a cup of coffee.</p>
           
            <div className='mt-10 flex flex-col md:flex-row gap-4 items-center'>
                
                  <button onClick={() => handleButton("noida")} 
                     className={`py-4 px-4 md:px-8 rounded-full font-bold text-xs md:text-xl transition-all ${
                      activeMap === "noida"
                        ? "bg-black text-white"
                        : "bg-gray-300 text-black"
                    }`}
                    >Sector 63, Noida</button>             
                
                  <button 
                  onClick={() => handleButton("ghaziabad")}
                  className={`py-4 px-4 md:px-8 rounded-full font-bold text-xs md:text-xl transition-all ${
                    activeMap === "ghaziabad"
                      ? "bg-black text-white"
                      : "bg-gray-300 text-black"
                  }`}
                  >Kaushambi, Ghaziabad</button>             
            </div>
            {/*  --- Ghaziabad Map --- */}
          {activeMap === "ghaziabad" && (
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.850057169827!2d77.32603309999999!3d28.634255699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2cae9479c1%3A0x7d42c080fe8221b8!2sLoginAt%20Solutions%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1761916480914!5m2!1sen!2sin"
                width="100%"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ghaziabad Office"
              ></iframe>
            </div>
          )}

          {/* --- Noida Map --- */}
          {activeMap === "noida" && (
            <div className="mt-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d218.90335315261967!2d77.37875380179389!3d28.61616282527233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff5515f64fd%3A0x46463a1c39c381cb!2sB91%2C%20B%20Block%2C%20Sector%2063%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1762510855247!5m2!1sen!2sin"
                width="100%"
                height="500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Noida Office"
              ></iframe>
            </div>
          )}
        </div>
        <div className='p-5 md:p-20 bg-gray-50'>
              {activeMap === "noida" ? <img src={sector63} alt="Sector 63 Office" className='w-full lg:w-3/4 rounded-xl'/> : <img src={contactus} alt="Kaushambi Office" className='w-full lg:w-3/4 rounded-xl'/>}
        </div>
    </div>
    </>
  )
}

export default Contact