import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import data from "../data/service.json";
import PortfolioGrid from "../components/PortfolioGrid";

function Service() {
  const scrollContainerRef = useRef(null);
  const [activeTab, setActiveTab] = useState(data[0].id);
  const isProgrammaticScroll = useRef(false); // ✅ Flag to control auto scroll updates

  // --- Scroll to selected section on tab click ---
  const scrollToSection = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    const container = scrollContainerRef.current;

    if (section && container) {
      // mark as programmatic scroll
      isProgrammaticScroll.current = true;

      container.scrollTo({
        left: section.offsetLeft,
        behavior: "smooth",
      });

      // after smooth scroll ends (~800ms), re-enable listener
      setTimeout(() => {
        isProgrammaticScroll.current = false;
      }, 800);
    }
  };

  // --- Mouse wheel horizontal scroll ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

  // --- Update active tab when scrolling manually ---
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // skip updates if this scroll was triggered by click
      if (isProgrammaticScroll.current) return;

      const scrollLeft = container.scrollLeft;
      let closestSection = null;
      let closestDistance = Infinity;

      data.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) {
          const distance = Math.abs(section.offsetLeft - scrollLeft);
          if (distance < closestDistance) {
            closestDistance = distance;
            closestSection = item.id;
          }
        }
      });

      if (closestSection && closestSection !== activeTab) {
        setActiveTab(closestSection);
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [activeTab]);

  return (
    <section className="w-full z-50 flex flex-col gap-0 items-center justify-center py-14 pb-20 px-5 bg-white min-w-full snap-start flex-shrink-0">
      <motion.div className="absolute inset-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto w-full md:p-6 relative z-10">
        <h2 className="lg:text-5xl text-center md:text-4xl text-2xl font-bold">
          We build, manage, and deliver end-to-end with precision and accountability
        </h2>

        {/* --- Tabs --- */}
        <div className="max-sm:sticky max-sm:top-0">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 p-3 bg-gray-200 rounded-lg max-w-6xl mx-auto">
            {data.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-5 py-3 w-full text-sm md:text-lg rounded-lg text-center transition-all duration-300 ${
                  activeTab === item.id
                    ? "gradient text-white shadow-md"
                    : "text-black bg-white hover:shadow-md"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        {/* --- Scrollable content --- */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory mt-5 scrollbar-hide"
        >
          {data.map((item, i) => (
            <div
              id={item.id}
              key={i}
              className="min-w-full snap-start md:px-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {item.content.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between bg-white rounded-lg p-3 group hover:shadow-md transition-all"
                  >
                    <div className="grid grid-cols-4 gap-4">
                      <div className="p-3 border rounded-lg">
                        <img
                          src={`/${service.image}`}
                          alt=""
                          className="w-12 h-12 object-contain"
                        />
                      </div>
                      <div className="col-span-3 content-center">
                        <h4 className="text-lg font-medium group-hover:text-[var(--pink)]">
                        {service.points}
                      </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- CTA --- */}
      <div className="relative z-10">
        <Link
          to="/contact-us"
          className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 md:text-2xl tracking-wide py-3 rounded-lg inline-block"
        >
          Find your solution
        </Link>
      </div>
      <div className="py-20 max-w-6xl mx-auto">
        <h2 className="lg:text-5xl text-center md:text-4xl text-2xl font-bold">
          Portfolio
        </h2>
        <div id="portfolio">
          <PortfolioGrid />
        </div>
      </div>
    </section>
  );
}

export default Service;
