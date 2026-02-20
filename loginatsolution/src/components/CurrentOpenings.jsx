import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoBriefcase } from "react-icons/io5";
import openings from "../data/openings.json"

const CurrentOpenings = ({onClick}) => {

// const [data, setData] = useState([]);

// useEffect(() => {
//   const controller = new AbortController();

//   const fetchData = async () => {
//     try {
//       const response = await fetch(
//         `${import.meta.env.VITE_VERCEL_URL}/api/jobs`,
//         { signal: controller.signal }
//       );

//       if (!response.ok) throw new Error("Failed to fetch");

//       const result = await response.json();
//       setData(result.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   fetchData();

//   return () => controller.abort();
// }, []);


  return (
    <section className="relative w-full pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-5xl font-bold text-[var(--accent-primary)] mb-3"
        >
          Current Openings
        </motion.h2>
        <p className="text-gray-600 text-lg">
          Join our team of innovators, creators, and problem-solvers.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {openings.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100"
          >
            <div className="text-left">
              <Link
                to={`/jobs/${job.title
                  .toLowerCase()
                  .replace(/[^a-z0-9\s-]/g, "")
                  .replace(/\s+/g, "-")}`}
              >
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h3>
              {/* <p className="text-gray-600 font-semibold mb-3">{job.company}</p> */}
              <p className="text-gray-600 mb-3">{job.subtitle}</p>
              <div className="text-sm text-gray-500 mt-4">
                <p className="flex items-center gap-2"><FaLocationDot /> {job.location}</p>
                <p className="flex items-center gap-2 mt-3"><IoBriefcase /> {job.experience}</p>
              </div>
              </Link>
            </div>

            <button
              onClick={onClick}
              className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white font-semibold py-2 rounded-lg transition hover:shadow-md"
            >
              Apply now <FaArrowRight className="text-sm" />
            </button>
          </motion.div>
        ))}
      </div>
     
    </section>
  );
};

export default CurrentOpenings;
