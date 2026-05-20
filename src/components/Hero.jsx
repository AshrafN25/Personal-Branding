import { useState, useEffect } from 'react'
import { FiArrowDown, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi'
import './Hero.css'

const typingTexts = ['Aspiring Web Developer', 'Tech Enthusiast']

function useTypingEffect(texts, typingSpeed = 80, deletingSpeed = 50, pauseTime = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1))
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), pauseTime)
        } else {
          setCharIndex(c => c + 1)
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1))
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex(i => (i + 1) % texts.length)
          setCharIndex(0)
        } else {
          setCharIndex(c => c - 1)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return displayed
}

export default function Hero() {
  const typedText = useTypingEffect(typingTexts)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="hero section-glow">
      {/* Background glow blobs */}
      <div className="hero-blob hero-blob-1" />
      <div className="hero-blob hero-blob-2" />

      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <div className="badge hero-badge">
            <span className="badge-dot" />
            Calon Web Developer
          </div>

          <h1 className="hero-title">
            Hi, I'm <br />
            <span className="hero-name-gradient">Ashraf Nauval</span>
            <br />
            <span className="hero-title-sub">Rasya</span>
          </h1>

          <p className="hero-tagline">
            <span className="typing-text">{typedText}</span>
            <span className="typing-cursor" />
          </p>

          <p className="hero-desc">
            Siswa SMK yang passionate di bidang web development dan teknologi digital.
            Terus belajar, berkreasi, dan membangun solusi digital yang bermanfaat.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo('portfolio')}>
              Lihat Karya Saya
              <FiArrowDown size={16} />
            </button>
            <button className="btn-outline" onClick={() => scrollTo('about')}>
              Tentang Saya
            </button>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/AshrafN25" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/ashraf-nauval-rasya-3001783a4" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/ashrafnauval" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
              <FiInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Right — Photo */}
        <div className="hero-photo-wrap">
          {/* Decorative circles - relative to photo */}
          <div className="hero-circle hero-circle-rotating" />
          <div className="hero-circle hero-circle-static" />
          
          <div className="photo-card">
            {/* Corner brackets (visible on hover) */}
            <span className="corner corner-tl" />
            <span className="corner corner-tr" />
            <span className="corner corner-bl" />
            <span className="corner corner-br" />

            {/* The photo */}
            <div className="photo-inner">
              <img
                src="/ashraf.jpg"
                alt="Ashraf Nauval Rasya"
                onError={(e) => {
                  e.target.style.display = 'none'
                  e.target.nextSibling.style.display = 'flex'
                }}
              />
              <div className="photo-placeholder" style={{ display: 'none' }}>
                <span className="photo-initials">AN</span>
              </div>
            </div>

            {/* Name card overlay — slides up on hover */}
            <div className="photo-namecard">
              <p className="photo-namecard-name">Ashraf Nauval Rasya</p>
              <p className="photo-namecard-role">Calon Web Developer &amp; Siswa SMKN 7 Semarang</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="scroll-indicator" onClick={() => scrollTo('about')} aria-label="Scroll down">
        <FiArrowDown size={20} />
      </button>
    </section>
  )
}
