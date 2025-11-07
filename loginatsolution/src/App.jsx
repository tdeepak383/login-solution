import React, { useState } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import BackToTop from './components/BackToTop'
import CookieConsent from './components/CookieConsent'
import ScrollToTop from './components/scrollToTop'


function App() {

  return (
    <>    
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
      <CookieConsent />
      <ScrollToTop/>
      
    </>
  )
}

export default App
