import React from 'react'
import SubpageHeroSection from '../components/subpageHeroSection'
import BlogCard from '../components/BlogCard'
import data from '../data/blog.json'

function Blog() {
  return (
    <>
      <SubpageHeroSection
      title={"Latest Insights"}
      subtitle={"Lorem ipsum dolor sit amet, consectetur adipisicing elit."}
      buttontext={"Connect with Us"}
      children={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus provident numquam eligendi in cumque illum quibusdam consequuntur perspiciatis? Minus, tenetur vero. Delectus, dolor animi? Magni id soluta maiores debitis mollitia!"}
      />
      <section className='margin-top-Subhero  bg-gradient-to-b from-white to-gray-100'>
        <div className='max-w-6xl mx-auto py-10 px-6'>
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