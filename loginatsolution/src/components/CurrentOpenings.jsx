import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const openings = [
  {
    title: "UI/UX Designer",
    location: "Noida",
    type: "Full-Time",
    description:
      "Create intuitive and engaging user experiences for web and mobile platforms.",
  },
  {
    title: "React Developer",
    location: "Noida / Remote",
    type: "Contract",
    description:
      "Build scalable front-end applications with React.js and Tailwind CSS.",
  },
  {
    title: "Marketing Strategist",
    location: "Noida",
    type: "Full-Time",
    description:
      "Develop and execute digital marketing campaigns to drive brand growth.",
  },
];

const CurrentOpenings = () => {
  return (
    <section className="relative w-full py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-[var(--accent-primary)] mb-3"
        >
          Current Openings
        </motion.h2>
        <p className="text-gray-600 text-lg">
          Join our team of innovators, creators, and problem-solvers.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 max-w-6xl mx-auto">
        {openings.map((job, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-gray-100"
          >
            <div className="text-left">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-3">{job.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span>{job.location}</span>
                <span className="bg-[var(--accent-gradient1)] text-[var(--accent-primary)] px-3 py-1 rounded-full text-xs font-semibold">
                  {job.type}
                </span>
              </div>
            </div>

            <Link
              to="/careers/apply"
              className="mt-6 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--pink)] to-[var(--purple)] text-white font-semibold py-2 rounded-lg transition hover:shadow-md"
            >
              Apply Now <FaArrowRight className="text-sm" />
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CurrentOpenings;
