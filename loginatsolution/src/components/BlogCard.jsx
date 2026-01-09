import React from 'react'
import { Link } from 'react-router-dom'

function BlogCard({title, date, content, link, image}) {
  return (
    <>
      <section>
        <div className='max-w-6xl mx-auto md:py-10 px-6'>          
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 border-b pb-10'>
              <div className='order-2 lg:order-1 px-5'>
                  <h3 className='text-2xl md:text-3xl lg:text-4xl font-bold'>{title}</h3>
                  <p className='mt-2'>Published: {date}</p>
                  <p className='mt-5'>{content}</p>
                  <Link
                    to={`/blogs/${link}`}
                    className="bg-gradient-to-r hover:bg-gradient-to-l from-[var(--pink)] to-[var(--blue)] text-white px-10 md:text-xl tracking-wide py-2 mt-5 rounded-lg inline-block"
                  >
                    Read more
                  </Link>
              </div>
              <div className='order-1 lg:order-2'>
                <img src={`/images/${image}`} alt={title} className='rounded-xl'/>
              </div>
            </div>           
        </div>
      </section>
    </>
  )
}

export default BlogCard