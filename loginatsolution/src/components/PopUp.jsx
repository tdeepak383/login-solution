import React from 'react'
import RequirementForm from '../components/Form'

function PopUp({ isOpen, onClose }) {
   

  return (
     <>
         <div
      className={`fixed top-0 right-0 h-screen w-96 bg-gray-100 shadow-lg p-5 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
          onClick={onClose}
          className="absolute top-3 right-3 text-black text-4xl"
        >
          X
        </button>
      <h2 className='text-3xl text-blue-700 font-bold'></h2>
      <div className='mt-20'>
      <RequirementForm color={"white"} FormTitle={"Share Your Requirement"} />
    </div>
    </div>
    </>
  )
}

export default PopUp