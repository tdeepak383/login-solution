import React, { useEffect, useState } from 'react'
import BlogCard from '../components/BlogCard'


function Blog() {

  const [dataBlogs, setDataBlogs] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/blogs`);
      const result = await response.json();
      setDataBlogs(result);
    };
    fetchData();
}, [])


  return (
    <>
      <section className=''>
        <div className='max-w-6xl mx-auto md:py-14 md:px-6'>
          <h1 className="lg:text-5xl text-center md:text-4xl text-2xl font-bold max-sm:my-5 lg:mb-20">Latest Insights</h1>
          {
            dataBlogs.map((blog, index) => (
              <BlogCard 
              key={index}
              title={blog.title}
              date={blog.created_at}
              excerpt={blog.excerpt}
              link={blog.slug}
              image={blog.thumbnail}
              />
            ))
          }
          
        </div>
      </section>
    </>
  )
}

export default Blog