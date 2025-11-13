import React, { useState } from "react";
import { motion } from "framer-motion";

function AfterHero({onClick}) {

  
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
            className="text-2xl md:text-4xl mb-16 para-line-height"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Empower your business with specialized global expertise through our premium talent network of professionals across diverse roles including Customer Support Specialists, Web/Graphic Designers, Digital Marketers, PowerPoint Designers, Video Editors, Email Marketers, Frontend and Fullstack Developers etc.
          </motion.h3>
            
          <motion.h3
            className="text-2xl md:text-4xl mb-16 para-line-height"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            We support Large IT Companies, Design and Marketing Agencies, as well as Fast-growing and Next-gen Ventures to scale faster with world-class global talent.
          </motion.h3>

          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <button
              onClick={onClick}
              className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 md:text-2xl tracking-wide py-3 rounded-lg inline-block"
            >
              Connect with Us
            </button>
          </motion.div>
        </div>
        
      </section>
    </>
  );
}

export default AfterHero;
