import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import Solution from '../assets/innovative-thumb.gif'

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-300">
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center py-4 text-left"
            >
                <span className="font-semibold text-gray-800">{title}</span>
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <IoIosArrowDown className="text-[var(--pink)] text-xl" />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <p className="pb-4 text-gray-600">{content}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Solutions = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const data = [
        {
            title: "Branding",
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
            content: [

                { points: "UI/UX Design" },
                { points: "Website Design" },
                { points: "Website Development" },
                { points: "Mobile App Design" },
                { points: "Packaging Design" },
                { points: "Graphic Design" },
                { points: "Emailers Design" },
                { points: "Magazine Design" },
            ]
        },
        {
            title: "Tech Solutions",
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
            ]
        },
        {
            title: "Digital Strategy",
            content: [
                { points: "Consumer Research" },
                { points: "Competitive Analysis" },
                { points: "UX Audit" },
                { points: "Product Strategy" },
                { points: "Brand Strategy" },
                { points: "Marketing Strategy" },
            ]
        },
        {
            title: "BPO Solutions",
            content: [
                { points: "We strongly believe that creativity lies even in communicating with your end client to map there need and with your service kitty. We have been working as a partner to provide an end-to-end solution by setting up team to communicate with your end-customers on your behalf so that you focus on your business growth predominantly. Post sales communication for designing catalogues for a leading B2B Portal Dedicated design team for designing web ad banners for a leading B2B portal" }
            ]
        }
    ];

    return (
        <>
            <section className="min-h-screen w-full z-50 relative flex flex-col items-center justify-center py-10 bg-black">
                <div className="max-w-6xl mx-auto w-full mt-10 p-6 bg-[#f1eff0] shadow-lg rounded-2xl">

                    <div className="grid grid-cols-3 gap-2">
                        <div>
                            <img src={Solution} alt="" className="w-60" />
                        </div>
                        <div className="col-span-2">
                            {data.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    title={item.title}
                                    content={item.content.map((point, idx) => (
                                        <li key={idx} className="list-disc ml-5">{point.points}</li>
                                    ))}
                                    isOpen={activeIndex === index}
                                    onClick={() =>
                                        setActiveIndex(activeIndex === index ? null : index)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Solutions