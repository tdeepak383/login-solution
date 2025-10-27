import { useEffect, useState } from "react";

const VerticalTabs = () => {

const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.querySelector(".hero-section")?.offsetHeight || 0;
      if (window.scrollY > heroHeight * 0.5) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Innovative Designers" },
    { id: "tab2", label: "Front-end/Full Stack Developers" },
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
      { point: "Expert Front-End Angular, React, and Vue.js Developers" },
      { point: "Expert Crown Peak & HCL DX Developers" },
      { point: "CSS frameworks experts such as Tailwind and Bootstrap" },
      { point: "High-Performance SPA Development" },
      { point: "Sketch, Figma, and Adobe XD designs to fully functional front-end solutions" },
      { point: "Fluid and Interactive Front-End Design experts with knowledge of React and JavaScript" },
      { point: "Figma, InVision, and Axure Prototyping & Wireframing experts" },
      { point: "Website Maintenance & Updates" },
      { point: "Shopify, Magento, and WooCommerce developers for eCommerce solutions" },
      { point: "WordPress, Drupal, PHP, and .NET Website Developers" },
      { point: "UI/UX Designers for creating wireframes and interactive prototypes using Figma or Adobe XD" },
    ],
    tab3: [
      { point: "B2B e-Commerce Support to help your end customer in designing online sales catalogue by listing products" },
      { point: "Hire a skilled voice team for L1-L3 support, telemarketing, sales, promotions, and verification services" },
      { point: "Chat Process: Hire dedicated chat team delivers instant responses to live chat, assisting customers, answering questions, and enhancing engagement" },
      { point: "Hire Email Process experts in India to resolve queries on regular bases" },
      { point: "Hire skilled delivery professionals to execute daily allocations, maintaining predefined TAT and SLA commitments" },
      { point: "Hire B2B eCommerce team to handle processes, from order and product management to payments, shipping, and returns" },
    ],
  };

  return (
    <div className={`min-h-screen z-50 relative flex items-center justify-center bg-black`}>
      <div className="flex flex-col md:h-full lg:h-[680px] z-50 md:flex-row w-full  shadow-lg border border-gray-800 max-w-6xl mx-auto mt-10 p-5 bg-gray-800 rounded-xl">

      
      {/* Left Side Tabs */}
      <div className="flex md:flex-col flex-row md:w-1/4 w-full bg-gray-800 rounded-xl p-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`w-full text-left px-5 py-3 font-medium transition-all duration-300 
              ${activeTab === tab.id
                ? "bg-gray-700 border-l-4 border-l-[var(--pink)] text-[var(--pink)]"
                : "hover:bg-gray-600 text-gray-300"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Right Side Content */}
      <div className="px-10 md:w-3/4 w-full bg-gray-800 rounded-xl">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? "block" : "hidden"} py-5`}
          >
            <h2 className="text-2xl text-gray-300 font-semibold mb-4">{tab.label}</h2>
            <ul className="list-disc pl-6 text-gray-300 leading-relaxed">
              {tabsContent[tab.id].map((item, index) => (
                <li key={index} className="">{item.point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default VerticalTabs;
