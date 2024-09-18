import 'bootstrap/dist/css/bootstrap.min.css'
import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Preloader from '../src/components/Preloader.js'
import Footer from './components/Footer.js'
import Navbar from './components/Navbar.js'
import ScrollToTop from './components/ScrollToTop.js'
import About from './pages/About.js'
import Home from './pages/Home.js'
import Projects from './pages/Projects.js'
import Resume from './pages/Resume.js'
import './styles/App.css'

function App() {
  const [load, updateLoad] = useState(true)

  /* Function to set a timeout for the preloader */
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false)
    }, 1200)

    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <Preloader load={load} />
      <div className='App' id={load ? 'no-scroll' : 'scroll'}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
