import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import './Navbar.css'

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'cv', label: 'CV' },
]

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-outer">
        {/* Left: Logo */}
        <div className="navbar-logo" onClick={() => scrollTo('home')}>
          <span className="logo-abbr">ANR</span>
          <div className="logo-text">
            <span className="logo-fullname">Ashraf Nauval Rasya</span>
            <span className="logo-sub">PORTFOLIO</span>
          </div>
        </div>

        {/* Center: Pill Nav */}
        <div className="navbar-pill">
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.id}>
                <button
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: CTA + Hamburger */}
        <div className="navbar-right">
          <button className="navbar-cta" onClick={() => scrollTo('cv')}>
            Download CV
          </button>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <button
            key={link.id}
            className={`mobile-nav-link ${activeSection === link.id ? 'active' : ''}`}
            onClick={() => scrollTo(link.id)}
          >
            {link.label}
          </button>
        ))}
        <button className="btn-primary mobile-cta" onClick={() => scrollTo('cv')}>
          Download CV
        </button>
      </div>
    </nav>
  )
}
