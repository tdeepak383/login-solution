import React, { useEffect, useState } from 'react'
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


function JoinusList() {

  const [joinuslist, setJoinuslist] = useState([]);
    
      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/joinuslist`);
          const result = await response.json();
          setJoinuslist(result.data);
        };
        fetchData();
      }, []);

    const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this passion?')) {

      fetch(`${import.meta.env.VITE_VERCEL_URL}/api/joinuslist/${id}`, {
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
          console.error('Error deleting passion:', error);
          alert('Failed to delete passion');
        });
    }
  };

  return (
     <div className='p-10 bg-gray-100 max-sm:w-[1200px]'>
          <h2 className='text-2xl mb-5 font-bold'>Applicants List</h2>
    
          <div className='mt-10'>
            <div className='bg-white p-5 rounded-xl shadow-xl'>
              <h3 className='font-bold text-lg'>Total Applicants</h3>
              <p className='text-2xl'>{joinuslist.length}</p>
              <div className='mt-5'>
                <table className="w-full table-auto border-collapse">
                  <thead className='text-left border-b-4'>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Position</th>
                      <th>Experience</th>
                      <th>Message</th>
                      <th>Resume</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className='text-left'>
                      {
                        joinuslist.map(item => (
                        <tr key={item.id} className="border-b">
                          <td className="py-2 align-middle"><p className="text-sm line-clamp-1">{item.fullName}</p></td>
                          <td><p className="text-sm line-clamp-1">{item.email}</p></td>
                          <td><p className="text-sm line-clamp-1">{item.phone}</p></td>
                          <td><p className="text-sm line-clamp-1">{item.position}</p></td>
                          <td><p className="text-sm line-clamp-1">{item.experience}</p></td>
                          <td><p className="text-sm w-3/4">{item.message}</p></td>
                          <td><p className="text-sm underline text-blue-700"><a href={`http://localhost:5000/uploads/resumes/${item.resume}`} target='_blank'>Download</a></p></td>
                          <td className=" py-2 align-middle text-center">
                            <div className="flex items-center justify-center gap-3">
                              <Link to={`/admin/resume-list/edit/${item.id}`} className='bg-[var(--pink-light)] p-2 rounded'><FaPen className='text-[var(--purple)]' /></Link>
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

export default JoinusList