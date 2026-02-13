import React, { useEffect, useState, useCallback } from 'react';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blog.json';



function Blog() {
  // const [dataBlogs, setDataBlogs] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // const fetchBlogs = useCallback(async (signal) => {
  //   try {
  //     const response = await fetch(
  //       `${import.meta.env.VITE_VERCEL_URL}/api/blogs`,
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         signal,
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch blogs");
  //     }

  //     const result = await response.json();

      
  //     setDataBlogs(prev => 
  //       JSON.stringify(prev) === JSON.stringify(result) ? prev : result
  //     );

  //   } catch (err) {
  //     if (err.name !== "AbortError") {
  //       setError(err.message);
  //     }
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   const controller = new AbortController();
  //   fetchBlogs(controller.signal);

  //   return () => controller.abort(); 
  // }, [fetchBlogs]);

  // if (loading) return <h2 className="text-center py-20">Loading blogs...</h2>;
  // if (error) return <h2 className="text-center py-20 text-red-500">{error}</h2>;

  return (
    <section>
      <div className='max-w-6xl mx-auto md:py-14 md:px-6'>
        <h1 className="lg:text-5xl text-center md:text-4xl text-2xl font-bold max-sm:my-5 lg:mb-20">
          Latest Insights
        </h1>

        {blogData.map((blog) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            date={blog.date}
            excerpt={blog.content}
            link={blog.link}
            image={`/images/${blog.image}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Blog;