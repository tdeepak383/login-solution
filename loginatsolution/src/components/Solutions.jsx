import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";
import data from '../data/service.json'

const AccordionItem = ({ title, content, isOpen, onClick, image }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 },
    },
  };

  const pointVariants = {
    hidden: { opacity: 0, y: -15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="font-semibold md:text-3xl text-[var(--pink)]">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <GoArrowDown className="text-[var(--pink)] text-xl" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="pb-4 text-gray-600 flex flex-wrap gap-4"
            >
              {content.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={pointVariants}
                  className="bg-gray-100 px-5 py-3 rounded-full text-left"
                >
                  {point.points}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const sectionRef = useRef(null);

  // fade overlay when scrolling
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "start end"],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="lg:sticky relative md:top-0 w-full md:z-0 flex flex-col gap-8 items-center justify-center py-20 px-5 bg-white overflow-hidden"
    >
      {/* Fade overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="max-sm:hidden absolute inset-0 bg-black/40 pointer-events-none"
      ></motion.div>


        <div className="max-w-6xl mx-auto w-full p-6 relative z-10">
        <div className="flex lg:flex-row flex-col gap-8">
          <div className="lg:w-1/3">
            <h2 className='text-xl md:text-4xl text-black max-w-6xl mx-auto custom-line-height'>We can also take full ownership and deliver your project end-to-end</h2>
            <hr className="border-b border-4 w-1/3 mt-5 border-[var(--pink)]"/>
          </div>

           <div className="lg:w-3/4">
             {data.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                image={item.image}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            ))}
           </div>
        </div>
      </div>

      <div className="relative z-10 flex justify-center mt-12">
        <Link
          to="/contact-us"
          className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 md:text-2xl tracking-wide py-3 rounded-lg inline-block"
        >
          Find your solution
        </Link>
      </div>
    </section>
  );
};

export default Solutions;
