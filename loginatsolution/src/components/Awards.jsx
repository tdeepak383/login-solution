import React from "react";
import awardImg from "../assets/awards.jpeg";

const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0 }}>
    <path d="M8 1l2 5h5l-4 3 1.5 5L8 11l-4.5 3 1.5-5-4-3h5z" fill="white" />
  </svg>
);

const TrophyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
    <path
      d="M10 2l2.4 5 5.6.8-4 4 .9 5.6L10 15l-4.9 2.4.9-5.6-4-4 5.6-.8z"
      fill="var(--purple)"
    />
  </svg>
);

function Awards() {
  return (
    <section className="py-20 w-full bg-gray-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl md:text-5xl text-black text-center mb-10 font-bold">Awards and Recognitions</h2>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* ── Left: Image column ── */}
          <div className="relative">

            {/* Vertical accent bar */}
           
            {/* Award image */}
            <div className="">
              <img
                src={awardImg}
                alt="Award"
                className="rounded-2xl"
              />
            </div>

            {/* Floating winner badge */}

          </div>
          {/* ── Right: Content column ── */}
          <div className="pt-6 md:pt-0">

            {/* Tag pill — unchanged from original */}
            <span
              className="inline-flex items-center gap-2 text-white text-xl font-semibold px-4 py-1 rounded-full mb-5"
              style={{ background: "var(--purple)" }}
            >
              <StarIcon />
              Business Outline
            </span>

            {/* Title — unchanged from original */}
            <h2 className="text-3xl font-bold mb-4 leading-snug">
              Best Multimedia &amp; Creative Services Agency 2026
            </h2>

            {/* Purple accent divider */}
            <div
              className="mb-4 rounded-full"
              style={{ width: 48, height: 3, background: "var(--purple)" }}
            />

            {/* Description — unchanged from original */}
            <p className="text-gray-600 leading-relaxed mb-8">
              We are honored to receive the Best Multimedia &amp; Creative Services Agency award & Certificate of Appreciation.
              for delivering innovative strategies and measurable growth for.
              our clients. This recognition reflects our commitment to quality.
              creativity, and results-driven marketing solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Awards;