import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Join from './pages/Join.jsx'
import Blog from './pages/Blog.jsx'
import Service from './pages/Service.jsx'
import Capabilities from './pages/Capabilities.jsx'
import TheImportanceofBranding from './pages/blogs/TheImportanceofBranding.jsx'
import CookiesPolicy from './pages/CookiesPolicy.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact-us' element={<Contact />} />
      <Route path='join-us' element={<Join />} />
      <Route path='blogs' element={<Blog />} />
      <Route path='services' element={<Service />} />
      <Route path='capabilities' element={<Capabilities />} />
      <Route path='cookies-policy' element={<CookiesPolicy />} />



      {/* Blogs Links start here */}
      <Route path='blogs/the-importance-of-branding' element={<TheImportanceofBranding />} />
    </Route>
  ),
  {
    basename: '/clientdemo/loginatsol', 
  }
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
