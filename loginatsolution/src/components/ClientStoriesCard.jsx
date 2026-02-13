import React from 'react'
import { Link } from 'react-router-dom'

function ClientStoriesCard({title,slug, content1, content2, image}) {
  return (
    <div className='p-5 rounded-xl border text-left bg-white flex flex-col justify-between'>
            <div>
            <img src={image} alt="" className='w-full h-60 object-cover rounded-xl'/>
            <h3 className='text-lg line-clamp-3 font-semibold md:text-2xl mt-4'>{title}</h3>
            {content1 && <p className='line-clamp-4 mt-5 text-[var(--purple)]'>{content1}</p>}
            {content2 && <p className='line-clamp-4 mt-5'>{content2}</p>}
            </div>
            
            <Link
            className="mt-6 inline-flex w-40 items-center justify-center gap-2 bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white font-semibold py-2 px-6 rounded-lg transition hover:shadow"
            to={slug}>Read More</Link>
        
    </div>
  )
}

export default ClientStoriesCard