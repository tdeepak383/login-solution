import React from 'react';
import { motion } from 'framer-motion';
import RequirementForm from './Form';
import curvedline from '../assets/curved-line-icon.png'
import call from '../assets/call.svg'
import connect from '../assets/connect.svg'
import list from '../assets/list.svg'
import curvedLineMob from '../assets/curved-line-mob.png'


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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Column */}
            <motion.div
              className='lg:col-span-2 text-white'
              variants={fadeUp}
            >
              <motion.h2
                className='lg:text-6xl md:text-3xl text-2xl text-left tracking-wide'
                variants={fadeUp}
              >
                Top talent made easy!
              </motion.h2>

              <motion.h4
                className='lg:text-4xl md:text-3xl text-xl text-left mt-5'
                variants={fadeUp}
              >
                We take care of hiring, training, and everything in between.
              </motion.h4>

              <motion.div
                className='mt-10 relative hidden md:block'
                variants={staggerContainer}
              >
                <img src={curvedline} alt="" className='lg:w-3/4 md:w-full lg:ml-10 hidden md:block' />
                {/* <img src={curvedLineMob} alt="" className='w-3/4 ml-10 md:hidden block' /> */}
                <div className='md:absolute flex md:left-0 md:-top-8 lg:left-0 lg:top-0'>
                  <div className='bg-white text-black p-3 rounded-full '>
                    <img src={call} className='w-10' />
                  </div>
                </div>
                <div className='md:absolute flex md:left-0 md:top-10 lg:left-0 lg:top-20'>
                  <p className='text-xs md:text-xl text-left'>Call us for <br /> a discussion</p>
                </div>
                <div className='md:absolute flex md:left-80 md:top-72 lg:left-72 lg:top-52'>
                  <div className='bg-white text-black p-3 rounded-full'>
                    <img src={list} className='w-10' />
                  </div>
                </div>
                <div className='md:absolute flex md:left-72 md:top-40 lg:left-64 lg:top-20'>
                  <p className='text-xs md:text-xl text-left md:text-center'>We arrange <br />Interviews <br /> with shortlisted <br />candidates</p>
                </div>
                <div className='md:absolute flex md:right-0 md:top-20 lg:left-3/4 lg:top-20'>
                  <div className='bg-white text-black p-3 rounded-full'>
                    <img src={connect} className='w-10' />
                  </div>
                </div>
                <div className='md:absolute flex md:right-0 md:top-40 lg:left-2/3 lg:top-48'>
                  <p className='text-xs md:text-xl text-left md:text-right'>Connect with the <br /> solver for regular <br /> deliveries</p>
                </div>
              </motion.div>

            </motion.div>

            {/* Right Column (Form) */}
            <motion.div 
            variants={fadeUp}
            className='md:max-w-xl mx-auto md:mt-5  lg:max-w-full w-full'
            >
              <RequirementForm color={"white"}/>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  );
}

export default CallToAction;
