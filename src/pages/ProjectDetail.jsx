import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft, FiExternalLink, FiGithub, FiCode, FiLayers } from 'react-icons/fi'
import './ProjectDetail.css'

const projects = [
  {
    id: 1,
    title: 'KASENTRA POS - Point of Sale System',
    desc: 'Sistem Point of Sale (POS) modern untuk toko retail, cafe, dan restoran.',
    fullDesc: 'KASENTRA POS adalah sistem Point of Sale (POS) modern yang dibangun dengan MERN Stack untuk membantu toko retail, cafe, dan restoran mengelola penjualan, stok, dan keuangan dengan lebih efisien. Sistem ini dilengkapi dengan 3 role berbeda: Owner, Kasir, dan Operator.',
    features: [
      'Dashboard statistik penjualan real-time',
      'Manajemen produk dengan upload gambar ke Cloudinary',
      'Sistem kasir dengan keranjang belanja',
      'Cetak struk otomatis',
      'Manajemen user multi-role',
      'Laporan keuangan lengkap',
    ],
    techCount: 5,
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Cloudinary'],
    image: '/kasentra-dashboard.png',
    github: 'https://github.com/adiyogabaskoro/KASENTRA',
    demo: 'https://kasentra-frontend.vercel.app',
  },
  {
    id: 2,
    title: 'Website Kota Semarang',
    desc: 'Website informasi pariwisata dan budaya Kota Semarang.',
    fullDesc: 'Website informasi pariwisata dan budaya Kota Semarang yang menampilkan sejarah, destinasi wisata, kuliner khas, dan budaya lokal dengan desain klasik yang mencerminkan warisan kolonial.',
    features: [
      'Informasi destinasi wisata lengkap',
      'Katalog kuliner khas Semarang',
      'Sejarah dan budaya lokal',
      'Desain responsif',
      'Navigasi user-friendly',
    ],
    techCount: 3,
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/kotasemarang.png',
    github: 'https://github.com/AshrafN25/Kota-Semarang-Web',
    demo: 'https://kotasemarangku.wuaze.com/?i=1',
  },
  {
    id: 3,
    title: 'My Roti - Shopping Cart',
    desc: 'Website e-commerce sederhana untuk produk roti.',
    fullDesc: 'Website e-commerce sederhana untuk produk roti dengan fitur shopping cart. Menampilkan katalog produk roti, tambah ke keranjang, dan checkout dengan perhitungan total otomatis.',
    features: [
      'Katalog produk roti dengan gambar',
      'Fitur tambah ke keranjang',
      'Perhitungan total otomatis',
      'Checkout sederhana',
      'Desain modern dan clean',
    ],
    techCount: 3,
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/my-roti.png.png',
    github: 'https://github.com/AshrafN25/Shoopping-Cart-_-My-Roti',
    demo: '#',
  },
  {
    id: 4,
    title: 'Website Kuliner Nusantara',
    desc: 'Website sederhana tentang kuliner tradisional Indonesia.',
    fullDesc: 'Website sederhana tentang kuliner tradisional Indonesia. Project pertama saya dalam belajar HTML dan CSS, menampilkan berbagai makanan khas Nusantara.',
    features: [
      'Katalog kuliner tradisional',
      'Informasi makanan khas daerah',
      'Desain sederhana dan clean',
      'Navigasi mudah',
    ],
    techCount: 2,
    tags: ['HTML', 'CSS'],
    image: '/kuliner-nusantara.png',
    github: 'https://github.com/AshrafN25/Web---Makanan-Kuliner-Nusantara',
    demo: '#',
  },
]

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.id === parseInt(id))

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="project-detail-container">
          <div className="project-not-found">
            <h1>Project Not Found</h1>
            <button onClick={() => navigate('/')} className="btn-back">
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
      <div className="project-detail-header">
        <div className="project-detail-container">
          <button onClick={() => navigate('/#portfolio')} className="btn-back">
            <FiArrowLeft size={20} />
            Back to Portfolio
          </button>
          <span className="breadcrumb">Projects › {project.title}</span>
        </div>
      </div>

      <div className="project-detail-container">
        <div className="project-detail-content">
          <div className="project-detail-left">
            <h1 className="project-detail-title">{project.title}</h1>
            <div className="project-detail-underline"></div>
            
            <p className="project-detail-desc">{project.fullDesc}</p>

            <div className="project-detail-stats">
              <div className="project-detail-stat">
                <FiCode size={20} />
                <div>
                  <span className="stat-value">{project.techCount}</span>
                  <span className="stat-label">Total Teknologi</span>
                </div>
              </div>
              <div className="project-detail-stat">
                <FiLayers size={20} />
                <div>
                  <span className="stat-value">{project.features.length}</span>
                  <span className="stat-label">Fitur Utama</span>
                </div>
              </div>
            </div>

            <div className="project-detail-buttons">
              {project.demo !== '#' && (
                <a href={project.demo} target="_blank" rel="noreferrer" className="btn-primary-detail">
                  <FiExternalLink size={18} />
                  Live Demo
                </a>
              )}
              <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary-detail">
                <FiGithub size={18} />
                GitHub
              </a>
            </div>

            <div className="project-detail-section">
              <h3 className="section-title-detail">
                <FiCode size={18} />
                Technologies Used
              </h3>
              <div className="tech-tags-detail">
                {project.tags.map((t, i) => (
                  <span key={i} className="tech-tag-detail">{t}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="project-detail-right">
            <div className="project-image-container-detail">
              {project.image ? (
                <img src={project.image} alt={project.title} className="project-image-detail" />
              ) : (
                <div className="project-image-placeholder-detail">
                  <FiCode size={64} style={{ opacity: 0.3 }} />
                </div>
              )}
            </div>

            <div className="project-detail-section">
              <h3 className="section-title-detail">
                <span className="section-icon">⭐</span>
                Key Features
              </h3>
              <ul className="features-list-detail">
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
