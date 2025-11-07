import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdSettingsBackupRestore } from "react-icons/md";


import imageCat01 from '../assets/services-logo/cat-1/1.svg'
import imageCat02 from '../assets/services-logo/cat-1/2.svg'
import imageCat03 from '../assets/services-logo/cat-1/3.svg'
import imageCat04 from '../assets/services-logo/cat-1/4.svg'
import imageCat05 from '../assets/services-logo/cat-1/5.svg'
import imageCat06 from '../assets/services-logo/cat-1/6.svg'
import imageCat07 from '../assets/services-logo/cat-1/7.svg'
import imageCat08 from '../assets/services-logo/cat-1/8.svg'
import imageCat09 from '../assets/services-logo/cat-1/9.svg'
import imageCat10 from '../assets/services-logo/cat-1/10.svg'
import imageCat11 from '../assets/services-logo/cat-1/11.svg'
import imageCat12 from '../assets/services-logo/cat-1/12.svg'
import imageCat13 from '../assets/services-logo/cat-1/13.svg'
import imageCat14 from '../assets/services-logo/cat-1/14.svg'

import imageCat201 from '../assets/services-logo/cat-2/1.svg'
import imageCat202 from '../assets/services-logo/cat-2/2.svg'
import imageCat203 from '../assets/services-logo/cat-2/3.svg'
import imageCat204 from '../assets/services-logo/cat-2/4.svg'
import imageCat205 from '../assets/services-logo/cat-2/5.svg'
import imageCat206 from '../assets/services-logo/cat-2/6.svg'
import imageCat207 from '../assets/services-logo/cat-2/7.svg'
import imageCat208 from '../assets/services-logo/cat-2/8.svg'
import imageCat209 from '../assets/services-logo/cat-2/9.svg'
import imageCat210 from '../assets/services-logo/cat-2/10.svg'
import imageCat211 from '../assets/services-logo/cat-2/11.svg'

import imageCat301 from '../assets/services-logo/cat-3/1.svg'
import imageCat302 from '../assets/services-logo/cat-3/2.svg'
import imageCat303 from '../assets/services-logo/cat-3/3.svg'
import imageCat304 from '../assets/services-logo/cat-3/4.svg'
import imageCat305 from '../assets/services-logo/cat-3/5.svg'
import imageCat306 from '../assets/services-logo/cat-3/6.svg'

