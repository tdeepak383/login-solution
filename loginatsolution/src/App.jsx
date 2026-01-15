import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import BackToTop from './components/BackToTop'
import CookieConsent from './components/CookieConsent'
import ScrollToTop from './components/scrollToTop'
import AutoSEO from './components/SEO'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>    
      <AutoSEO/>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
      <CookieConsent />
      <ScrollToTop/>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App
