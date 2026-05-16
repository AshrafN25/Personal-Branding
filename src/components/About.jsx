import { FiUser, FiBook, FiHeart, FiTarget, FiStar, FiExternalLink, FiZap, FiBookOpen, FiHome, FiAward, FiFilm, FiMonitor, FiMusic, FiGlobe, FiEdit, FiCpu, FiTrendingUp } from 'react-icons/fi'
import './About.css'

const education = [
  { school: 'TK PGRI 55', period: 'Semarang', icon: <FiBookOpen size={18} />, logo: '/logo-tk-pgri55.png' },
  { school: 'SD Ngesrep 03', period: 'Semarang', icon: <FiBook size={18} />, logo: '/logo-sd-ngesrep.png' },
  { school: 'SMPN 27 Semarang', period: 'Semarang', icon: <FiHome size={18} />, logo: '/logo-smpn27.png' },
  { school: 'SMKN 7 Semarang', period: 'Semarang (Sekarang)', icon: <FiAward size={18} />, logo: '/logo-smkn7.png', current: true },
]

const hobbies = [
  { label: 'Nonton Film', icon: <FiFilm size={18} /> },
  { label: 'Coding', icon: <FiMonitor size={18} /> },
  { label: 'Mendengarkan Musik', icon: <FiMusic size={18} /> },
]

const interests = [
  { label: 'Web Development', icon: <FiGlobe size={18} /> },
  { label: 'Design', icon: <FiEdit size={18} /> },
  { label: 'Teknologi AI', icon: <FiCpu size={18} /> },
]

const softSkills = ['Kerja Keras', 'Mandiri', 'Tanggung Jawab', 'Cepat Belajar', 'Kreatif', 'Komunikatif']
const hardSkills = ['HTML & CSS', 'JavaScript', 'React.js', 'Cisco Packet Tracer', 'Canva / Figma', 'Git & GitHub']

export default function About() {
  return (
    <section id="about" className="section about-section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="badge">
            <FiUser size={12} />
            Tentang Saya
          </span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Kenali <span>Lebih Dekat</span>
          </h2>
          <div className="glow-divider" />
        </div>

        <div className="about-grid">
          {/* Bio */}
          <div className="about-bio card">
            <div className="about-bio-header">
              <div className="about-avatar">
                <img
                  src="/ashraf2.jpg"
                  alt="Ashraf Nauval Rasya"
                  className="about-avatar-img"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <span className="about-avatar-fallback">AN</span>
              </div>
              <div>
                <h3 className="about-name">Ashraf Nauval Rasya</h3>
                <p className="about-role">Calon Web Developer</p>
              </div>
            </div>

            <div className="about-text-block">
              <h4 className="about-block-title">
                <FiUser size={16} /> Tentang Saya
              </h4>
              <p>
                Saya adalah siswa SMKN 7 Semarang yang memiliki minat di bidang teknologi,
                khususnya pengembangan web dan aplikasi mobile. Saya senang mempelajari hal
                baru dan terus mengembangkan kemampuan dalam coding dan desain. Saya bercita-cita
                menjadi developer profesional yang mampu menciptakan solusi digital yang bermanfaat.
              </p>
            </div>

            <div className="about-text-block">
              <h4 className="about-block-title">
                <FiHeart size={16} /> Riwayat Keluarga
              </h4>
              <p>
                Saya berasal dari keluarga sederhana yang tinggal di Semarang, yang mengajarkan
                nilai kemandirian, kerja keras, dan tanggung jawab. Saya merupakan anak pertama
                dari dua bersaudara. Dukungan dari keluarga menjadi motivasi bagi saya untuk
                terus belajar dan berkembang demi meraih masa depan yang lebih baik.
              </p>
            </div>

            <div className="about-text-block">
              <h4 className="about-block-title">
                <FiTarget size={16} /> Cita-cita
              </h4>
              <p>
                Menjadi <strong style={{ color: 'var(--accent-gold)' }}>Web Developer Profesional</strong> yang
                mampu membangun produk digital berkualitas tinggi dan memberikan dampak positif bagi masyarakat.
              </p>
            </div>

            {/* River of Life Card */}
            <div className="river-of-life-card">
              <div className="rol-icon">🌊</div>
              <div className="rol-content">
                <h4 className="rol-title">River of Life</h4>
                <p className="rol-desc">
                  Sebuah gambaran perjalanan hidup saya — berisi cerita, pelajaran, dan impian
                  yang terus membentuk diri saya hingga sekarang.
                </p>
                <a
                  href="https://drive.google.com/file/d/13jxLC6eUp6PG7r-UrOO6T-mYPPuT05G9/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  className="rol-link"
                >
                  Lihat River of Life
                  <FiExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="about-right">
            {/* Education */}
            <div className="card about-edu">
              <h4 className="about-block-title">
                <FiBook size={16} /> Riwayat Pendidikan
              </h4>
              <div className="edu-timeline">
                {education.map((edu, i) => (
                  <div key={i} className={`edu-item ${edu.current ? 'current' : ''}`}>
                    <div className="edu-icon">
                      {edu.logo ? (
                        <img src={edu.logo} alt={edu.school} className="edu-logo" />
                      ) : (
                        edu.icon
                      )}
                    </div>
                    <div className="edu-info">
                      <span className="edu-school">{edu.school}</span>
                      <span className="edu-period">{edu.period}</span>
                    </div>
                    {edu.current && <span className="edu-badge">Sekarang</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Hobbies */}
            <div className="card about-hobbies">
              <h4 className="about-block-title">
                <FiHeart size={16} /> Hobi
              </h4>
              <div className="hobbies-grid">
                {hobbies.map((h, i) => (
                  <div key={i} className="hobby-chip">
                    <span>{h.icon}</span>
                    {h.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card about-interests">
              <h4 className="about-block-title">
                <FiZap size={16} /> Minat
              </h4>
              <div className="interests-grid">
                {interests.map((item, i) => (
                  <div key={i} className="interest-chip">
                    <span>{item.icon}</span>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="card about-strengths">
              <h4 className="about-block-title">
                <FiStar size={16} /> Kelebihan Diri
              </h4>
              <div className="strengths-cols">
                <div>
                  <p className="strengths-label">Soft Skills</p>
                  <div className="skills-tags">
                    {softSkills.map((s, i) => (
                      <span key={i} className="skill-tag soft">{s}</span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="strengths-label">Hard Skills</p>
                  <div className="skills-tags">
                    {hardSkills.map((s, i) => (
                      <span key={i} className="skill-tag hard">{s}</span>
                    ))}
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
