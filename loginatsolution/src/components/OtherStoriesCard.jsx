import React from 'react'
import { Link } from 'react-router-dom'

function ClientStoriesCard({title,slug, content1}) {
  return (
    <Link to={slug}>
    <div className='p-5 rounded-xl border'>
        <div className='flex flex-col justify-between md:h-48'>
            <h3 className='font-semibold'>{title}</h3>
             {content1 && <p className='line-clamp-4 text-sm mt-2 text-[var(--purple)]'>{content1}</p>}
            <Link
            className="mt-6 text-xs inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[var(--pink)] to-[var(--purple)] text-white font-semibold py-2 px-6 rounded-lg transition hover:shadow"
            to={slug}>Read More</Link>
        </div>
    </div>
    </Link>
  )
}

export default ClientStoriesCard