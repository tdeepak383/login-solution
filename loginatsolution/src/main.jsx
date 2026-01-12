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
import BlogList from './admin/blogs/BlogList.jsx'
import PDE from './pages/jobs/PDE.jsx'
import TeamLead from './pages/jobs/TeamLead.jsx'
import ClientStories from './pages/ClientStories.jsx'
import TimelyDeliveryofHighQualityeLearning from './pages/client-strories/TimelyDeliveryofHighQualityeLearning.jsx'
import CreativeSolutionsforGlobalAviation from './pages/client-strories/CreativeSolutionsforGlobalAviation.jsx'
import IntegratedCreativeandDigitalMarketingSupport from './pages/client-strories/IntegratedCreativeandDigitalMarketingSupport.jsx'
import TradeIndia from './pages/client-strories/TradeIndia.jsx'
import IndiaMart from './pages/client-strories/IndiaMart.jsx'
import NIIT from './pages/client-strories/NIIT.jsx'
import TEConnectivity from './pages/client-strories/TEConnectivity.jsx'
import AddBlog from './admin/blogs/AddBlog.jsx'
import AslContact from './admin/aslcontacts/AslContact.jsx'
import BlogPage from './pages/blogs/BlogPage.jsx'

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
          { path: 'blogs/:slug', element: <BlogPage />},
          { path: 'services', element: <Service />},
          { path: 'cookies-policy', element: <CookiesPolicy />},
          { path: 'privacy-policy', element: <PrivacyPolicy />},
          { path: 'terms-service', element: <TermsService />},
          { path: 'jobfunction', element: <JobFunction />},
          { path: 'register', element: <Register />},
          { path: 'login', element: <Login />},



          // Jobs paths
          { path: 'jobs/project-delivery-executive-pde', element: <PDE /> },
          { path: 'jobs/team-lead', element: <TeamLead /> },

          // Client Strories paths
          { path: 'client-stories', element: <ClientStories /> },
          { path: 'client-stories/timely-delivery-high-quality-elearning-modules-aptara', element: <TimelyDeliveryofHighQualityeLearning /> },
          { path: 'client-stories/creative-solutions-global-aviation-leaders-in-high-pressure-environments', element: <CreativeSolutionsforGlobalAviation /> },
          { path: 'client-stories/integrated-creative-and-digital-marketing-support-for-an-ai-technology-leader', element: <IntegratedCreativeandDigitalMarketingSupport /> },
          { path: 'client-stories/long-term-content-and-backend-support-for-a-leading-b2b-portal-in-india', element: <TradeIndia /> },
          { path: 'client-stories/long-term-backend-operations-support-for-a-leading-b2b-portal-in-india', element: <IndiaMart /> },
          { path: 'client-stories/staff-augmentation-with-high-resource-continuity-for-niit-ltd', element: <NIIT /> },
          { path: 'client-stories/creative-and-intranet-solutions-for-internal-communications-at-te-connectivity', element: <TEConnectivity /> },

        ]
      },

      {
        path: 'admin',
        element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
        children: [
          { index: true, element: <Dashboard /> },
          { path: 'contacts', element: <ContactList /> },
          { path: 'blogs', element: <BlogList /> },
          { path: 'add-blog', element: <AddBlog /> },
          { path: 'contacts/edit/:id', element: <EditContacts /> },
          { path: 'resume-list', element: <JoinusList /> },
          { path: 'resume-list/edit/:id', element: <EditJoinusList /> },
          { path: 'asl-contacts', element: <AslContact/> }
        ]
      },
      { path: '*', element: <NotFound /> },
      
      
    ],
    // {
    //   basename: "/demo",
    // }

)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
