import React, { useEffect, useState } from 'react'
import { FaPen, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function JobList() {

const [jobs, setJobs] = useState([]);
const [message, setMessage] = useState("");

useEffect(() => {
  fetchJobs();
}, []);

const fetchJobs = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/jobs`);
    const result = await response.json();

    setJobs(result.data || []);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  }
};

const handleDelete = async (id) => {
  if (!window.confirm("Are you sure you want to delete this passion?")) return;

  try {
    const response = await fetch(
      `${import.meta.env.VITE_VERCEL_URL}/api/jobs/${id}`,
      {
        method: "DELETE",
      }
    );

    const result = await response.json();

    if (result.success) {

      // ✅ Refresh data from backend
      await fetchJobs();

      // ✅ Show success message
      setMessage("✅ Job deleted successfully!");

      setTimeout(() => {
        setMessage("");
      }, 3000);

    } else {
      setMessage(result.message || "Delete failed");
    }

  } catch (error) {
    console.error("Error deleting job:", error);
    setMessage("Server error. Try again.");
  }
};





  return (
    <div className='p-10 bg-gray-100 lg:w-full w-[1200px]'>
      <h2 className='text-2xl mb-5 font-bold'>Job Posts</h2>
      <div className='mt-10'>
        <div className='bg-white p-5 rounded-xl shadow-xl'>
          <div className='flex justify-between items-center pb-5 border-b'>
            <div>
              <h3 className='font-bold text-lg'>Total Posts</h3>
              <p className='text-2xl'>{""}</p>
            </div>
            <div>
              <Link to="/admin/post-job" className="bg-[var(--purple)] text-white p-2 rounded">Post a job</Link>
            </div>
          </div>
          
          <div className='mt-5 blog-list-table'>
            <table className="w-full table-auto border-collapse">
              <thead className='text-left border-b-4'>
                <tr>
                  <th>Date</th>
                  <th>Title</th>
                  <th>Experience</th>
                  <th>Salary</th>
                  <th>Location</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                {
                  jobs.map(item => (
                    <tr key={item.id} className="border-b">
                      <td>
                        {new Date(item.created_at).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                      </td>
                      <td className='py-2'>{item.title}</td>                      
                      <td>{item.experience}</td>
                      <td>{item.salary}</td>
                      <td>{item.location}</td>
                      <td>{item.skills}</td>
                      <td>
                        <div className="flex items-center justify-center gap-3">
                        <Link to={`/admin/jobs/edit/${item.id}`} className='bg-[var(--pink-light)] p-2 rounded'><FaPen className='text-[var(--purple)]' /></Link>
                        <Link onClick={() => handleDelete(item.id)} className='bg-[var(--pink-light)] p-2 rounded'><FaTrashAlt className='text-red-600' /></Link>
                        </div>
                        </td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
            {message && (
              <div
                style={{
                  background: "#d4edda",
                  color: "#155724",
                  padding: "10px",
                  position: "fixed",
                  top: "10px",
                  right: "10px",
                  marginBottom: "15px",
                  borderRadius: "5px",
                }}
              >
                {message}
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default JobList