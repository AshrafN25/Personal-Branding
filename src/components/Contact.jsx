import { useState, useEffect } from 'react'
import { FiMail, FiUser, FiMessageSquare, FiSend, FiLinkedin, FiGithub, FiInstagram, FiYoutube, FiShare2 } from 'react-icons/fi'
import emailjs from '@emailjs/browser'
import { db } from '../firebase'
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from 'firebase/firestore'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' or 'error'

  // Comment state
  const [commentData, setCommentData] = useState({ name: '', message: '' })
  const [comments, setComments] = useState([])
  const [loadingComments, setLoadingComments] = useState(true)

  // Load comments from Firebase
  useEffect(() => {
    loadComments()
  }, [])

  const loadComments = async () => {
    try {
      const q = query(collection(db, 'comments'), orderBy('createdAt', 'desc'))
      const querySnapshot = await getDocs(q)
      const commentsData = []
      querySnapshot.forEach((doc) => {
        commentsData.push({ id: doc.id, ...doc.data() })
      })
      setComments(commentsData)
    } catch (error) {
      console.error('Error loading comments:', error)
    } finally {
      setLoadingComments(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleCommentChange = (e) => {
    setCommentData({
      ...commentData,
      [e.target.name]: e.target.value
    })
  }

  const handleCommentSubmit = async (e) => {
    e.preventDefault()
    
    if (!commentData.name || !commentData.message) {
      alert('Mohon isi nama dan pesan!')
      return
    }

    const gradients = [
      'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
    ]

    try {
      // Simpan ke Firebase
      await addDoc(collection(db, 'comments'), {
        author: commentData.name,
        text: commentData.message,
        avatar: commentData.name[0].toUpperCase(),
        gradient: gradients[Math.floor(Math.random() * gradients.length)],
        createdAt: serverTimestamp()
      })

      // Reload comments
      await loadComments()
      
      // Reset form
      setCommentData({ name: '', message: '' })
    } catch (error) {
      console.error('Error posting comment:', error)
      alert('Gagal mengirim comment. Silakan coba lagi.')
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Data EmailJS Anda
    const serviceId = 'service_3874mse'        // Service ID dari Email Services
    const templateId = 'template_bkdaie9'      // Template ID yang baru di-save
    const publicKey = 'oK4oadcwBS60h8SsR'      // Public Key dari Account

    // Template params harus sesuai dengan variable di EmailJS template
    const templateParams = {
      name: formData.name,           // {{name}} di template
      email: formData.email,         // {{email}} di template
      message: formData.message,     // {{message}} di template
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        // Auto hide success message setelah 5 detik
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      })
      .catch((error) => {
        console.error('Error:', error)
        setSubmitStatus('error')
        // Auto hide error message setelah 5 detik
        setTimeout(() => {
          setSubmitStatus(null)
        }, 5000)
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      username: 'Ashraf Nauval Rasya',
      icon: <FiLinkedin size={20} />,
      url: 'https://www.linkedin.com/in/ashraf-nauval-rasya-3001783a4',
      color: '#0A66C2'
    },
    {
      name: 'Instagram',
      username: '@ashraf nauval',
      icon: <FiInstagram size={20} />,
      url: 'https://www.instagram.com/ashrafnauval',
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
      username: '@ashrafnauval',
      icon: <FiYoutube size={20} />,
      url: 'https://www.youtube.com/@ashrafn4139',
      color: '#FF0000'
    }
  ]

  return (
    <section id="contact" className="section contact-section section-dark">
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

              <button type="submit" className="btn-submit" disabled={isSubmitting}>
                <FiSend size={18} />
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
              </button>

              {submitStatus === 'success' && (
                <div className="submit-message success">
                  <div className="submit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div className="submit-content">
                    <strong>Pesan Berhasil Dikirim!</strong>
                    <p>Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.</p>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="submit-message error">
                  <div className="submit-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 8V12M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="submit-content">
                    <strong>Gagal Mengirim Pesan</strong>
                    <p>Terjadi kesalahan. Silakan coba lagi atau hubungi saya melalui email langsung.</p>
                  </div>
                </div>
              )}
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
              <h3 className="comments-title">
                Comments ({loadingComments ? '...' : comments.length + 1})
              </h3>
            </div>

            {/* Comment Form */}
            <form className="comment-form" onSubmit={handleCommentSubmit}>
              <div className="comment-form-group">
                <label htmlFor="comment-name" className="comment-form-label">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id="comment-name"
                  name="name"
                  value={commentData.name}
                  onChange={handleCommentChange}
                  placeholder="Enter your name"
                  className="comment-form-input"
                  required
                />
              </div>

              <div className="comment-form-group">
                <label htmlFor="comment-message" className="comment-form-label">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  id="comment-message"
                  name="message"
                  value={commentData.message}
                  onChange={handleCommentChange}
                  placeholder="Write your message here..."
                  className="comment-form-textarea"
                  rows="4"
                  required
                />
              </div>

              <button type="submit" className="btn-post-comment">
                <FiSend size={16} />
                Post Comment
              </button>
            </form>

            <div className="comments-divider"></div>

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
                      <span className="comment-author">Ashraf</span>
                      <span className="comment-role">Admin</span>
                      <span className="comment-date">Feb 24, 2026</span>
                    </div>
                    <p className="comment-text">
                      Thank you for visiting! If you have any questions, feel free to DM me on IG @ashrafnauval
                    </p>
                  </div>
                </div>
              </div>

              {/* Regular Comments */}
              {loadingComments ? (
                <div className="comments-loading">
                  <p>Loading comments...</p>
                </div>
              ) : comments.length === 0 ? (
                <div className="comments-empty">
                  <p>Belum ada comment. Jadilah yang pertama!</p>
                </div>
              ) : (
                comments.map((comment) => {
                  // Format timestamp
                  let dateText = 'Just now'
                  if (comment.createdAt) {
                    const commentDate = comment.createdAt.toDate()
                    const now = new Date()
                    const diffMs = now - commentDate
                    const diffMins = Math.floor(diffMs / 60000)
                    const diffHours = Math.floor(diffMs / 3600000)
                    const diffDays = Math.floor(diffMs / 86400000)
                    
                    if (diffMins < 1) dateText = 'Just now'
                    else if (diffMins < 60) dateText = `${diffMins}m ago`
                    else if (diffHours < 24) dateText = `${diffHours}h ago`
                    else dateText = `${diffDays}d ago`
                  }

                  return (
                    <div key={comment.id} className="comment-item">
                      <div className="comment-content">
                        <div className="comment-avatar">
                          <div className="comment-avatar-placeholder" style={{ background: comment.gradient }}>
                            {comment.avatar}
                          </div>
                        </div>
                        <div className="comment-body">
                          <div className="comment-meta">
                            <span className="comment-author">{comment.author}</span>
                            <span className="comment-date">{dateText}</span>
                          </div>
                          <p className="comment-text">{comment.text}</p>
                        </div>
                      </div>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
