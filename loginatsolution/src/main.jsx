import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Join from './pages/Join.jsx'
import Blog from './pages/Blog.jsx'
import Service from './pages/Service.jsx'
import TheImportanceofBranding from './pages/blogs/TheImportanceofBranding.jsx'
import CookiesPolicy from './pages/CookiesPolicy.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import TermsService from './pages/TermsService.jsx'
import JobFunction from './pages/JobFunction.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import { AuthProvider, useAuth } from './context/AuthContext.jsx'
import Dashboard from './admin/Dashboard.jsx'
import AdminLayout from './admin/AdminLayout.jsx'
import ContactList from './admin/contacts/ContactList.jsx'
import JoinusList from './admin/joinus/JoinusList.jsx'
import NotFound from './pages/NotFound.jsx'
import EditContacts from './admin/contacts/EditContacts.jsx'
import EditJoinusList from './admin/joinus/EditJoinusList.jsx'

export function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}


const router = createBrowserRouter(

    [
      {
        path: "/",
        element: <App/>,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'contact-us', element: <Contact /> },
          { path: 'join-us', element: <Join />},
          { path: 'blogs', element: <Blog />},
          { path: 'services', element: <Service />},
          { path: 'cookies-policy', element: <CookiesPolicy />},
          { path: 'privacy-policy', element: <PrivacyPolicy />},
          { path: 'terms-service', element: <TermsService />},
          { path: 'jobfunction', element: <JobFunction />},
          { path: 'register', element: <Register />},
          { path: 'login', element: <Login />},
          { path: 'blogs/the-importance-of-branding', element: <TheImportanceofBranding />},
        ]
      },

      {
        path: 'admin',
        element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'contacts', element: <ContactList /> },
          { path: 'contacts/edit/:id', element: <EditContacts /> },
          { path: 'resume-list', element: <JoinusList /> },
          { path: 'resume-list/edit/:id', element: <EditJoinusList /> },
        ]
      },
      { path: '*', element: <NotFound /> },
    ]

)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
