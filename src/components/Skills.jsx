import { useState } from 'react'
import { FiCode, FiTool, FiLayers, FiUsers, FiTrendingUp, FiCheckSquare, FiBook, FiMessageCircle, FiTarget, FiSettings, FiAward, FiCalendar, FiEdit3, FiTerminal, FiServer, FiMonitor } from 'react-icons/fi'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaNetworkWired, FaFeatherAlt, FaPalette, FaFigma, FaLinux } from 'react-icons/fa'
import './Skills.css'

const skillCategories = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: <FiCode size={18} />,
    color: '#F1B800',
    skills: [
      { name: 'HTML5', level: 85, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg" alt="HTML5" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
      { name: 'CSS3', level: 80, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg" alt="CSS3" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
      { name: 'JavaScript', level: 60, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg" alt="JavaScript" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
      { name: 'React.js', level: 45, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Design',
    icon: <FiTool size={18} />,
    color: '#8B5CF6',
    skills: [
      { name: 'Canva', level: 80, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg" alt="Canva" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
      { name: 'Figma', level: 50, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
      { name: 'Git & GitHub', level: 55, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg" alt="Git" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
      { name: 'VS Code', level: 85, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-plain.svg" alt="VS Code" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
    ]
  },
  {
    id: 'networking',
    label: 'Networking',
    icon: <FiLayers size={18} />,
    color: '#3B82F6',
    skills: [
      { name: 'Cisco Packet Tracer', level: 40, icon: <FiServer size={16} /> },
      { name: 'Dasar Jaringan', level: 70, icon: <FaNetworkWired size={16} /> },
      { name: 'Debian', level: 30, icon: <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-plain.svg" alt="Debian" style={{ width: 16, height: 16, filter: 'brightness(0) invert(1)' }} /> },
    ]
  },
  {
    id: 'softskills',
    label: 'Soft Skills',
    icon: <FiUsers size={18} />,
    color: '#10B981',
    skills: [
      { name: 'Kerja Keras', level: 80, icon: <FiTrendingUp size={16} /> },
      { name: 'Mandiri', level: 85, icon: <FiTarget size={16} /> },
      { name: 'Tanggung Jawab', level: 80, icon: <FiCheckSquare size={16} /> },
      { name: 'Cepat Belajar', level: 72, icon: <FiBook size={16} /> },
      { name: 'Kreatif', level: 78, icon: <FaFeatherAlt size={16} /> },
      { name: 'Komunikatif', level: 70, icon: <FiMessageCircle size={16} /> },
    ]
  },
]

const techStack = [
  { name: 'HTML', color: '#E34F26', bg: 'rgba(227, 79, 38, 0.1)' },
  { name: 'CSS', color: '#1572B6', bg: 'rgba(21, 114, 182, 0.1)' },
  { name: 'JavaScript', color: '#F7DF1E', bg: 'rgba(247, 223, 30, 0.1)' },
  { name: 'React', color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.1)' },
  { name: 'Git', color: '#F05032', bg: 'rgba(240, 80, 50, 0.1)' },
  { name: 'Canva', color: '#00C4CC', bg: 'rgba(0, 196, 204, 0.1)' },
  { name: 'Figma', color: '#A259FF', bg: 'rgba(162, 89, 255, 0.1)' },
  { name: 'Cisco', color: '#1BA0D7', bg: 'rgba(27, 160, 215, 0.1)' },
  { name: 'VS Code', color: '#007ACC', bg: 'rgba(0, 122, 204, 0.1)' },
]

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend')
  const active = skillCategories.find(c => c.id === activeTab)

  return (
    <section id="skills" className="section skills-section section-glow">
      <div className="container">
        <div className="section-header">
          <span className="badge">
            <FiCode size={12} />
            Keahlian
          </span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Skills & <span>Teknologi</span>
          </h2>
          <p className="section-subtitle">
            Teknologi dan tools yang saya pelajari dan gunakan
          </p>
          <div className="glow-divider" />
        </div>

        {/* Tech Stack Marquee */}
        <div className="tech-marquee-wrap">
          <div className="tech-marquee">
            {[...techStack, ...techStack].map((t, i) => (
              <div key={i} className="tech-chip" style={{ background: t.bg, color: t.color, borderColor: t.color + '33' }}>
                {t.name}
              </div>
            ))}
          </div>
        </div>

        {/* Skill Bars */}
        <div className="skills-tabs-wrap">
          <div className="skills-tabs">
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                className={`skills-tab ${activeTab === cat.id ? 'active' : ''}`}
                onClick={() => setActiveTab(cat.id)}
                style={activeTab === cat.id ? { borderColor: cat.color, color: cat.color, background: cat.color + '15' } : {}}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          <div className="skills-bars card">
            {active.skills.map((skill, i) => (
              <div key={i} className="skill-bar-item">
                <div className="skill-bar-header">
                  <span className="skill-bar-name">
                    <span>{skill.icon}</span>
                    {skill.name}
                  </span>
                  <span className="skill-bar-pct" style={{ color: active.color }}>
                    {skill.level}%
                  </span>
                </div>
                <div className="skill-bar-track">
                  <div
                    className="skill-bar-fill"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${active.color}, ${active.color}99)`,
                      boxShadow: `0 0 12px ${active.color}40`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="skills-stats">
          {[
            { value: '4+', label: 'Bahasa Pemrograman', icon: <FiCode size={28} /> },
            { value: '5+', label: 'Tools & Software', icon: <FiSettings size={28} /> },
            { value: '3+', label: 'Proyek Selesai', icon: <FiAward size={28} /> },
            { value: '1+', label: 'Tahun Belajar', icon: <FiCalendar size={28} /> },
          ].map((stat, i) => (
            <div key={i} className="stat-card card">
              <span className="stat-icon">{stat.icon}</span>
              <span className="stat-value gradient-text">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
