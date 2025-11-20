import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{
      // CSS variables for easy theming
      ['--blue']: '#469ef6',
      ['--pink']: '#c33eaf',
      ['--blue-light']: '#cde6ff',
      ['--pink-light']: '#ffd9ee',
      ['--purple']: '#7b2ff7',
      ['--purple-light']: '#a56dff',
    }}>
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {/* soft radial gradients + floating circles for depth */}
        <div
          className="absolute -left-32 -top-32 w-96 h-96 rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle at 30% 30%, var(--blue-light), transparent 30%)' }}
        />
        <div
          className="absolute -right-40 -bottom-40 w-[520px] h-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'conic-gradient(from 120deg, var(--pink-light), var(--purple-light))' }}
        />
      </div>

      <motion.main
        className="relative z-10 max-w-4xl w-full mx-4 bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 md:p-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <header className="flex flex-col items-center gap-6">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none" style={{ color: 'var(--purple)' }}>
            404
          </h1>

          <p className="text-xl md:text-2xl font-semibold" style={{ color: 'rgba(0,0,0,0.75)' }}>
            Page not found
          </p>
        </header>

        <section className="mt-6 md:mt-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 justify-between">
          <div className="flex-1 text-left">
            <h2 className="text-lg md:text-xl font-medium mb-2">Looks like you're a little off the map.</h2>
            <p className="text-sm md:text-base text-gray-700/90">
              The page you’re looking for might have been moved or deleted. Try going back home or checking the URL.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2 rounded-full text-white gradient font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2"                
                >
                  Go Home
                </motion.button>
              </Link>

              <a href="/contact" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-5 py-2 rounded-full font-semibold border-2"
                  style={{
                    borderColor: 'var(--pink)',
                    background: 'transparent',
                    color: 'var(--pink)'
                  }}
                >
                  Contact Support
                </motion.button>
              </a>
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            {/* A playful illustration built with SVG so no external assets are required */}
            <motion.svg
              width="260"
              height="220"
              viewBox="0 0 260 220"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={{ rotate: -6 }}
              animate={{ rotate: 6 }}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6 }}
              className="max-w-full h-auto"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--blue)" />
                  <stop offset="100%" stopColor="var(--purple)" />
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1">
                  <stop offset="0%" stopColor="var(--pink)" />
                  <stop offset="100%" stopColor="var(--pink-light)" />
                </linearGradient>
              </defs>

              <rect x="12" y="20" width="236" height="160" rx="20" fill="url(#g1)" opacity="0.12" />
              <circle cx="80" cy="80" r="36" fill="url(#g2)" opacity="0.18" />

              <g>
                <path d="M90 60c10-18 50-22 70-8" stroke="url(#g1)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
                <path d="M70 140c12-8 30-12 46-6" stroke="url(#g2)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95" />
              </g>

              <g transform="translate(120, 40)">
                <text x="0" y="80" fontSize="34" fontWeight="700" fill="var(--purple)" letterSpacing="-1">Oops!</text>
              </g>
            </motion.svg>
          </div>
        </section>

        <footer className="mt-8 text-xs text-gray-600/90">
          <p>
            Tip: Press <kbd className="px-2 py-1 border rounded bg-white/80">Ctrl</kbd> + <kbd className="px-2 py-1 border rounded bg-white/80">F</kbd> and search the URL.
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
