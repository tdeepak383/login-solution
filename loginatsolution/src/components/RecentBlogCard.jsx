import React from 'react'
import { Link } from 'react-router-dom'
import { MdDateRange } from 'react-icons/md'

function RecentBlogCard({image, title, date, link}) {
  return (
   <>
    <Link to={`/blogs/${link}`}>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border-b py-5'>
        <div>
            <img src={`${image}`} alt={title} className='w-28 object-cover rounded'/>
        </div>
        <div className='md:col-span-2'>
            <h4 className='text-sm font-semibold'>{title}</h4>
            <div className='font-semibold mt-2'>
                <p className='text-[var(--purple)] text-xs flex items-center gap-1'><MdDateRange /> {new Date(date).toLocaleDateString("en-IN", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                })}
                </p>
            </div>
        </div>
    </div>
    </Link>
   </>
  )
}

export default RecentBlogCard