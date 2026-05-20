import { useState } from 'react'
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMapPin, FiPhone, FiArrowUp } from 'react-icons/fi'
import './Footer.css'

const quickLinks = [
  { id: 'home',      label: 'Home' },
  { id: 'about',     label: 'About' },
  { id: 'skills',    label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'cv',        label: 'CV' },
  { id: 'contact',   label: 'Contact' },
]

export default function Footer() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleFollow = (e) => {
    e.preventDefault()
    if (email) { setSent(true); setEmail('') }
  }

  return (
    <footer className="footer">
      <div className="footer-glow" />

      <div className="container footer-grid">

        {/* ── Col 1: Brand ── */}
        <div className="footer-brand">
          <div className="footer-logo" onClick={scrollTop}>
            <span className="footer-logo-abbr">ANR</span>
            <div>
              <span className="footer-logo-name">Ashraf</span>
              <span className="footer-logo-sub">Portfolio</span>
            </div>
          </div>

          <p className="footer-desc">
            Membangun website dan aplikasi yang bermanfaat dan mudah digunakan oleh semua orang.
          </p>

          <ul className="footer-tags">
            <li><span className="footer-tag-dot" />Web Development</li>
            <li><span className="footer-tag-dot" />UI / UX Design</li>
            <li><span className="footer-tag-dot" />Front-end Engineer</li>
          </ul>
        </div>

        {/* ── Col 2: Quick Links ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">
            <span className="footer-col-line" />
            Quick Links
          </h4>
          <div className="footer-links-grid">
            {quickLinks.map(link => (
              <button key={link.id} className="footer-link" onClick={() => scrollTo(link.id)}>
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Col 3: Get in Touch ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">
            <span className="footer-col-line" />
            Get in Touch
          </h4>
          <ul className="footer-contact-list">
            <li>
              <FiMail size={14} />
              <span>ashrafnauval25@gmail.com</span>
            </li>
            <li>
              <FiMapPin size={14} />
              <span>Semarang, Jawa Tengah, Indonesia</span>
            </li>
            <li>
              <FiPhone size={14} />
              <span>+62 851-8312-5336</span>
            </li>
          </ul>
          <div className="footer-socials">
            <a href="https://github.com/AshrafN25" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={16} />
            </a>
            <a href="https://www.linkedin.com/in/ashraf-nauval-rasya-3001783a4" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={16} />
            </a>
            <a href="https://www.instagram.com/ashrafnauval" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram size={16} />
            </a>
            <a href="mailto:ashrafnauval25@gmail.com" aria-label="Email">
              <FiMail size={16} />
            </a>
          </div>
        </div>

        {/* ── Col 4: Stay Updated ── */}
        <div className="footer-col">
          <h4 className="footer-col-title">
            <span className="footer-col-line" />
            Stay Updated
          </h4>
          <p className="footer-newsletter-desc">
            Follow untuk mendapatkan update terbaru tentang proyek dan karya saya.
          </p>
          {sent ? (
            <p className="footer-sent">✅ Terima kasih sudah follow!</p>
          ) : (
            <form className="footer-form" onSubmit={handleFollow}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="footer-input"
              />
              <button type="submit" className="footer-follow-btn">Follow</button>
            </form>
          )}
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">
            © 2026 <span>Ashraf Nauval Rasya</span>. All rights reserved.
          </p>
          <button className="footer-scroll-top" onClick={scrollTop} aria-label="Back to top">
            <FiArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
