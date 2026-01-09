import React, { useEffect, useState } from 'react'

function BlogList() {

const [blogs, setBlogs] = useState([]);

useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/blogs`);
      const result = await response.json();
      setBlogs(result);
    };
    fetchData();
}, [])


  return (
    <div className='p-10 bg-gray-100 lg:w-full w-[1200px]'>
      <h2 className='text-2xl mb-5 font-bold'>Blogs List</h2>

      <div className='mt-10'>
        <div className='bg-white p-5 rounded-xl shadow-xl'>
          <h3 className='font-bold text-lg'>Total Blogs</h3>
          <p className='text-2xl'>0</p>
          <div className='mt-5'>
            <table className="w-full table-auto border-collapse">
              <thead className='text-left border-b-4'>
                <tr>
                  <th>Featured Image</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>
                {
                  blogs.map(item => (
                    <tr key={item.id} className="border-b">
                      <img src={item.image} alt="" className='w-28 my-2 rounded-lg'/>
                      <td className='py-2'>{item.title}</td>
                      <td>
                        {new Date(item.created_at).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td>{item.category}</td>
                      <td>{item.tags}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList