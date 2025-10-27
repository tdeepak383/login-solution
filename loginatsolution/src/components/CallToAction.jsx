import React from 'react'
import RequirementForm from './Form'

function CallToAction() {
  return (
    <>
        <section className='gradient min-h-screen w-full z-50 relative flex flex-col items-center justify-center text-center px-5 py-10'>
            <div className='max-w-6xl mx-auto w-full'>
                <div className="grid grid-cols-3 gap-10">
                    <div className='col-span-2 text-white'>
                        <h2 className='text-6xl text-left tracking-wide'>Top Talent Made Easy!</h2>
                        <h4 className='text-4xl text-left'>We take care of hiring, training, and everything in between.</h4>
                        <div className='flex justify-between gap-5 mt-10'>
                            <p className='bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-all duration-500 delay-100'>Call us for a discussion</p>
                            <p className='bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-all duration-500 delay-100'>We arrange Interviews with shortlisted candidates</p>
                            <p className='bg-white/10 rounded-xl p-5 hover:bg-white/20 transition-all duration-500 delay-100'>Connect with the solver for regular deliveries</p>
                        </div>
                        <div className='mt-10 relative w-3/4 mx-auto'>                            
                            <hr />
                            <div className='absolute bg-white w-2 rounded-full h-2 -top-1 left-0'></div>
                            <div className='absolute bg-white w-2 rounded-full h-2 -top-1 left-1/2'></div>
                            <div className='absolute bg-white w-2 rounded-full h-2 -top-1 right-0'></div>
                        </div>
                    </div>
                    <div>
                        <RequirementForm />
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CallToAction