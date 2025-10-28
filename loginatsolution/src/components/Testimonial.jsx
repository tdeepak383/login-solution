import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

/* Sample testimonials — replace images with real avatars or SVGs */
const testimonials = [
  {
    name: "Aisha Khan",
    role: "Product Manager, FinTech",
    avatar: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    quote:
      "The team delivered an outstanding UI — pixel-perfect to the Figma design and lightning-fast. Communication was excellent throughout.",
    rating: 5,
  },
  {
    name: "Ravi Patel",
    role: "CTO, E-Commerce",
    avatar: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    quote:
      "They turned our complex requirements into a beautiful, maintainable front-end. The sprint deliveries were always on time.",
    rating: 5,
  },
  {
    name: "Sofia Martinez",
    role: "Founder, SaaS Startup",
    avatar: "https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=",
    quote:
      "Highly recommended — deep frontend expertise and great UX sense. Our conversions improved after the redesign.",
    rating: 4,
  },
];

/* Custom arrow components */
const PrevArrow = ({ className, style, onClick }) => (
  <button
    aria-label="Previous testimonials"
    type="button"
    onClick={onClick}
    className="hidden md:flex items-center justify-center absolute -left-6 top-1/2 transform -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-gray-100"
  >
    <IoChevronBack className="text-gray-700 text-xl" />
  </button>
);

const NextArrow = ({ className, style, onClick }) => (
  <button
    aria-label="Next testimonials"
    type="button"
    onClick={onClick}
    className="hidden md:flex items-center justify-center absolute -right-6 top-1/2 transform -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white shadow-md border border-gray-100"
  >
    <IoChevronForward className="text-gray-700 text-xl" />
  </button>
);

const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill={filled ? "currentColor" : "none"}
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="1.5"
    aria-hidden
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.26 3.88a1 1 0 00.95.69h4.084c.969 0 1.371 1.24.588 1.81l-3.307 2.405a1 1 0 00-.364 1.118l1.26 3.88c.3.921-.755 1.688-1.54 1.118l-3.307-2.405a1 1 0 00-1.176 0l-3.307 2.405c-.785.57-1.84-.197-1.54-1.118l1.26-3.88a1 1 0 00-.364-1.118L2.077 9.307c-.783-.57-.38-1.81.588-1.81h4.084a1 1 0 00.95-.69l1.26-3.88z" />
  </svg>
);

export default function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    accessibility: true,
    adaptiveHeight: true,
  };

  return (
    <section className="min-h-screen max-sm:hidden lg:block w-full z-50 bg-gray-200 relative flex flex-col items-center justify-center text-center px-5 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-8 text-center">
          <h3 className="uppercase text-gray-500 tracking-wider">Testimonials</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What our clients say</h2>
        </div>

        <div className="relative">
          <Slider {...settings}>
            {testimonials.map((t, idx) => (
              <div key={idx} className="px-3">
                <article className="bg-white rounded-3xl p-6 shadow-sm h-[350px] flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <img
                      src={t.avatar}
                      alt={`${t.name} avatar`}
                      className="w-14 h-14 rounded-full object-cover border border-gray-100"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{t.name}</h4>
                      <p className="  text-gray-500">{t.role}</p>
                      <div className="flex items-center mt-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="mr-1">
                            <Star filled={i < t.rating} />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600   leading-relaxed mb-4 flex-1">“{t.quote}”</p>

                  <div className="mt-3">
                    <a
                      href="#"
                      className="text-[var(--pink)]   font-medium hover:underline"
                      aria-label={`Read case study for ${t.name}`}
                    >
                      Read case study →
                    </a>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
