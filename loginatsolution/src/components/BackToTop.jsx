import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="bg-[var(--purple)] text-white p-3 rounded-lg shadow-lg hover:bg-[var(--pink)] transition-all duration-300"
        aria-label="Back to top"
      >
        <HiArrowUp className="text-2xl" />
      </button>
    </div>
  );
}

export default BackToTop;
