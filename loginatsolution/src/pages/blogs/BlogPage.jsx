import React, { useEffect, useMemo, useState } from 'react'
import RecentBlogCard from '../../components/RecentBlogCard'
import BlogDetailsPage from '../../components/BlogDetailsPage'
import { useParams } from 'react-router-dom'
import BlogSkeleton from './BlogSkeleton'


function BlogPage() {

  const { slug } = useParams()

  const [blogData, setBlogData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      try {
        setLoading(true)

        const response = await fetch(
          `${import.meta.env.VITE_VERCEL_URL}/api/blogs`,
          { signal: controller.signal }
        )

        if (!response.ok) throw new Error('Failed to fetch')

        const result = await response.json()
        setBlogData(result)

      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return () => controller.abort()
  }, [])
 



  const currentBlog = useMemo(
    () => blogData.find(b => b.slug === slug),
    [blogData, slug]
  )

  const recentBlogs = useMemo(
    () => blogData.filter(b => b.slug !== slug).slice(0, 5),
    [blogData, slug]
  )


  if (loading) {
  return (
    <section>
      <div className='max-w-6xl mx-auto py-10 px-6'>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          <div className="lg:col-span-3">
            <BlogSkeleton />
          </div>

          <div className="lg:col-span-2 space-y-4">
            <BlogSkeleton />
            <BlogSkeleton />
          </div>

        </div>
      </div>
    </section>
  )
}
  if (error) return <div className="p-10 text-red-500">{error}</div>

  return (
    <section>
      <div className='max-w-6xl mx-auto py-10 px-6'>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 lg:grid-cols-5">

          <div className='lg:col-span-3'>
            <BlogDetailsPage
              blogId={currentBlog?.id}
              title={currentBlog?.title}
              content={currentBlog?.content}
              image={currentBlog?.thumbnail}
              created_at={currentBlog?.created_at}
              tags={currentBlog?.tags}
              likes={currentBlog?.likes}
              dislikes={currentBlog?.dislikes}
            />
          </div>

          <div className='lg:col-span-2'>
            <div className='bg-gray-50 rounded-xl p-5'>
              <h4>Recent Blogs</h4>
              <div className="mt-5">
                {recentBlogs.map(blog => (
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
  )
}

export default BlogPage