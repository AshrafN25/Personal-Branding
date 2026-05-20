import { useState } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiSend, FiLinkedin, FiGithub, FiInstagram, FiYoutube, FiShare2 } from 'react-icons/fi'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Kirim ke email menggunakan mailto atau service seperti EmailJS
    const mailtoLink = `mailto:ashrafnauvalrasya@gmail.com?subject=Pesan dari ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
    
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      username: 'Ashraf Nauval Rasya',
      icon: <FiLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/ashraf-nauval-rasya',
      color: '#0A66C2'
    },
    {
      name: 'Instagram',
      username: '@ashraf_nr25',
      icon: <FiInstagram size={20} />,
      url: 'https://www.instagram.com/ashraf_nr25',
      color: '#E4405F'
    },
    {
      name: 'GitHub',
      username: '@AshrafN25',
      icon: <FiGithub size={20} />,
      url: 'https://github.com/AshrafN25',
      color: '#FFFFFF'
    },
    {
      name: 'YouTube',
      username: '@ashrafnr',
      icon: <FiYoutube size={20} />,
      url: 'https://www.youtube.com/@ashrafnr',
      color: '#FF0000'
    }
  ]

  return (
    <section id="contact" className="section contact-section section-glow">
      <div className="container">
        <div className="section-header">
          <span className="badge">
            <FiMail size={12} />
            Kontak
          </span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Hubungi <span>Saya</span>
          </h2>
          <p className="section-subtitle">
            Punya pertanyaan? Kirim saya pesan, dan saya akan segera membalasnya.
          </p>
          <div className="glow-divider" />
        </div>

        <div className="contact-grid">
          {/* Left Side - Contact Form */}
          <div className="contact-form-wrapper card">
            <div className="contact-form-header">
              <h3 className="contact-form-title">Hubungi</h3>
              <p className="contact-form-subtitle">
                Ada yang ingin didiskusikan? Kirim saya pesan dan mari kita bicara.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  <FiUser size={16} />
                  Nama Anda
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama Anda"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  <FiMail size={16} />
                  Email Anda
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Masukkan email Anda"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <FiMessageSquare size={16} />
                  Pesan Anda
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tulis pesan Anda di sini..."
                  className="form-textarea"
                  rows="5"
                  required
                />
              </div>

              <button type="submit" className="btn-submit">
                <FiSend size={18} />
                Kirim Pesan
              </button>
            </form>

            {/* Connect With Me Section */}
            <div className="connect-section">
              <div className="connect-header">
                <FiShare2 size={18} />
                <h4>Connect With Me</h4>
              </div>
              
              <div className="social-grid">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card"
                    style={{ '--social-color': social.color }}
                  >
                    <div className="social-icon">{social.icon}</div>
                    <div className="social-info">
                      <span className="social-name">{social.name}</span>
                      <span className="social-username">{social.username}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Comments Section */}
          <div className="comments-wrapper card">
            <div className="comments-header">
              <FiMessageSquare size={20} />
              <h3 className="comments-title">Comments (3)</h3>
            </div>

            <div className="comments-list">
              {/* Pinned Comment */}
              <div className="comment-item pinned">
                <div className="comment-badge">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1L7.5 4.5L11 5L8.5 7.5L9 11L6 9L3 11L3.5 7.5L1 5L4.5 4.5L6 1Z" fill="currentColor"/>
                  </svg>
                  PINNED COMMENT
                </div>
                <div className="comment-content">
                  <div className="comment-avatar">
                    <img src="/ashraf.jpg" alt="Ashraf" />
                  </div>
                  <div className="comment-body">
                    <div className="comment-meta">
                      <span className="comment-author">Ashraf Nauval Rasya</span>
                      <span className="comment-role">Admin</span>
                      <span className="comment-date">Feb 24, 2026</span>
                    </div>
                    <p className="comment-text">
                      Thank you for visiting! If you have any questions, feel free to DM me on IG @ashraf_nr25
                    </p>
                  </div>
                </div>
              </div>

              {/* Regular Comments */}
              <div className="comment-item">
                <div className="comment-content">
                  <div className="comment-avatar">
                    <div className="comment-avatar-placeholder" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                      M
                    </div>
                  </div>
                  <div className="comment-body">
                    <div className="comment-meta">
                      <span className="comment-author">Mario</span>
                      <span className="comment-date">13h ago</span>
                    </div>
                    <p className="comment-text">rgfsdisa</p>
                  </div>
                </div>
              </div>

              <div className="comment-item">
                <div className="comment-content">
                  <div className="comment-avatar">
                    <div className="comment-avatar-placeholder" style={{ background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' }}>
                      R
                    </div>
                  </div>
                  <div className="comment-body">
                    <div className="comment-meta">
                      <span className="comment-author">Rian</span>
                      <span className="comment-date">18h ago</span>
                    </div>
                    <p className="comment-text">GG MASS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
