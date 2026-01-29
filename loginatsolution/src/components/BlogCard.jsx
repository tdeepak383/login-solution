import React from 'react'
import { FaRegUserCircle } from 'react-icons/fa'
import { MdDateRange } from 'react-icons/md'
import { Link } from 'react-router-dom'

function BlogCard({title, date, excerpt, link, image}) {
  return (
    <>
      <section>
        <div className='max-w-6xl mx-auto md:py-10 px-6'>          
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 border-b pb-10'>
              <div className='order-2 lg:order-1 flex flex-col justify-between'>
                  <div>
                    <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{title}</h3>
                    <div className='flex items-center gap-6 font-semibold py-4'>
                        <p className='text-[var(--purple)] text-sm flex items-center gap-3'><FaRegUserCircle /> Atul Gupta</p>
                        <p className='text-[var(--purple)] text-sm flex items-center gap-3'><MdDateRange /> {new Date(date).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                        </p>
                    </div>
                    <div>
                      <p className='line-clamp-3'>{excerpt}</p>
                    </div>
                  </div>
                  <div>
                    <Link
                      to={`/blogs/${link}`}
                      className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-10 md:text-xl tracking-wide py-2 mt-5 rounded-lg inline-block"
                    >
                      Read more
                    </Link>
                  </div>
              </div>
              <div className='order-1 lg:order-2'>
                <img src={`${image}`} alt={title} className='rounded-xl'/>
              </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default BlogCard