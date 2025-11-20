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
import imageCat307 from '../assets/services-logo/cat-3/7.svg'
import imageCat308 from '../assets/services-logo/cat-3/8.svg'
import imageCat309 from '../assets/services-logo/cat-3/9.svg'
import imageCat310 from '../assets/services-logo/cat-3/10.svg'
import imageCat311 from '../assets/services-logo/cat-3/11.svg'
import imageCat312 from '../assets/services-logo/cat-3/12.svg'


const tabs = [
  { id: "tab2", label: "Designer" },
  { id: "tab3", label: "Full Stack Developer" },
  { id: "tab4", label: "Customer Support Services" },
];


const tabsContent = {

  tab2: [
    {
      point: "Brand Experience Designer",
      image: imageCat01,
      category: "Innovative Designers",
      labels: ["Photoshop", "Illustrator"]
    },
    {
      point: "Web/Graphic Designer",
      image: imageCat02,
      category: "Innovative Designers",
      labels: ["Photoshop", "Illustrator", "Figma"]

    },
    { 
      point: "UI/UX Designer", 
      image: imageCat03, 
      category: "Innovative Designers",
      labels: ["Figma", "Adobe XD", "Sketch"]
    },
    { 
      point: "PowerPoint Designer", 
      image: imageCat04, 
      category: "Innovative Designers",
      labels: ["PowerPoint", "Keynote"]
    },
    { 
      point: "Whitepaper/ Datasheet Designer", 
      image: imageCat05, 
      category: "Innovative Designers",
      labels: ["InDesign", "Illustrator", "Photoshop", "MS Word"]
    },
    { 
      point: "Email and Newsletter Designer", 
      image: imageCat06, 
      category: "Innovative Designers",
      labels: ["Illustrator", "Photoshop"]
    },
    { 
      point: "Social Media Post Designer", 
      image: imageCat07, 
      category: "Innovative Designers",
      labels: ["Canva", "Photoshop", "Illustrator"]
    },
    { 
      point: "Event Collateral Designer", 
      image: imageCat08, 
      category: "Innovative Designers",
      labels: ["Illustrator", "Photoshop"]
    },
    { 
      point: "Postcards and Poster Designer", 
      image: imageCat09, 
      category: "Innovative Designers",
      labels: ["Illustrator", "Photoshop"] 
    },
    { 
      point: "Brochures and Leaflet Designer", 
      image: imageCat10, 
      category: "Innovative Designers",
      labels: ["InDesign", "Illustrator", "Photoshop"] 
    },
    { 
      point: "Office Branding Designer", 
      image: imageCat11, 
      category: "Innovative Designers",
      labels: ["Illustrator", "Photoshop"] 
    },
    { 
      point: "Audio Visuals Experts", 
      image: imageCat12, 
      category: "Innovative Designers",
      labels: ["After Effects", "Premiere Pro"]
    },
    { 
      point: "Video Editors", 
      image: imageCat13, 
      category: "Innovative Designers",
      labels: ["Final Cut Pro", "Premiere Pro", "After Effects"]
    },
    { 
      point: "Animated PPT Designer", 
      image: imageCat14, 
      category: "Innovative Designers" ,
      labels: ["PowerPoint", "After Effects", "Adobe Express"]
    },
  ],
  tab3: [
    {
      point: "Front-End Developers: Angular, React, and Vue.js",
      image: imageCat201,
      category: "Full Stack Developers",
      labels: ["Angular", "React", "Vue.js", "JavaScript"]
    },
    {
      point: "Crownpeak and HCL DX Developer",
      image: imageCat202,
      category: "Full Stack Developers",
      labels: ["Crown Peak", "HCL DX"]
    },
    {
      point: "CSS frameworks experts: Tailwind CSS and Bootstrap",
      image: imageCat203,
      category: "Full Stack Developers",
      labels: ["Tailwind", "Bootstrap", "CSS"]
    },
    {
      point: "Single Page Application (SPA) Developer",
      image: imageCat204,
      category: "Full Stack Developers",
      labels: ["SPA", "JavaScript", "React", "Angular"]
    },

    {
      point: "Sketch, Figma, and Adobe XD Designers",
      image: imageCat205,
      category: "Full Stack Developers",
      labels: ["Figma", "Sketch", "Adobe XD"]
    },
    {
      point: "Fluid and Interactive Front-End Design Experts: React and JavaScript",
      image: imageCat206,
      category: "Full Stack Developers",
      labels: ["React", "JavaScript", "HTML", "CSS"]
    },
    {
      point: "Prototyping & Wireframing Experts: (Figma, InVision, and Axure)",
      image: imageCat207,
      category: "Full Stack Developers",
      labels: ["Figma", "InVision", "Axure"]
    },
    {
      point: "Website Maintenance & Update Services",
      image: imageCat208,
      category: "Full Stack Developers",
      labels: ["HTML", "CSS", "JavaScript"]
    },
    {
      point: "ECommerce Developer: Shopify, Magento, and WooCommerce",
      image: imageCat209,
      category: "Full Stack Developers",
      labels: ["Shopify", "Magento", "WooCommerce"]
    },
    {
      point: "Web Developer: WordPress, Drupal, PHP, and .NET",
      image: imageCat210,
      category: "Full Stack Developers",
      labels: ["WordPress", "Drupal", "PHP", ".NET"]
    },
    {
      point: "Wireframes and Prototype designer: Figma or Adobe XD",
      image: imageCat211,
      category: "Full Stack Developers",
      labels: ["Figma", "Adobe XD"]
    },
  ],
  tab4: [
    {
      point: "Customer Support/ Helpdesk Services",
      image: imageCat301,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Order Taking & Processing",
      image: imageCat302,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Technical Support (L1, L2, L3)",
      image: imageCat303,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Billing & Payment Support",
      image: imageCat304,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Reservation & Booking Services",
      image: imageCat305,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Product Information & Inquiry Handling",
      image: imageCat306,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Complaint Resolution/ Grievance Handling",
      image: imageCat307,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Customer Retention Programs",
      image: imageCat308,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Virtual Receptionist/ Switchboard Services",
      image: imageCat309,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Chat process experts",
      image: imageCat310,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Email process experts",
      image: imageCat311,
      category: "Customer Servicing",
      labels: []
    },
    {
      point:
        "Product Management to Payments, Shipping, and Returns",
      image: imageCat312,
      category: "Customer Servicing",
      labels: []
    },
  ],
};

