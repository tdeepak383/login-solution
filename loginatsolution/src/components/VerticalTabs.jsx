import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import angularReactVue from "../assets/angular-react-vue.png";
import graphicDesign from "../assets/graphic-designer.png";
import b2becommerce from "../assets/b2b-ecommerce.png";
import { Link } from "react-router-dom";

const VerticalTabs = () => {
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
    { id: "tab1", label: "Innovative Designers" },
    { id: "tab2", label: "Front-end / Full Stack Developers" },
    { id: "tab3", label: "Customer Servicing" },
  ];

  const tabsContent = {
    tab1: [
      { point: "Logo & Brand Guidelines Designer" },
      { point: "Web / Graphic Designer" },
      { point: "UI / UX Design" },
      { point: "Power point designer" },
      { point: "Whitepaper / datasheet designers" },
      { point: "Email and Newsletter Designer" },
      { point: "Social media post designer" },
      { point: "Event Collateral Designers" },
      { point: "Postcards and poster Designers" },
      { point: "Brochures and leaflet designer" },
      { point: "Office Branding designer" },
      { point: "Audio Visuals experts" },
      { point: "Video editors" },
      { point: "Animated PPT designer" },
    ],
    tab2: [
      {
        point: "Expert Front-end Angular, React, and Vue.js Developers",
        
      },
      { point: "Expert Crown Peak & HCL DX Developers" },
      { point: "CSS frameworks experts such as Tailwind and Bootstrap" },
      { point: "High-Performance SPA Development" },
      {
        point: "Sketch, Figma, and Adobe XD designer to fully functional front-end solutions",
      },
      {
        point: "Fluid and Interactive Front-end Design experts with knowledge of React and JavaScript",
      },
      { point: "Figma, InVision, and Axure Prototyping & Wireframing experts" },
      { point: "Website Maintenance & Updates" },
      {
        point: "Shopify, Magento, and WooCommerce developers for eCommerce solutions",
      },
      { point: "WordPress, Drupal, PHP, and .NET Website Developers" },
      {
        point: "UI/UX Designers for creating wireframes and interactive prototypes using Figma or Adobe XD",
      },
    ],
    tab3: [
      {
        point:
          "B2B e-Commerce Support to help your end customer in designing online sales catalogue by listing products",
       
      },
      {
        point:
          "Hire a skilled voice team for L1-L3 support, telemarketing, sales, promotions, and verification services",
      },
      {
        point:
          "Chat Process: Hire dedicated chat team delivers instant responses to live chat, assisting customers, answering questions, and enhancing engagement",
      },
      {
        point:
          "Hire Email Process experts in India to resolve queries on regular bases",
      },
      {
        point:
          "Hire skilled delivery professionals to execute daily allocations, maintaining predefined TAT and SLA commitments",
      },
      {
        point:
          "Hire B2B eCommerce team to handle processes, from order and product management to payments, shipping, and returns",
      },
    ],
  };

  // Animation Variants
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
      className="min-h-screen relative flex flex-col gap-8 items-center justify-center bg-gradient-to-b from-gray-100 via-white to-gray-100 px-5 py-10"
    >
      <div className="flex flex-col md:h-full lg:h-[680px] md:flex-row w-full shadow-lg max-w-6xl mx-auto mt-10 p-5 bg-white rounded-3xl">
        {/* Left Side Tabs */}
        <div className="flex md:flex-col flex-row md:w-1/4 w-full bg-gray-50 rounded-l-xl p-2">
          {tabs.map((tab) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left px-5 py-3 text-sm md:text-2xl rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gray-200 border-l-4 border-l-[var(--pink)] text-gray-900"
                  : "hover:bg-gray-100 text-gray-600"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Right Side Content */}
        <div className="md:px-10 md:w-3/4 w-full bg-gray-50 rounded-r-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.5 }}
              className="py-5"
            >
              <h2 className="text-2xl font-semibold mb-4">
                {tabs.find((t) => t.id === activeTab)?.label}
              </h2>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-2 md:grid-cols-3 gap-4 md:pl-6"
              >
                {tabsContent[activeTab].map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-gray-800 text-gray-100 border p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {item.point}
                    {/* {item.image && (
                      <img
                        src={item.image}
                        alt=""
                        className="w-20 mt-2 ml-auto opacity-90"
                      />
                    )} */}
                  </motion.div>
                ))}
              </motion.div>
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
          to="/contact"
          className="bg-gradient-to-r from-[var(--pink)] to-[var(--blue)] bg-[length:200%_200%] hover:bg-[length:200%_200%] hover:bg-gradient-to-l transition-all duration-700 text-white px-16 text-2xl tracking-wide py-3 rounded-lg inline-block shadow-md"
        >
          Start Hiring
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default VerticalTabs;
