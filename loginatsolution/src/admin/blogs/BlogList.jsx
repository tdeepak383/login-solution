import React, { useEffect, useState } from 'react'
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

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


    const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this passion?')) {

      fetch(`${import.meta.env.VITE_VERCEL_URL}/api/blogs/${id}`, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setData(data.data);
          } else {
            alert(data.message);
          }
        })
        .catch(error => {
          console.error('Error deleting blog:', error);
          alert('Failed to delete blog');
        });
    }
  };



  return (
    <div className='p-10 bg-gray-100 lg:w-full w-[1200px]'>
      <h2 className='text-2xl mb-5 font-bold'>Blogs List</h2>
      <div className='mt-10'>
        <div className='bg-white p-5 rounded-xl shadow-xl'>
          <h3 className='font-bold text-lg'>Total Blogs</h3>
          <p className='text-2xl'>{blogs.length}</p>
          <div className='mt-5 blog-list-table'>
            <table className="w-full table-auto border-collapse">
              <thead className='text-left border-b-4'>
                <tr>
                  <th>Featured Image</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Category</th>
                  <th>Tags</th>
                  <th>Likes</th>
                  <th>Dislikes</th>
                  <th>Excerpt</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  blogs.map(item => (
                    <tr key={item.id} className="border-b">
                      <td><img src={item.thumbnail} alt="" className='w-28 my-2 rounded-lg'/></td>
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
                      <td>{item.likes}</td>
                      <td>{item.dislikes}</td>
                      <td className=''>{item.excerpt}</td>
                      <td>
                        <div className="flex items-center justify-center gap-3">
                        <Link to={`/admin/blogs/edit/${item.id}`} className='bg-[var(--pink-light)] p-2 rounded'><FaPen className='text-[var(--purple)]' /></Link>
                        <Link onClick={() => handleDelete(item.id)} className='bg-[var(--pink-light)] p-2 rounded'><FaTrashAlt className='text-red-600' /></Link>
                        </div>
                        </td>
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