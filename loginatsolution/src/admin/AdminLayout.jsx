import React from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import { MdDashboard, MdLogout } from "react-icons/md";
import { FaBars, FaBlog, FaUserCircle, FaUsers } from "react-icons/fa";
import { MdAddToPhotos } from "react-icons/md";

import { RxCross2 } from "react-icons/rx";
import AutoSEO from '../components/SEO';
function AdminLayout() {

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("token"); 
        navigate("/login");
    };
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

  return (
    <>
    <AutoSEO/>
    <div className='flex h-screen mx-auto'>
      <aside className={`lg:w-64 w-96 bg-[var(--purple)] text-white p-6 space-y-4 ${isSidebarOpen ? 'block' : 'max-sm:hidden'}`}>
          
        <div className="flex flex-col h-full justify-between">
          <div>
          <h2 className='lg:text-xl font-bold flex items-center my-4 gap-3'>Loginat Solution</h2>
          {/* <h2 className='lg:text-xl font-bold flex items-center mb-4 gap-3'><FaPenSquare />Admin Panel</h2> */}
          <nav className='space-y-6 text-sm'>
              
              <Link to="/admin" className="flex items-center gap-3"><MdDashboard className='text-lg'/>Dashboard</Link>
              <Link to="/admin/blogs" className="flex items-center gap-3"><FaBlog className='text-lg' />All Blogs</Link>
              <Link to="/admin/add-blog" className="flex items-center gap-3"><MdAddToPhotos className='text-lg ml-2' />Add Blogs</Link>
              <Link to="/admin/contacts" className="flex items-center gap-3"><FaUsers className='text-lg' />Contacts List</Link>
              <Link to="/admin/resume-list" className="flex items-center gap-3"><FaUserCircle className='text-lg' />Applicants List</Link>
              <Link to="/admin/asl-contacts" className="flex items-center gap-3"><FaUsers className='text-lg' />ASL Contacts List</Link>
          </nav>
        </div>
        <div className='mt-10'>
            <button onClick={handleLogout} className="bg-white text-[var(--purple)] hover:text-white rounded hover:bg-black transition py-2 w-full justify-center flex text-sm items-center gap-1"><MdLogout />LogOut</button>
        </div>
        </div>
      </aside>
      <main className='w-full overflow-scroll'>
              <button onClick={toggleSidebar} className="text-white md:hidden absolute top-4 left-4">
                  {isSidebarOpen ? <RxCross2  className='text-white'/> : <FaBars className='text-black'/>} 
              </button>
          <Outlet />
      </main>
    </div>
    </>
  )
}

export default AdminLayout