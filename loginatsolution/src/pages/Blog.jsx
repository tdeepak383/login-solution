import React from 'react'
import SubpageHeroSection from '../components/subpageHeroSection'
import BlogCard from '../components/BlogCard'
import data from '../data/blog.json'

function Blog() {
  return (
    <>
      <section className=''>
        <div className='max-w-6xl mx-auto py-10 px-6'>
          <h1 className="lg:text-5xl text-center md:text-4xl text-2xl font-bold mb-20">Latest Insights</h1>
          {
            data.map((blog, index) => (
              <BlogCard 
              key={index}
              title={blog.title}
              date={blog.date}
              content={blog.content}
              link={blog.link}
              image={blog.image}
              />
            ))
          }
        </div>
      </section>
    </>
  )
}

export default Blog