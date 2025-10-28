import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function AfterHero() {
  // Animation variants
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
        className="after-hero-section min-h-screen px-4 flex items-center margin-top-hero"
      >
        <div className="max-w-6xl mx-auto py-20 space-y-16">
          <motion.p
            className="text-3xl md:text-5xl mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            We’re a diverse team of visionary developers and creative designers,
            driven by curiosity and a shared passion for problem-solving and
            collaboration.
          </motion.p>

          <motion.p
            className="text-3xl md:text-5xl mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            We may have different tastes and speak different languages, but we
            all agree on one thing: the best designs come to life when dynamic
            thinking and creativity come together!
          </motion.p>

          <motion.div
            className="text-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Link
              to="/contact"
              className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 text-2xl tracking-wide py-3 rounded-lg inline-block"
            >
              Find your solution
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AfterHero;
