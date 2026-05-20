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
    const savedScrollPos = sessionStorage.getItem('portfolioScrollPos')
    
    // Scenario 1: Kembali dari project detail dengan scroll position tersimpan
    if (fromProjectDetail === 'true' && savedScrollPos) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(savedScrollPos), behavior: 'instant' })
        // Bersihkan sessionStorage setelah restore
        sessionStorage.removeItem('fromProjectDetail')
        sessionStorage.removeItem('portfolioScrollPos')
      }, 100)
    }
    // Scenario 2: Kembali dari project detail tanpa scroll position (gunakan hash)
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
      sessionStorage.removeItem('portfolioScrollPos')
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
