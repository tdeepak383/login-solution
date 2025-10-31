import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = ({ setIsPopupOpen }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const lines = sectionRef.current.querySelectorAll(".fade-line");

        gsap.fromTo(
            lines,
            { opacity: 0, y: 60 },
            {
                opacity: 1,
                y: 0,
                duration: 2,
                ease: "power3.out",
                stagger: 1, // delay between each line
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // when to start animation
                    end: "bottom 60%",
                    toggleActions: "play none none reverse", // smooth in/out
                },
            }
        );
    }, []);

    return (
        <section
            ref={sectionRef}
            className="after-hero-section relative min-h-screen px-4 flex items-center margin-top-hero"
        >
            <div className="max-w-6xl relative mx-auto py-20 space-y-16">


                <h3 className="fade-line text-3xl md:text-5xl mb-16 para-line-height">
                    We're a diverse team of visionary developers and creative designers,
                    driven by curiosity and a shared passion for problem-solving and
                    collaboration.
                </h3>

                <h3 className="fade-line text-3xl md:text-5xl mb-16 para-line-height">
                    We may have different tastes and speak different languages, but we all
                    agree on one thing: the best designs come to life when dynamic thinking
                    and creativity come together!
                </h3>

                <div className="text-center">
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-16 text-2xl tracking-wide py-3 rounded-lg inline-block"
                    >
                        Connect with Us
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