const allTabsContent = [
  ...tabsContent.tab2,
  ...tabsContent.tab3,
  ...tabsContent.tab4,
];

tabsContent.tab1 = [...allTabsContent];

const JobFunctionTabs = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState("tab2");


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
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10 rounded-3xl bg-white">
        {/* up Side Tabs */}
        <div className="md:sticky max-sm:sticky max-sm:top-0 md:top-0">

          <div className="shadow-lg bg-gray-50 p-5 rounded-3xl">
            <div className="flex justify-between mb-5">
              <p className="text-lg md:text-xl">Categories</p>
              <button className={activeTab === "tab1" ? "flex items-center gap-1 text-gray-300" : "text-gray-600 flex items-center gap-1"} onClick={() => setActiveTab("tab1")}><MdSettingsBackupRestore className={activeTab === "tab1" ? "hidden" : "block"} /> Clear</button>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-col gap-3">
              {tabs.map((tab) => (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-left bg-gray-200 px-5 py-3 text-sm md:text-sm rounded-lg transition-all duration-300 ${activeTab === tab.id
                  ? "gradient text-white"
                  : "hover:bg-gray-100 text-gray-600"
                  }`}
              >
                {tab.label}
              </motion.button>
            ))}
            </div>
          </div>
        </div>

        {/* down Side Content */}
        <div className="lg:col-span-3 bg-white h-full max-sm:mt-10 max-sm:px-3 rounded-xl">
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
                  className="border text-left p-5 rounded-3xl shadow-md hover:shadow-lg group transition-all duration-300"
                >
                  <div className="flex flex-col justify-between h-full">
                    <div>
                      <img src={item.image} alt="" className="w-16 mb-2" />
                      {/* <p className="bg-gray-200 p-2 px-5 text-xs font-semibold inline-block rounded-full mt-6 mb-3">{item.category}</p> */}
                      <p className="text-xl mb-6">{item.point}</p>
                      <div className="flex flex-wrap gap-1">
                        {item.labels.map((label, idx) => (
                          <span key={idx} className="border border-[var(--purple)] px-3 py-1 rounded-full text-xs">{label}</span>
                        ))}
                      </div>
                    </div>
                  {/* <button className="flex w-full gap-2 items-center group mt-10"><IoArrowForwardCircleOutline className="text-3xl group-hover:ml-2 group-hover:text-[var(--purple)]" /></button> */}
                  </div>
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
          to="/contact-us"
          className="bg-gradient-to-r from-[var(--pink)] to-[var(--blue)] hover:bg-gradient-to-l transition-all duration-700 text-white px-16 md:text-2xl tracking-wide py-3 rounded-lg inline-block shadow-md"
        >
          Start hiring
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default JobFunctionTabs;
