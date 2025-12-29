import React from 'react'
import { Link } from 'react-router-dom'

function RecentBlogCard({image, title, date, link}) {
  return (
   <>
    <Link to={`/blogs/${link}`}>
     <div className='grid grid-cols-1 md:grid-cols-3 gap-4 border-b py-5'>
        <div>
            <img src={`/demo/images/${image}`} alt={title} className='w-28 object-cover rounded'/>
        </div>
        <div className='md:col-span-2'>
            <h4 className='text-sm font-semibold'>{title}</h4>
            <div>
                <p className='text-xs'>Published: {date}</p>
            </div>
        </div>
    </div>
    </Link>
   </>
  )
}

export default RecentBlogCard