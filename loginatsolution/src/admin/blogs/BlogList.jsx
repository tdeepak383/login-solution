import React from 'react'

function BlogList() {
  return (
    <div className='p-10 bg-gray-100 max-sm:w-[1200px]'>
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
                  <th>Content</th>
                  <th>Post by</th>
                </tr>
              </thead>
              <tbody>
                <tr> 
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogList