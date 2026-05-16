import { FiDownload, FiUser, FiBook, FiAward, FiCode, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import './CV.css'

const personalData = [
  { icon: <FiUser size={14} />, label: 'Nama Lengkap', value: 'Ashraf Nauval Rasya' },
  { icon: <FiMapPin size={14} />, label: 'Kota', value: 'Semarang, Jawa Tengah' },
  { icon: <FiBook size={14} />, label: 'Sekolah', value: 'SMKN 7 Semarang' },
  { icon: <FiMail size={14} />, label: 'Email', value: 'ashrafnauval25@gmail.com' },
  { icon: <FiPhone size={14} />, label: 'Telepon', value: '+62 851-8312-5336' },
]

const educationCV = [
  { school: 'SMKN 7 Semarang', period: '2024 – Sekarang', desc: 'Sistem Informasi Jaringan dan Aplikasi (SIJA)', current: true },
  { school: 'SMPN 27 Semarang', period: '2021 – 2024', desc: 'Lulus dengan nilai memuaskan' },
  { school: 'SD Ngesrep 03', period: '2015 – 2021', desc: 'Lulus dengan nilai memuaskan' },
  { school: 'TK PGRI 55', period: '2013 – 2014', desc: 'Semarang' },
]

const skillsCV = [
  { name: 'HTML & CSS', level: 85, color: '#F1B800' },
  { name: 'JavaScript', level: 60, color: '#F1B800' },
  { name: 'React.js', level: 45, color: '#F1B800' },
  { name: 'Cisco Packet Tracer', level: 65, color: '#3B82F6' },
  { name: 'Canva / Figma', level: 80, color: '#8B5CF6' },
  { name: 'Git & GitHub', level: 55, color: '#F1B800' },
]

const experienceCV = [
  {
    organization: 'TDS (Team Digital Stemba)',
    role: 'Fotografer & Videografer',
    period: '2024 – Sekarang',
    desc: 'Bertanggung jawab sebagai fotografer dan videografer untuk dokumentasi kegiatan sekolah, mengedit flyer promosi, membuat dan mengedit konten reels untuk media sosial sekolah, serta mendesain berbagai materi visual untuk keperluan publikasi SMKN 7 Semarang.',
    current: true
  },
  {
    organization: '27 News',
    role: 'Wakil 27 News',
    period: '2021 – 2024',
    desc: 'Menjabat sebagai wakil divisi media di organisasi sekolah, bertugas sebagai fotografer untuk dokumentasi kegiatan, mengedit flyer dan poster acara, membuat konten berita sekolah, serta mengelola publikasi visual untuk berbagai kegiatan SMPN 27 Semarang.',
    current: false
  },
]

const quote = {
  text: '"Kebahagiaan bukanlah tujuan, tapi perjalanan."',
  author: '— Ashraf Nauval Rasya'
}

export default function CV() {
  return (
    <section id="cv" className="section cv-section section-glow">
      <div className="container">
        <div className="section-header">
          <span className="badge">
            <FiUser size={12} />
            Curriculum Vitae
          </span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Curriculum <span>Vitae</span>
          </h2>
          <p className="section-subtitle">
            Ringkasan data diri, pendidikan, dan keahlian saya
          </p>
          <div className="glow-divider" />
        </div>

        <div className="cv-wrapper">
          {/* CV Card */}
          <div className="cv-card">
            {/* CV Header */}
            <div className="cv-header">
              <div className="cv-header-left">
                <img src="/ashraf3.jpg" alt="Ashraf Nauval Rasya" className="cv-avatar" />
                <div>
                  <h2 className="cv-name">Ashraf Nauval Rasya</h2>
                  <p className="cv-role">Calon Web Developer | Siswa SMKN 7 Semarang</p>
                  <div className="cv-location">
                    <FiMapPin size={12} />
                    Semarang, Jawa Tengah
                  </div>
                </div>
              </div>
              <button className="btn-primary cv-download" onClick={() => window.print()}>
                <FiDownload size={16} />
                Download CV
              </button>
            </div>

            <div className="cv-body">
              {/* Left Column */}
              <div className="cv-left">
                {/* Personal Data */}
                <div className="cv-section-block">
                  <h3 className="cv-section-title">
                    <FiUser size={16} />
                    Data Pribadi
                  </h3>
                  <div className="cv-personal-list">
                    {personalData.map((item, i) => (
                      <div key={i} className="cv-personal-item">
                        <span className="cv-personal-icon">{item.icon}</span>
                        <div>
                          <span className="cv-personal-label">{item.label}</span>
                          <span className="cv-personal-value">{item.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div className="cv-section-block">
                  <h3 className="cv-section-title">
                    <FiCode size={16} />
                    Keahlian
                  </h3>
                  <div className="cv-skills-list">
                    {skillsCV.map((skill, i) => (
                      <div key={i} className="cv-skill-item">
                        <div className="cv-skill-header">
                          <span className="cv-skill-name">{skill.name}</span>
                          <span className="cv-skill-pct" style={{ color: skill.color }}>{skill.level}%</span>
                        </div>
                        <div className="cv-skill-track">
                          <div
                            className="cv-skill-fill"
                            style={{
                              width: `${skill.level}%`,
                              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="cv-right">
                {/* About */}
                <div className="cv-section-block">
                  <h3 className="cv-section-title">
                    <FiUser size={16} />
                    Tentang Saya
                  </h3>
                  <p className="cv-about-text">
                    Saya adalah siswa SMKN 7 Semarang yang memiliki minat di bidang teknologi,
                    khususnya pengembangan web dan aplikasi mobile. Saya senang mempelajari hal
                    baru dan terus mengembangkan kemampuan dalam coding dan desain. Saya bercita-cita
                    menjadi developer profesional yang mampu menciptakan solusi digital yang bermanfaat.
                  </p>
                </div>

                {/* Education */}
                <div className="cv-section-block">
                  <h3 className="cv-section-title">
                    <FiBook size={16} />
                    Riwayat Pendidikan
                  </h3>
                  <div className="cv-edu-list">
                    {educationCV.map((edu, i) => (
                      <div key={i} className={`cv-edu-item ${edu.current ? 'current' : ''}`}>
                        <div className="cv-edu-dot" />
                        <div className="cv-edu-content">
                          <div className="cv-edu-header">
                            <span className="cv-edu-school">{edu.school}</span>
                            <span className="cv-edu-period">{edu.period}</span>
                          </div>
                          <p className="cv-edu-desc">{edu.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Experience */}
                <div className="cv-section-block">
                  <h3 className="cv-section-title">
                    <FiAward size={16} />
                    Pengalaman & Organisasi
                  </h3>
                  <div className="cv-edu-list">
                    {experienceCV.map((exp, i) => (
                      <div key={i} className={`cv-edu-item ${exp.current ? 'current' : ''}`}>
                        <div className="cv-edu-dot" />
                        <div className="cv-edu-content">
                          <div className="cv-edu-header">
                            <span className="cv-edu-school">{exp.organization}</span>
                            <span className="cv-edu-period">{exp.period}</span>
                          </div>
                          <p className="cv-edu-desc" style={{ fontWeight: 600, color: 'var(--accent-gold)', marginBottom: 4 }}>
                            {exp.role}
                          </p>
                          <p className="cv-edu-desc">{exp.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div className="cv-quote">
            <div className="quote-mark">"</div>
            <blockquote className="quote-text">{quote.text}</blockquote>
            <cite className="quote-author">{quote.author}</cite>
          </div>
        </div>
      </div>
    </section>
  )
}
