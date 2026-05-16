import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink, FiGithub, FiCode, FiLayers } from 'react-icons/fi'
import { projects } from '../data/projects'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Project Not Found</h1>
            <button onClick={() => navigate('/')} className="btn-back-home">
              <FiArrowLeft size={20} />
              Back to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="project-detail-page">
      <div className="detail-container">
        <div className="detail-header">
          <button className="btn-back" onClick={() => navigate('/')}>
            <FiArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </button>
          <span className="detail-breadcrumb">Projects › {project.title}</span>
        </div>

        <div className="detail-content">
          <div className="detail-left">
            <h1 className="detail-title">{project.title}</h1>
            <div className="detail-underline"></div>
            
            <p className="detail-desc">{project.fullDesc}</p>

            <div className="detail-stats">
              <div className="detail-stat">
                <FiCode size={20} />
                <div>
                  <span className="stat-value">{project.techCount}</span>
                  <span className="stat-label">Total Teknologi</span>
                </div>
              </div>
              <div className="detail-stat">
                <FiLayers size={20} />
                <div>
                  <span className="stat-value">{project.features.length}</span>
                  <span className="stat-label">Fitur Utama</span>
                </div>
              </div>
            </div>

            <div className="detail-buttons">
              {project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="detail-btn-primary">
                  <FiExternalLink size={18} />
                  Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer" className="detail-btn-secondary">
                <FiGithub size={18} />
                GitHub
              </a>
            </div>

            <div className="detail-section">
              <h3 className="detail-section-title">
                <FiCode size={18} />
                Technologies Used
              </h3>
              <div className="detail-tech-tags">
                {project.tags.map((t, i) => (
                  <span key={i} className="detail-tech-tag">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="detail-right">
            <div className="detail-image-container">
              {project.image ? (
                <img src={project.image} alt={project.title} className="detail-image" />
              ) : (
                <div className="detail-image-placeholder">
                  <FiCode size={64} style={{ opacity: 0.3 }} />
                </div>
              )}
            </div>

            <div className="detail-section">
              <h3 className="detail-section-title">
                <span className="section-icon">⭐</span>
                Key Features
              </h3>
              <ul className="detail-features">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
