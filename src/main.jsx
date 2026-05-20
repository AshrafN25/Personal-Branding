import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Cek apakah user dari project detail
    const fromProjectDetail = sessionStorage.getItem('fromProjectDetail')
    const lastViewedProjectId = sessionStorage.getItem('lastViewedProjectId')
    
    // Scenario 1: Kembali dari project detail dengan project ID - biarkan Portfolio.jsx handle scroll
    if (fromProjectDetail === 'true' && lastViewedProjectId) {
      // Scroll ke section portfolio dulu, baru Portfolio.jsx akan scroll ke card specific
      setTimeout(() => {
        const element = document.querySelector(hash || '#portfolio')
        if (element) {
          element.scrollIntoView({ behavior: 'instant', block: 'start' })
        }
        sessionStorage.removeItem('fromProjectDetail')
      }, 50)
    }
    // Scenario 2: Kembali dari project detail tanpa project ID - scroll ke section portfolio
    else if (fromProjectDetail === 'true' && hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
        sessionStorage.removeItem('fromProjectDetail')
      }, 100)
    }
    // Scenario 3: Hard refresh atau buka pertama kali - scroll ke atas
    else {
      window.scrollTo(0, 0)
      // Bersihkan sessionStorage
      sessionStorage.removeItem('fromProjectDetail')
      sessionStorage.removeItem('lastViewedProjectId')
    }
  }, [pathname, hash])

  return null
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
