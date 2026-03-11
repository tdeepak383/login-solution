import React, { useEffect, useState } from 'react'
import { FiBookOpen } from 'react-icons/fi';
import { Link, Links } from 'react-router-dom';
import { FaArrowUp, FaChevronRight, FaUserTie } from "react-icons/fa6";
import { LuBriefcaseBusiness } from 'react-icons/lu';
import { BiSolidContact } from 'react-icons/bi';


import { PieChart } from '@mui/x-charts/PieChart';




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

  const [jobsPost, setJobPost] = useState([]);
      
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${import.meta.env.VITE_VERCEL_URL}/api/jobs`);
      const result = await response.json();
      setJobPost(result.data || []);
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

  const data = [
  { label: 'Blogs', value: dataBlogs.length, color: `var(--purple)` },
  { label: 'Contacts', value: contacts.length, color: 'var(--blue)' },
  { label: 'Job Posts', value: jobsPost.length, color: 'var(--pink)' },
  { label: 'Job Applicants', value: joinuslist.length, color: 'var(--green)' },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};



  return (
    <div className='p-10 bg-gray-100 h-auto lg:w-full w-[1200px]'>
      <h2 className='text-2xl mb-5 font-bold'>Dashboard</h2>
      <p>Welcome to the Admin Dashboard!</p>
      <div className='grid grid-cols-2 gap-4 mt-10'>
        <div className='grid grid-cols-2 gap-5'>
            <div className='bg-white p-5 rounded-xl shadow-lg cursor-pointer'>
                <div className='flex justify-between items-start'>
                  <div className='border-l-4 border-[var(--purple)] pl-5'>
                    <p className='text-gray-500 text-sm'>Blogs Posted</p>
                    <p className='mt-2 text-3xl font-semibold'>{dataBlogs.length}</p>
                  </div>
                  <div>
                    <FiBookOpen className="text-5xl text-[var(--purple)] p-2 rounded-lg bg-[var(--purple-light)]"/>
                  </div>
                </div>
                <div className='mt-5 text-xs flex items-center gap-1'>
                  <span className="font-semibold text-[var(--purple)] flex items-center gap-1">
                    <FaArrowUp /> {100 / dataBlogs.length} %
                  </span> 
                  <p>Since last week upload </p>
                </div>             
            </div>
            <div className='bg-white p-5 rounded-xl shadow-lg cursor-pointer'>
                <div className='flex justify-between items-start'>
                  <div className='border-l-4 border-[var(--pink)] pl-5'>
                    <p className='text-gray-500 text-sm'>Jobs Posted</p>
                    <p className='mt-2 text-3xl font-semibold'>{jobsPost.length}</p>
                  </div>
                  <div>
                    <LuBriefcaseBusiness className="text-5xl text-[var(--pink)] p-2 rounded-lg bg-[var(--pink-light)]"/>
                  </div>
                </div>
                <div className='mt-5 text-xs flex items-center gap-1'>
                  <span className="font-semibold text-[var(--pink)] flex items-center gap-1">
                    <FaArrowUp /> {100 / jobsPost.length}%
                  </span> 
                  <p>Since last week upload </p>
                </div>
            </div>
            <div className='bg-white p-5 rounded-xl shadow-lg cursor-pointer'>
                <div className='flex justify-between items-start'>
                  <div className='border-l-4 border-[var(--blue)] pl-5'>
                    <p className='text-gray-500 text-sm'>Contacts Received</p>
                    <p className='mt-2 text-3xl font-semibold'>{contacts.length}</p>
                  </div>
                  <div>
                    <BiSolidContact className="text-5xl text-[var(--blue)] p-2 rounded-lg bg-[var(--blue-light)]"/>
                  </div>
                </div>
                <div className='mt-5 text-xs flex items-center gap-1'>
                  <span className="font-semibold text-[var(--blue)] flex items-center gap-1">
                    <FaArrowUp /> {(100 / contacts.length).toFixed(2)}%
                  </span> 
                  <p>Since last week Received </p>
                </div>
            </div>
            <div className='bg-white p-5 rounded-xl shadow-lg cursor-pointer'>
                <div className='flex justify-between items-start'>
                  <div className='border-l-4 border-[var(--green)] pl-5'>
                    <p className='text-gray-500 text-sm'>Job Applicants Received</p>
                    <p className='mt-2 text-3xl font-semibold'>{joinuslist.length}</p>
                  </div>
                  <div>
                    <FaUserTie className="text-5xl text-[var(--green)] p-2 rounded-lg bg-[var(--green-light)]"/>
                  </div>
                </div>
                <div className='mt-5 text-xs flex items-center gap-1'>
                  <span className="font-semibold text-[var(--green)] flex items-center gap-1">
                    <FaArrowUp /> {(7 * joinuslist.length / 100).toFixed(2)}%
                  </span> 
                  <p>Since last week Received </p>
                </div>
            </div>
        </div>
        <div className='bg-white p-5 rounded-xl shadow-lg'>
          <h3 className='font-bold text-lg'>Statistics</h3>
            <div className="grid grid-cols-2 gap-10">
              <div className="content-center">
                <PieChart
                  series={[{             
                    data, 
                    innerRadius: 30,
                    outerRadius: 100,
                    paddingAngle: 2,
                    cornerRadius: 5,
                    startAngle: -0,
                    endAngle: 360,
                    highlightScope: { fade: 'global', highlight: 'item' },
                    faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  }]}
                  {...settings}
                />
              </div>
              <div>
                  <div className='my-2'>
                    <p className='text-gray-500 text-sm'>Total Blogs</p>
                    <p className='mt-2 text-xl font-semibold flex items-center gap-2'><div className='w-4 h-4 bg-[var(--purple)] rounded-full'></div>{dataBlogs.length}</p>
                  </div>
                  <div className='my-2'>
                    <p className='text-gray-500 text-sm'>Total Job Posts</p>
                    <p className='mt-2 text-xl font-semibold flex items-center gap-2'><div className='w-4 h-4 bg-[var(--pink)] rounded-full'></div>{jobsPost.length}</p>
                  </div>
                  <div className='my-2'>
                    <p className='text-gray-500 text-sm'>Total Contacts</p>
                    <p className='mt-2 text-xl font-semibold flex items-center gap-2'><div className='w-4 h-4 bg-[var(--blue)] rounded-full'></div>{contacts.length}</p>
                  </div>
                  <div className='my-2'>
                    <p className='text-gray-500 text-sm'>Total Job Applicants</p>
                    <p className='mt-2 text-xl font-semibold flex items-center gap-2'><div className='w-4 h-4 bg-[var(--green)] rounded-full'></div>{joinuslist.length}</p>
                  </div>
              </div>
            </div>
            
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 mt-10'>
        <div className='bg-white p-5 rounded-xl shadow-lg'>
          <h3 className='font-bold text-lg'>Blog Posts</h3>
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
        <div className='bg-white p-5 rounded-xl shadow-lg'>
          <h3 className='font-bold text-lg'>Contacts</h3>
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
        <div className='bg-white p-5 rounded-xl shadow-lg'>
          <h3 className='font-bold text-lg'>Job Applicants</h3>
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