const JobFunctionTabs = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("tab1");


  useEffect(() => {
    const handleScroll = () => {
      const heroHeight =
        document.querySelector(".hero-section")?.offsetHeight || 0;
      if (window.scrollY > heroHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tabs = [
    // { id: "tab1", label: "All Categories" },
    { id: "tab2", label: "Innovative Designers" },
    { id: "tab3", label: "Full Stack Developers" },
    { id: "tab4", label: "Customer Servicing" },
  ];

  const tabsContent = {
    tab1: [
     { point: "Logo & Brand Guidelines Designer", image: imageCat01, category: "Innovative Designers" },
      { point: "Web / Graphic Designer", image: imageCat02, category: "Innovative Designers" },
      { point: "UI / UX Design", image: imageCat03, category: "Innovative Designers" },
      { point: "Power point designer", image: imageCat04, category: "Innovative Designers" },
      { point: "Whitepaper / datasheet designers", image: imageCat05, category: "Innovative Designers" },
      { point: "Email and Newsletter Designer", image: imageCat06, category: "Innovative Designers" },
      { point: "Social media post designer", image: imageCat07, category: "Innovative Designers" },
      { point: "Event Collateral Designers", image: imageCat08, category: "Innovative Designers" },
      { point: "Postcards and poster Designers", image: imageCat09, category: "Innovative Designers" },
      { point: "Brochures and leaflet designer", image: imageCat10, category: "Innovative Designers" },
      { point: "Office Branding designer", image: imageCat11, category: "Innovative Designers" },
      { point: "Audio Visuals experts", image: imageCat12, category: "Innovative Designers" },
      { point: "Video editors", image: imageCat13, category: "Innovative Designers" },
      { point: "Animated PPT designer", image: imageCat14, category: "Innovative Designers" },
       {
        point: "Expert Front-end Angular, React, and Vue.js Developers",
        image: imageCat201,
        category: "Full Stack Developers"
      },
      {
        point: "Expert Crown Peak & HCL DX Developers",
        image: imageCat202,
        category: "Full Stack Developers"
      },
      {
        point: "CSS frameworks experts such as Tailwind and Bootstrap",
        image: imageCat203,
        category: "Full Stack Developers"
      },
      {
        point: "High-Performance SPA Development",
        image: imageCat204,
        category: "Full Stack Developers"
      },

      {
        point: "Sketch, Figma, and Adobe XD designer to fully functional front-end solutions",
        image: imageCat205,
        category: "Full Stack Developers"
      },
      {
        point: "Fluid and Interactive Front-end Design experts with knowledge of React and JavaScript",
        image: imageCat206,
        category: "Full Stack Developers"
      },
      {
        point: "Figma, InVision, and Axure Prototyping & Wireframing experts",
        image: imageCat207,
        category: "Full Stack Developers"
      },
      {
        point: "Website Maintenance & Updates",
        image: imageCat208,
        category: "Full Stack Developers"
      },
      {
        point: "Shopify, Magento, and WooCommerce developers for eCommerce solutions",
        image: imageCat209,
        category: "Full Stack Developers"
      },
      {
        point: "WordPress, Drupal, PHP, and .NET Website Developers",
        image: imageCat210,
        category: "Full Stack Developers"
      },
      {
        point: "UI/UX Designers for creating wireframes and interactive prototypes using Figma or Adobe XD",
        image: imageCat211,
        category: "Full Stack Developers"
      },
       {
        point:
          "B2B e-Commerce Support to help your end customer in designing online sales catalogue by listing products",
        image: imageCat301,
        category: "Customer Servicing"
      },
      {
        point:
          "Hire a skilled voice team for L1-L3 support, telemarketing, sales, promotions, and verification services",
        image: imageCat302,
        category: "Customer Servicing"
      },
      {
        point:
          "Chat Process: Hire dedicated chat team delivers instant responses to live chat, assisting customers, answering questions, and enhancing engagement",
        image: imageCat303,
        category: "Customer Servicing"
      },
      {
        point:
          "Hire Email Process experts in India to resolve queries on regular bases",
        image: imageCat304,
        category: "Customer Servicing"
      },
      {
        point:
          "Hire skilled delivery professionals to execute daily allocations, maintaining predefined TAT and SLA commitments",
        image: imageCat305,
        category: "Customer Servicing"
      },
      {
        point:
          "Hire B2B eCommerce team to handle processes, from order and product management to payments, shipping, and returns",
        image: imageCat306,
        category: "Customer Servicing"
      },
    ],
    tab2: [
      { point: "Logo & Brand Guidelines Designer", image: imageCat01, category: "Innovative Designers" },
      { point: "Web / Graphic Designer", image: imageCat02, category: "Innovative Designers" },
      { point: "UI / UX Design", image: imageCat03, category: "Innovative Designers" },
      { point: "Power point designer", image: imageCat04, category: "Innovative Designers" },
      { point: "Whitepaper / datasheet designers", image: imageCat05, category: "Innovative Designers" },
      { point: "Email and Newsletter Designer", image: imageCat06, category: "Innovative Designers" },
      { point: "Social media post designer", image: imageCat07, category: "Innovative Designers" },
      { point: "Event Collateral Designers", image: imageCat08, category: "Innovative Designers" },
      { point: "Postcards and poster Designers", image: imageCat09, category: "Innovative Designers" },
      { point: "Brochures and leaflet designer", image: imageCat10, category: "Innovative Designers" },
      { point: "Office Branding designer", image: imageCat11, category: "Innovative Designers" },
      { point: "Audio Visuals experts", image: imageCat12, category: "Innovative Designers" },
      { point: "Video editors", image: imageCat13, category: "Innovative Designers" },
      { point: "Animated PPT designer", image: imageCat14, category: "Innovative Designers" },
    ],
    tab3: [
      {
        point: "Expert Front-end Angular, React, and Vue.js Developers",
        image: imageCat201,
        category: "Full Stack Developers"
      },
      {
        point: "Expert Crown Peak & HCL DX Developers",
        image: imageCat202,
        category: "Full Stack Developers"
      },
      {
        point: "CSS frameworks experts such as Tailwind and Bootstrap",
        image: imageCat203,
        category: "Full Stack Developers"
      },
      {
        point: "High-Performance SPA Development",
        image: imageCat204,
        category: "Full Stack Developers"
      },

      {
        point: "Sketch, Figma, and Adobe XD designer to fully functional front-end solutions",
        image: imageCat205,
        category: "Full Stack Developers"
      },
      {
        point: "Fluid and Interactive Front-end Design experts with knowledge of React and JavaScript",
        image: imageCat206,
        category: "Full Stack Developers"
      },
      {
        point: "Figma, InVision, and Axure Prototyping & Wireframing experts",
        image: imageCat207,
        category: "Full Stack Developers"
      },
      {
        point: "Website Maintenance & Updates",
        image: imageCat208,
        category: "Full Stack Developers"
      },
      {
        point: "Shopify, Magento, and WooCommerce developers for eCommerce solutions",
        image: imageCat209,
        category: "Full Stack Developers"
      },
      {
        point: "WordPress, Drupal, PHP, and .NET Website Developers",
        image: imageCat210,
        category: "Full Stack Developers"
      },
      {
        point: "UI/UX Designers for creating wireframes and interactive prototypes using Figma or Adobe XD",
        image: imageCat211,
        category: "Full Stack Developers"
      },
    ],
    tab4: [
      {
        point:
          "B2B e-Commerce Support to help your end customer in designing online sales catalogue by listing products",
        image: imageCat301,
        category: "Customer Servicing"
      },
      {
        point:
          "Hire a skilled voice team for L1-L3 support, telemarketing, sales, promotions, and verification services",
        image: imageCat302,
        category: "Customer Servicing"
      },
      {
        point:
          "Chat Process: Hire dedicated chat team delivers instant responses to live chat, assisting customers, answering questions, and enhancing engagement",
        image: imageCat303,
        category: "Customer Servicing"
      },
      {
        point:
          "Hire Email Process experts in India to resolve queries on regular bases",
        image: imageCat304,
        category: "Customer Servicing"
      },
      {
        point:
          "Hire skilled delivery professionals to execute daily allocations, maintaining predefined TAT and SLA commitments",
        image: imageCat305,
        category: "Customer Servicing"
      },
      {
        point:
          "Hire B2B eCommerce team to handle processes, from order and product management to payments, shipping, and returns",
        image: imageCat306,
        category: "Customer Servicing"
      },
    ],
  };


  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="min-h-screen relative flex flex-col gap-8 items-center justify-center bg-white py-10"
    >
      <h2 className='text-2xl md:text-5xl text-black font-bold text-center max-w-6xl mx-auto'>Hire Virtual Talent in Any Domain</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 rounded-3xl bg-white">
        {/* up Side Tabs */}
        <div>
        
          <div className="shadow-lg bg-gray-50 p-5 rounded-3xl flex gap-3 flex-col">
            <div className="flex justify-between mb-5">
              <p className="text-lg md:text-xl">Categories</p>
              <button className={activeTab === "tab1" ? "flex items-center gap-1 text-gray-300" : "text-gray-600 flex items-center gap-1"} onClick={() => setActiveTab("tab1")}><MdSettingsBackupRestore  className={activeTab === "tab1" ? "hidden" : "block"} /> Clear</button>
            </div>
            {tabs.map((tab) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-center bg-gray-200 px-5 py-3 text-sm md:text-sm rounded-3xl transition-all duration-300 ${activeTab === tab.id
                  ? "gradient text-white"
                  : "hover:bg-gray-100 text-gray-600"
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* down Side Content */}
        <div className="md:col-span-3 bg-white h-full max-sm:mt-10 rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-3 grid-cols-1 gap-4"
            >

              {tabsContent[activeTab].map((item, index) => (

                <motion.div
                  key={index}
                  className="border text-left p-5 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <img src={item.image} alt="" className="w-16 mb-2" />
                  <p className="bg-gray-200 p-2 px-5 text-xs font-semibold inline-block rounded-full mt-6 mb-3">{item.category}</p>
                  <p className="text-xl mb-6">{item.point}</p>
                  <button className="flex gap-2 items-center group mt-10"><IoArrowForwardCircleOutline className="text-3xl group-hover:ml-2 group-hover:text-[var(--pink)]" /></button>
                </motion.div>

              ))}


            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Gradient Button with Smooth Flip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          to="/join-us"
          className="bg-gradient-to-r from-[var(--pink)] to-[var(--blue)] bg-[length:200%_200%] hover:bg-[length:200%_200%] hover:bg-gradient-to-l transition-all duration-700 text-white px-16 text-2xl tracking-wide py-3 rounded-lg inline-block shadow-md"
        >
          Start Hiring
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default JobFunctionTabs;
