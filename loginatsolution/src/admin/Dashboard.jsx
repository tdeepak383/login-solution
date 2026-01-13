import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Dashboard() {

  const [dataBlogs, setDataBlogs] = React.useState([]);
  
  useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/blogs`);
        const result = await response.json();
        setDataBlogs(result);
      };
      fetchData();
  }, [])

  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/contacts`);
      const result = await response.json();
      const uniqueData = filterDuplicates(result.data);
      setContacts(uniqueData);
    };
    fetchData();
  }, []);


  const [joinuslist, setJoinuslist] = useState([]);
      
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



  return (
    <div className='p-10 bg-gray-100 h-full lg:w-full w-[1200px]'>
      <h2 className='text-2xl mb-5 font-bold'>Dashboard</h2>
      <p>Welcome to the Admin Dashboard!</p>

      <div className='grid grid-cols-1 gap-6 mt-10'>
        <div className='bg-white p-5 rounded-xl border'>
          <h3 className='font-bold text-lg'>Total Blogs</h3>
          <p className='text-2xl'>{dataBlogs.length}</p>
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
                    dataBlogs.slice(0, 10).map(item => (
                    <tr key={item.id} className="border-b">
                      <td><img src={item.thumbnail} alt={item.title} className='w-28 my-2 rounded-lg' /></td>
                      <td className="py-3 align-middle text-left"><p className="text-sm line-clamp-1">{item.title}</p></td>
                      <td><p className="text-sm line-clamp-1">{new Date(item.created_at).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "short",
                          year: "numeric",
                        })}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.category}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.tags}</p></td>                     
                    </tr>
                  ))
                  }
              </tbody>
            </table>
            <div className='text-right mt-3'>
              <Link to="/admin/blogs" className='text-sm text-blue-600 hover:underline'>View All</Link>
            </div>
          </div>
        </div>
        <div className='bg-white p-5 rounded-xl border'>
          <h3 className='font-bold text-lg'>Total Contacts</h3>
          <p className='text-2xl'>{contacts.length}</p>
          <div className='mt-5'>
            <table className="w-full table-auto border-collapse">
              <thead className='text-left border-b-4'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website/Company</th>
                    <th>Message</th>
                  </tr>
                </thead>
              <tbody>
                
                  {
                    contacts.slice(0, 10).map(item => (
                    <tr key={item.id} className="border-b">
                      <td className="py-3 align-middle text-left"><p className="text-sm line-clamp-1">{item.name}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.email}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.contact}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.company}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.requirement}</p></td>
                     
                    </tr>
                  ))
                  }
              </tbody>
            </table>
            <div className='text-right mt-3'>
              <Link to="/admin/contacts" className='text-sm text-blue-600 hover:underline'>View All</Link>
            </div>
          </div>
        </div>
        <div className='bg-white p-5 rounded-xl border'>
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
                </tr>
              </thead>
              <tbody>
                  {
                    joinuslist.slice(0, 10).map(item => (
                    <tr key={item.id} className="border-b">
                      <td className="py-3 align-middle text-left"><p className="text-sm line-clamp-1">{item.fullName}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.email}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.phone}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.position}</p></td>
                      <td><p className="text-sm line-clamp-1">{item.experience}</p></td>
                     
                    </tr>
                  ))
                  }
              </tbody>
            </table>
            <div className='text-right mt-3'>
              <Link to="/admin/resume-list" className='text-sm text-blue-600 hover:underline'>View All</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard