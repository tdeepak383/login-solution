import React, { useEffect, useState } from 'react'
import RecentBlogCard from '../../components/RecentBlogCard'
import BlogDetailsPage from '../../components/BlogDetailsPage'
import { useParams } from 'react-router-dom';

function BlogPage() {

       const { slug } = useParams();
       const [blogData, setBlogsData] = useState([]);

      
      useEffect(() => {
          const fetchData = async () => {
            const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/blogs`);
            const result = await response.json();
            setBlogsData(result);
          };
          fetchData();
      }, [])


      const blogs = blogData ? blogData.find(b => b.slug === slug) : null;
      

    return (
        <>
            <section>
                <div className='max-w-6xl mx-auto py-10 px-6'>
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-5 ">
                        <div className='lg:col-span-3'>
                            <BlogDetailsPage
                                blogId={blogs?.id}
                                title={blogs?.title}
                                content={blogs?.content}
                                image={blogs?.thumbnail}
                                created_at={blogs?.created_at}
                                tags={blogs?.tags}
                                likes={blogs?.likes}
                                dislikes={blogs?.dislikes}
                            />
                        </div>
                        <div className='lg:col-span-2'>
                            <div className='bg-gray-50 rounded-xl p-5'>
                                <h4>Recent Blogs</h4>
                                <div className="mt-5">
                                {blogData
                                    .filter((blog) => blog.slug !== slug)
                                    .map((blog) => (
                                    <RecentBlogCard
                                        key={blog.id}
                                        title={blog.title}
                                        date={blog.created_at}
                                        link={blog.slug}
                                        image={blog.thumbnail}
                                    />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPage