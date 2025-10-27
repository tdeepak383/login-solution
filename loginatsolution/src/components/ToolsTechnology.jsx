import React from 'react'
import Logo1 from '../assets/logo/tech-1.png'
import Logo2 from '../assets/logo/tech-2.png'
import Logo3 from '../assets/logo/tech-3.png'
import Logo4 from '../assets/logo/tech-4.png'
import Logo5 from '../assets/logo/tech-5.png'
import Logo6 from '../assets/logo/tech-6.png'
import Logo7 from '../assets/logo/tech-7.png'
import Logo8 from '../assets/logo/tech-8.png'
import Logo9 from '../assets/logo/tech-9.png'
import Logo10 from '../assets/logo/tech-10.png'
import Logo11 from '../assets/logo/tech-11.png'
import Logo12 from '../assets/logo/tech-12.png'
import Logo13 from '../assets/logo/tech-13.png'
import Logo14 from '../assets/logo/tech-14.png'

const logos = [
    Logo1,
    Logo2,
    Logo3,
    Logo4,
    Logo5,
    Logo6,
    Logo7,
    Logo8,
    Logo9,
    Logo10,
    Logo11,
    Logo12,
    Logo13,
    Logo14
]

function ToolsTechnology() {
  return (
    <>
        <section className='min-h-screen w-full z-50 bg-white relative flex flex-col items-center justify-center text-center px-5 py-10'>
            <div className='max-w-6xl mx-auto w-full'>
                <h2 className='text-5xl text-black font-bold mb-5'>Explore our comprehensive tool capabilities</h2>
                <p className='text-xl text-gray-700 mb-10'>We leverage a diverse set of tools and technologies to deliver top-notch solutions tailored to your business needs. Our expertise spans across various domains, ensuring that we can provide the right fit for your projects.</p>
                <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>
                    
                    {logos.map((logo, index) => (
                        <div key={index} className='flex items-center bg-[var(--purple)] justify-center p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105'>
                            <img src={logo} alt={`Technology Logo ${index + 1}`} className='max-h-10  object-contain' />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default ToolsTechnology