import React from 'react'
import logo from '../assets/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';


function LatestJobsCard({title, location, created_at, slug}) {
        
    const daysAgo = (date) => {
    const createdDate = new Date(date);
    const today = new Date();

    const diffDays = Math.floor(
        (today - createdDate) / (1000 * 60 * 60 * 24)
    );

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    return `${diffDays} days ago`;
    };

  return (


    <>
        <Link to={`/jobs/${slug}`} className='block mb-4'>
            <div className='grid grid-cols-3 gap-2 py-5 border-b'>
                <div className='md:col-span-2'>
                    <h3 className='text-sm font-bold'>{title}</h3>
                    <p className='text-xs font-semibold py-2'>Loginat Solution Pvt. Ltd.</p>
                    <p className='text-xs flex items-center gap-1'><FaLocationDot />{location}</p>
                </div>
                <div className='flex flex-col items-end'>
                    <div className='w-14 h-14 px-1 bg-gray-100 rounded-lg flex items-center'>
                        <img src={logo} alt="" className='object-contain'/>
                    </div>
                    <p className='text-[10px]'>Posted {daysAgo(created_at)}</p>
                </div>
            </div>
        </Link>
    </>


  )
}

export default LatestJobsCard