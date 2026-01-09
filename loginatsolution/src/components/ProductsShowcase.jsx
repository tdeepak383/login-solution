import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { LuArrowDownRight } from "react-icons/lu";


const slidesData = [
  {
    id: 0,
    title: "Accrete Consulting Solutions",
    image: "/images/acnsol.jpg",
    website: "https://acnsol.com/",
    techStack: [
      "PHP",
      "Animate.css",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "FontAwesome",
    ],
  },
  {
    id: 1,
    title: "ARGL Ltd.",
    image: "/images/ARGL.jpg",
    website: "https://www.arglltd.com/",
    techStack: ["WordPress", "PHP", "Bootstrap", "MySQL", "jQuery"],
  },
  {
    id: 2,
    title: "British Council",
    description: "Employee only access",
    image: "/images/British-Council.jpg",
    website: "#",
    techStack: ["SharePoint", "HTML", "CSS", "bootstrap"],
  },
  {
    id: 3,
    title: "Constellation Global Consulting",
    image: "/images/CGC.jpg",
    website: "https://constellation-gc.com/",
    techStack: [
      "HTML",
      "CSS",
      "JavaScript",
      "jQuery",
      "Bootstrap",
      "GSAP",
    ],
  },
  {
    id: 4,
    title: "HCLTech",
    description: "A restricted internal portal exclusively for employees, providing controlled access to sales assets for sales team reference.",
    image: "/images/CloudSMART.jpg",
    website: "#",
    techStack: [".NET", "Crownpeak", "Bootstrap", "CSS", "JavaScript", "jQuery", "AWS"],
  },
  {
    id: 5,
    title: "Design Domain Consultants",
    image: "/images/designdomainconsultants.jpg",
    website: "https://designdomainconsultants.in/",
    techStack: ["WordPress", "PHP", "Bootstrap", "MySQL", "jQuery"],
  },
  {
    id: 6,
    title: "Find My Passion",
    image: "/images/Find-my-passion.jpg",
    website: "https://findmypassion.in/",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "JavaScript",
      "Tailwind CSS",
      "Framer Motion",
      "GSAP",
      "Material UI",
      "React Icons",
    ],
  },
  {
    id: 7,
    title: "Professional Edge",
    image: "/images/PROFESSIONAL-EDGE.jpg",
    website: "https://professionaledge.in/",
    techStack: ["WordPress", "PHP", "Bootstrap", "MySQL", "jQuery"],
  },
  {
    id: 8,
    title: "Saltchemy",
    image: "/images/Salt-chemy.jpg",
    website: "https://saltchemycorp.com/",
    techStack: ["WordPress", "PHP", "Bootstrap", "MySQL", "jQuery"],
  },
  {
    id: 9,
    title: "TE-Connectivity",
    image: "/images/TE.jpg",
    website: "",
    techStack: [
      "Angular",
      "Zone.js",
      "Bootstrap",
      "TypeScript",
      "core-js",
      "jQuery",
      "SharePoint"
    ],
  },
  {
    id: 10,
    title: "Incent4",
    image: "/images/Incent4.jpg",
    website: "https://incent4.com/",
    techStack: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    id: 11,
    title: "Vitria",
    image: "/images/Vitria.jpg",
    website: "https://vitria.com/",
    techStack: ["WordPress", "PHP", "Bootstrap", "MySQL", "jQuery"],
  },
];



export default function ProductsShowcase() {
    const swiperRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const accordionRefs = useRef([]);

    const handleAccordionClick = (index) => {
        setActiveIndex(index);
        swiperRef.current.slideTo(index);
        scrollToActiveItem(index);
    };

    const scrollToActiveItem = (index) => {
    const el = accordionRefs.current[index];
    if (el) {
        el.scrollIntoView({
        behavior: "smooth",
        block: "center",
        });
    }
    };


    return (
        <section className="py-16 md:py-20 w-full bg-white relative flex flex-col items-center justify-center px-4 md:px-5">
  <div className="max-w-6xl mx-auto w-full md:py-10 md:p-6">

    {/* Heading */}
    <div className="text-center mb-10 md:mb-12">
      <h2 className="text-2xl md:text-5xl text-black mb-4 md:mb-5 font-bold">
        Digital Experiences
      </h2>
      <p className='text-lg md:text-xl text-gray-700 mb-10 max-w-5xl mx-auto max-sm:px-4'>We designed and developed digital experiences with a strong focus on clarity, usability, and engagement, ensuring each interaction delivered measurable value.</p>
    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-start relative">

      {/* LEFT – SLIDER */}
      <div className="">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
            scrollToActiveItem(swiper.activeIndex);
          }}
          slidesPerView={1}
          className="rounded-2xl md:rounded-3xl overflow-hidden"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="bg-gray-100 h-[220px] sm:h-[280px] md:h-[400px] rounded-2xl md:rounded-3xl flex items-center justify-center">
                <img
                  src={`${slide.image}`}
                  alt={slide.title}
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Slider Arrows (desktop only – OK) */}
        <button
          onClick={() => swiperRef.current.slidePrev()}
          className="absolute hidden lg:flex left-[-70px] top-1/2 -translate-y-1/2 bg-[var(--purple)] text-white p-3 rounded-full"
        >
          <IoArrowBackSharp className="text-xl" />
        </button>

        <button
          onClick={() => swiperRef.current.slideNext()}
          className="absolute hidden lg:flex right-[-70px] top-1/2 -translate-y-1/2 bg-[var(--purple)] text-white p-3 rounded-full"
        >
          <IoArrowForward className="text-xl" />
        </button>
      </div>

      {/* RIGHT – ACCORDION */}
      <div
        className="
          space-y-4
          md:max-h-[400px]
          md:overflow-y-auto
          no-scrollbar
        "
      >
        {slidesData.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (accordionRefs.current[index] = el)}
            onClick={() => handleAccordionClick(index)}
            className={`cursor-pointer rounded-xl md:rounded-2xl p-4 md:p-6 transition-all duration-300 ${
              activeIndex === index
                ? "bg-gray-100 shadow"
                : "border border-[var(--purple)]"
            }`}
          >
            <div className="flex justify-between items-center gap-4">
              <h3 className="text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              
              {activeIndex === index ? (
                <span className="transition-transform duration-500 rotate-[270deg] border border-[var(--purple)] p-2 md:p-3 rounded-full">
                  <a href={item.website} target="_blank" rel="noreferrer">
                    <LuArrowDownRight className="text-lg md:text-xl" />
                  </a>
                </span>
              ) : (
                <LuArrowDownRight className="text-lg md:text-xl" />
              )}
            </div>
            {item.description && <p className="text-sm">{item.description}</p>}
            {activeIndex === index && (
              <div className="mt-3">
                <p className="text-gray-600 text-sm font-semibold">
                  Technology Used:
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {item.techStack.map((tech, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm px-3 py-1 rounded-full border border-[var(--purple)] text-gray-700"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    );
}
