import React from 'react';
import { motion } from 'framer-motion';
import RequirementForm from './Form';
import { FaPhoneVolume } from "react-icons/fa";
import { RiNewspaperLine } from "react-icons/ri";
import { MdOutlineConnectWithoutContact } from "react-icons/md";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 },
  },
};

function CallToAction() {
  return (
    <>
      <section className='gradient py-20 w-full z-50 relative flex flex-col items-center justify-center text-center px-5'>
        <motion.div
          className='max-w-6xl mx-auto w-full'
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Left Column */}
            <motion.div
              className='lg:col-span-2 text-white'
              variants={fadeUp}
            >
              <motion.h2
                className='lg:text-6xl md:text-3xl text-2xl text-left tracking-wide'
                variants={fadeUp}
              >
                Top Talent Made Easy!
              </motion.h2>

              <motion.h4
                className='lg:text-4xl md:text-3xl text-2xl text-left mt-5'
                variants={fadeUp}
              >
                We take care of hiring, training, and everything in between.
              </motion.h4>

              <motion.div
                className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-10'
                variants={staggerContainer}
              >
                {[
                  {
                    icon: <FaPhoneVolume className='mx-auto text-3xl group-hover:-rotate-45 transition-all duration-500 delay-100' />,
                    text: 'Call us for a discussion'
                  },
                  {
                    icon: <RiNewspaperLine className='mx-auto text-3xl group-hover:-rotate-45 transition-all duration-500 delay-100' />,
                    text: 'We arrange Interviews with shortlisted candidates'
                  },
                  {
                    icon: <MdOutlineConnectWithoutContact className='mx-auto text-3xl group-hover:-rotate-45 transition-all duration-500 delay-100' />,
                    text: 'Connect with the solver for regular deliveries'
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    className='bg-white/10 rounded-xl p-5 group hover:bg-white/20 transition-all duration-500 delay-100'
                  >
                    {item.icon}
                    <p className='text-xl px-5'>{item.text}</p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className='mt-10 relative w-3/4 mx-auto'
                variants={fadeUp}
              >
                <hr />
                <div className='absolute bg-white w-2 rounded-full h-2 -top-1 left-0'></div>
                <div className='absolute bg-white w-2 rounded-full h-2 -top-1 left-1/2'></div>
                <div className='absolute bg-white w-2 rounded-full h-2 -top-1 right-0'></div>
              </motion.div>
            </motion.div>

            {/* Right Column (Form) */}
            <motion.div variants={fadeUp}>
              <RequirementForm />
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default CallToAction;
