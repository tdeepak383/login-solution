import React, { useEffect, useState } from 'react'
import { FaPen, FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import ExportDropdown from '../components/ExportDropdown';


function ContactList() {


    const [contacts, setContacts] = useState([]);
    const [fromDate, setFromDate] = useState("");
    const [toDate, setToDate] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/contacts`);
        const result = await response.json();
        const uniqueData = filterDuplicates(result.data)
        setContacts(uniqueData);
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


    const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this passion?')) {

      fetch(`${import.meta.env.VITE_VERCEL_URL}/api/contacts/${id}`, {
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
          console.error('Error deleting contact:', error);
          alert('Failed to delete contact');
        });
    }
  };


  return (
    <div className='p-10 bg-gray-100 lg:w-full w-[1200px]'>
      <h2 className='text-2xl mb-5 font-bold'>Contacts List</h2>

      <div className='mt-10'>
        <div className='bg-white p-5 rounded-xl shadow-xl'>
          <div className="flex justify-between">
            <div>
            <h3 className='font-bold text-lg'>Total Contacts</h3>
            <p className='text-2xl'>{contacts.length}</p>
          </div>
           <div className="flex items-center gap-3">
            <input
              type="date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              className="border px-3 py-2 rounded-lg"
            />

            <input
              type="date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              className="border px-3 py-2 rounded-lg"
            />

            <ExportDropdown
              baseUrl={`${import.meta.env.VITE_VERCEL_URL}/api/contacts`}
              from={fromDate}
              to={toDate}
            />
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
                      <th>Company</th>
                      <th>Job Category</th>
                      <th>Job Role</th>
                      <th>Duration</th>
                      <th>Message</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
              <tbody>               
                  {
                    contacts.map(item => (
                    <tr key={item.id} className="border-b">
                      <td><p className='text-sm'>
                        {new Date(item.created_at).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}
                        </p></td>
                      <td className="py-2 align-middle text-left"><p className="text-sm">{item.name}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.email}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.contact}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.company}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.jobCategory}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.jobRole}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.duration}</p></td>
                      <td><p className="text-sm ">{item.requirement}</p></td>
                      <td className="py-2 align-middle text-center">
                        <div className="flex items-center justify-center gap-3">
                          <Link to={`/admin/contacts/edit/${item.id}`} className='bg-[var(--pink-light)] p-2 rounded'><FaPen className='text-[var(--purple)]' /></Link>
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

export default ContactList