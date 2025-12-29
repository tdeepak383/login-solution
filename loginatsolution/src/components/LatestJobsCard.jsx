import React from 'react'
import logo from '../assets/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function LatestJobsCard({title, location, posted, slug}) {
  return (


    <>
        <Link to={slug} className='block mb-4'>
        <div className='grid grid-cols-3 gap-2 py-5 border-b'>
            <div className='col-span-2'>
                <h3 className='text-sm font-bold'>{title}</h3>
                <p className='text-xs font-semibold py-2'>Loginat Solution Pvt. Ltd.</p>
                <p className='text-xs flex items-center gap-1'><FaLocationDot />{location}</p>
            </div>
            <div>
                <div className='w-14 h-14 bg-gray-100 rounded-lg ml-auto flex items-center justify-center'>
                    <img src={logo} alt="" className='object-cover'/>            
                </div>
                <p className='text-[10px] text-end'>{posted}</p>
            </div>
        </div>
        </Link>
    </>


  )
}

export default LatestJobsCard