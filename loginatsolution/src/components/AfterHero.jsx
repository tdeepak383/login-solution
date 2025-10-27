import React from 'react'
import { Link } from 'react-router-dom'

function AfterHero() {
  return (
    <>
        <section id='next-section' className="after-hero-section min-h-screen px-4 flex items-center margin-top-hero">
            <div className="max-w-6xl mx-auto py-20">                
                <p className="text-5xl mb-16">We’re a diverse team of visionary developers and creative designers, driven by curiosity and a shared passion for problem-solving and collaboration. </p>
                <p className="text-5xl mb-16">
                    We may have different tastes and speak different languages, but we all agree on one thing: the best designs come to life when dynamic thinking and creativity come together!</p>
                <div className='text-center'>
                    <Link to="/contact" className="gradient text-white px-16 text-2xl tracking-wide py-3 rounded-lg">Find your solution</Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default AfterHero