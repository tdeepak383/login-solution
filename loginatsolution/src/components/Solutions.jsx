import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { GoArrowDown } from "react-icons/go";
import { Link } from "react-router-dom";
import branding from "../assets/branding.svg";
import designing from "../assets/designing.svg";
import techSolution from "../assets/tech-solution.svg";
import digitalStrategy from "../assets/digital-strategy.svg";

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
        <span className="font-semibold text-3xl text-gray-800">{title}</span>
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
              className="pb-4 text-gray-600 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {content.map((point, idx) => (
                <motion.div
                  key={idx}
                  variants={pointVariants}
                  className="bg-gray-100 p-2 rounded-full text-center"
                >
                  {point.points}
                </motion.div>
              ))}
            </motion.div>

            {/* <img src={image} alt={title} className="w-1/2 mx-auto" /> */}
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

  const data = [
    {
      title: "Branding",
      image: branding,
      content: [
        { points: "Naming" },
        { points: "Messaging & Positioning" },
        { points: "Social media posts" },
        { points: "Posters for office Branding" },
        { points: "Logo Designing" },
        { points: "Website Development" },
        { points: "Brand Guidelines" },
        { points: "Iconography" },
        { points: "Illustration" },
        { points: "Animation" },
      ],
    },
    {
      title: "Design",
      image: designing,
      content: [
        { points: "UI/UX Design" },
        { points: "Website Design" },
        { points: "Website Development" },
        { points: "Mobile App Design" },
        { points: "Packaging Design" },
        { points: "Graphic Design" },
        { points: "Emailers Design" },
        { points: "Magazine Design" },
      ],
    },
    {
      title: "Tech Solutions",
      image: techSolution,
      content: [
        { points: "Stunning Website, Applications" },
        { points: "or Software" },
        { points: "Fully-functional customized" },
        { points: "E-commerce Solutions" },
        { points: "Full-stack Android / iOS App Development" },
        { points: "Customized ERP Solutions" },
        { points: "Advanced HRMS to manage employee" },
        { points: "Managing AWS servers" },
        { points: "Website Maintenance & Support" },
        { points: "Web Development solutions" },
      ],
    },
    {
      title: "Digital Strategy",
      image: digitalStrategy,
      content: [
        { points: "Consumer Research" },
        { points: "Competitive Analysis" },
        { points: "UX Audit" },
        { points: "Product Strategy" },
        { points: "Brand Strategy" },
        { points: "Marketing Strategy" },
      ],
    },
    {
      title: "Back Office Operations",
      image: digitalStrategy,
      content: [
        { points: "Data entry and data processing" },
        { points: "Catalogue and content management" },
        { points: "Finance and accounting support" },
        { points: "HR and payroll operations" },
        { points: "Compliance and documentation" },
        { points: "Reporting and analytics support" },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="sticky top-0 w-full z-50 flex flex-col gap-8 items-center justify-center py-20 px-5 bg-white overflow-hidden"
    >
      {/* Fade overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-black/40 pointer-events-none"
      ></motion.div>

      <div className="max-w-6xl mx-auto w-full mt-10 p-6 relative z-10">
      <h2 className='text-2xl md:text-5xl text-black font-bold text-center max-w-6xl mx-auto mb-20'>We can also take full ownership and deliver your project end to end</h2>

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

      <div className="relative z-10">
        <Link
          to="/contact-us"
          className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 text-2xl tracking-wide py-3 rounded-lg inline-block"
        >
          Find your solution
        </Link>
      </div>
    </section>
  );
};

export default Solutions;
