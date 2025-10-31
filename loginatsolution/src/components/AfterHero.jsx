import React, { useState } from "react";
import { motion } from "framer-motion";
import PopUp from "./PopUp";

function AfterHero() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);


  
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 3, ease: "easeOut" },
    },
  };

  return (
    <>
      <section
        id="next-section"
        className="after-hero-section relative min-h-screen px-4 flex items-center margin-top-hero"
      >
       
        <div className="max-w-6xl mx-auto py-20 space-y-16">
          <motion.h3
            className="text-3xl md:text-5xl mb-16 para-line-height"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Empower your business with specialized global expertise through our premium talent network of professionals across diverse roles—including Customer support specialists web / graphic designers, digital marketers, Power point ppt designers, video editors, email marketers, front-end and full-stack developers etc. 
          </motion.h3>
            
          <motion.h3
            className="text-3xl md:text-5xl mb-16 para-line-height"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            We support large IT companies, design and marketing agencies, as well as fast-growing and next-gen ventures to scale faster with world-class global talent.
          </motion.h3>

          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <button
              onClick={() => setIsPopupOpen(true)}
              className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 text-2xl tracking-wide py-3 rounded-lg inline-block"
            >
              Connect with Us
            </button>
          </motion.div>
        </div>
        <PopUp isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      </section>
    </>
  );
}

export default AfterHero;
