import React, { useEffect, useState } from 'react'
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ExportDropdown from '../components/ExportDropdown';


function JoinusList() {

  const [joinuslist, setJoinuslist] = useState([]);
  const [selectedPosition, setSelectedPosition] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 50; // change if needed


      useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/joinuslist`);
          const result = await response.json();
          const uniqueData = filterDuplicates(result.data);
          setJoinuslist(uniqueData);
        };
        fetchData();
      }, []);

        const filterDuplicates = (data) => {
        return Array.from(
          new Map(
            data.map(item => [
              `${item.email}`,
              item
            ])
          ).values()
        );
      };


      const positions = [
        "all",
        ...new Set(joinuslist.map(item => item.position))
      ];


      const filteredAndSortedList = joinuslist
      .filter(item =>
        selectedPosition === "all"
          ? true
          : item.position === selectedPosition
      )
      .sort((a, b) =>
        a.position.localeCompare(b.position)
      );

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
          console.error('Error deleting Applicant:', error);
          alert('Failed to delete Applicant');
        });
    }
  };

  const totalPages = Math.ceil(
    filteredAndSortedList.length / itemsPerPage
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedData = filteredAndSortedList.slice(
    startIndex,
    endIndex
  );

  useEffect(() => {
  setCurrentPage(1);
}, [selectedPosition]);




  return (
     <div className='p-10 bg-gray-100 max-sm:w-[1200px]'>
          <h2 className='text-2xl mb-5 font-bold'>Applicants List</h2>
    
          <div className='mt-10'>
            <div className='bg-white p-5 rounded-xl shadow-xl'>
              <div className='flex justify-between'>
                <div>
                  <h3 className='font-bold text-lg'>Total Applicants</h3>
                  <p className='text-2xl'>{filteredAndSortedList.length}</p>
                </div>
                <div>
                  <ExportDropdown baseUrl="http://localhost:5000/api/joinuslist" />
                </div>
              </div>
              <div className='mt-5'>
                <table className="w-full table-auto border-collapse">
                  <thead className='text-left border-b-4'>
                    <tr>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th><div className="flex items-center gap-4">
                          <select
                            value={selectedPosition}
                            onChange={(e) => setSelectedPosition(e.target.value)}
                            className="w-40 rounded-lg px-4 py-2"
                          >
                            {positions.map(pos => (
                              <option key={pos} value={pos}>
                                {pos === "all" ? "All Positions" : pos}
                              </option>
                            ))}
                          </select>
                        </div>
                      </th>
                      <th>Experience</th>
                      <th>Message</th>
                      <th>Resume</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody className='text-left'>
                      {
                        paginatedData.map(item => (
                        <tr key={item.id} className="border-b">
                          <td>
                            <p className='text-sm'>
                              {new Date(item.created_at).toLocaleDateString("en-IN", {
                                day: "2-digit",
                                month: "short",
                                year: "numeric",
                              })}
                            </p></td>
                          <td className="py-2 align-middle"><p className="text-sm line-clamp-1">{item.fullName}</p></td>
                          <td><p className="text-sm line-clamp-1">{item.email}</p></td>
                          <td><p className="text-sm line-clamp-1">{item.phone}</p></td>
                          <td><p className="text-sm line-clamp-1">{item.position}</p></td>
                          <td><p className="text-sm line-clamp-1">{item.experience}</p></td>
                          <td><p className="text-sm w-3/4">{item.message}</p></td>
                          <td><p className="text-sm underline text-blue-700"><a href={item.resume} target='_blank'>Download</a></p></td>
                          <td className=" py-2 align-middle text-left">
                            <div className="flex items-center justify-left gap-3">
                              <Link to={`/admin/resume-list/edit/${item.id}`} className='bg-[var(--pink-light)] p-2 rounded'><FaPen className='text-[var(--purple)]' /></Link>
                              <Link onClick={() => handleDelete(item.id)} className='bg-[var(--pink-light)] p-2 rounded'><FaTrashAlt className='text-red-600' /></Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
                <div className="flex justify-center items-center gap-2 mt-6">
                  <button
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    Prev
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-3 py-1 border rounded ${
                          currentPage === page
                            ? "bg-[var(--purple)] text-white"
                            : "bg-white"
                        }`}
                      >
                        {page}
                      </button>
                    );
                  })}

                  <button
                    onClick={() =>
                      setCurrentPage(prev => Math.min(prev + 1, totalPages))
                    }
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
  )
}

export default JoinusList