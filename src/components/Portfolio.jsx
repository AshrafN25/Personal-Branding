import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { FiExternalLink, FiGithub, FiFolder, FiCode, FiAward, FiLayers, FiImage, FiArrowLeft } from 'react-icons/fi'
import './Portfolio.css'

/* ── DATA ── */
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
    demo: 'https://kotasemarangku.infinityfreeapp.com/index.html',
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

const designs = [
  {
    id: 1,
    title: 'Open Jasa Desain Grafis - ARTIVO',
    desc: 'Desain promosi jasa desain grafis profesional dengan harga terjangkau mulai dari Rp. 20.000. Melayani pembuatan banner, poster, cover buku, undangan, feed, flyer, brosur, sertifikat, dan lainnya.',
    tags: ['Canva', 'Adobe Illustrator', 'Graphic Design'],
    image: '/design-artivo.jpg',
    driveLink: 'https://drive.google.com/file/d/1RBBEzAGdw6XR2A7Zl0BWmJz88yssmh7s/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Halal Bihalal SMP Negeri 27 Semarang',
    desc: 'Desain ucapan Halal Bihalal untuk keluarga besar SMP Negeri 27 Semarang dengan tema islami yang elegan. Menampilkan ornamen bunga dan lentera dengan quote "Rajut Silaturrahmi, Satukan Hati, Sucikan Diri dalam Indahnya Kebersamaan".',
    tags: ['Canva', 'Islamic Design', 'Greeting Card'],
    image: '/design-halal-bihalal.jpg',
    driveLink: 'https://drive.google.com/file/d/1imoMH4ImpPTOkoOM37XI1m2V4SaeeJ-d/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Infografis Berpikir Kritis',
    desc: 'Desain infografis edukatif tentang pentingnya berpikir kritis dengan menggunakan IPTEK secara bijak. Menampilkan keuntungan berpikir kritis, langkah-langkah, dan ayat suci Al-Quran (QS. An-Nahl: 43) sebagai pedoman.',
    tags: ['Canva', 'Infographic', 'Education'],
    image: '/design-berpikir-kritis.jpg',
    driveLink: 'https://drive.google.com/file/d/14pm-H6Lrp5fvsuelk7McKg0Vo51rSAgK/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Ucapan Idul Fitri 1447H',
    desc: 'Desain kartu ucapan Selamat Hari Raya Idul Fitri 1447H dengan tema islami yang elegan. Menampilkan ilustrasi masjid dengan ornamen lentera dan quote "Minal Aidin Wal Faizin Mohon Maaf Lahir dan Batin".',
    tags: ['Canva', 'Islamic Design', 'Greeting Card'],
    image: '/design-idul-fitri.jpg',
    driveLink: 'https://drive.google.com/file/d/1-pqOzJPHYF13c2Obp7YJAteM7Zef3siV/view?usp=sharing',
  },
  {
    id: 5,
    title: 'Pesantren Ramadhan & Nuzulul Quran',
    desc: 'Desain banner kegiatan Pesantren Ramadhan dan Nuzulul Quran SMP Negeri 27 Semarang dengan tema islami hijau gold yang mewah. Menampilkan quote "Quran sebagai Pedoman dan Sumber Inspirasi Sukses dalam Kehidupan".',
    tags: ['Canva', 'Islamic Design', 'Banner'],
    image: '/design-pesantren.jpg',
    driveLink: 'https://drive.google.com/file/d/1GuOQTWJU5ulsTbYRAiq38ZY0lbqdG81h/view?usp=sharing',
  },
  {
    id: 6,
    title: 'Mind Map Proklamasi Kemerdekaan',
    desc: 'Desain mind map edukatif tentang peristiwa Proklamasi Kemerdekaan Indonesia dengan tema vintage. Menampilkan latar belakang nasionalisme, pendudukan Jepang, peristiwa Rengasdengklok, hingga dampak proklamasi.',
    tags: ['Canva', 'Education', 'Mind Map'],
    image: '/design-mindmap.jpg',
    driveLink: 'https://drive.google.com/file/d/11fa9tYj5B4WxARbX8CiBgVMisCd5Gu7h/view?usp=sharing',
  },
  {
    id: 7,
    title: 'Infografis Demokrasi Indonesia',
    desc: 'Desain infografis edukatif tentang "Kekuasaan Ada di Tangan Rakyat" berdasarkan UUD NRI 1945. Menampilkan konsep demokrasi dan suara rakyat dengan ilustrasi Garuda Pancasila yang patriotik.',
    tags: ['Canva', 'Infographic', 'Education'],
    image: '/design-demokrasi.jpg',
    driveLink: 'https://drive.google.com/file/d/1bAIWQSmyzjgHEpSLZOCcgd_vAcT8xqmM/view?usp=sharing',
  },
  {
    id: 8,
    title: 'Open Recruitment Team Digital',
    desc: 'Desain poster rekrutmen anggota Team Digital dengan tema vintage. Menampilkan persyaratan dan benefit bergabung untuk kelas 10 dan 11 dengan kontak person yang jelas.',
    tags: ['Canva', 'Poster', 'Recruitment'],
    image: '/design-recruitment.jpg',
    driveLink: 'https://drive.google.com/file/d/186lUpyOzAhW7jkoYmSAT0phNSytwTQkr/view?usp=sharing',
  },
]

const certificates = [
  {
    id: 1,
    title: 'Belajar Membuat Aplikasi Web dengan React',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '30 Maret 2026',
    code: '07Z674KR2PQR',
    image: '/certificates/Belajar Membuat Aplikasi Web dengan React.jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/07Z674KR2PQR',
  },
  {
    id: 2,
    title: 'Belajar Back-End Pemula dengan JavaScript',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '29 Maret 2026',
    code: '4EXG17E5DPRL',
    image: '/certificates/Belajar Back-End Pemula dengan JavaScript.jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/4EXG17E5DPRL',
  },
  {
    id: 3,
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '21 Februari 2026',
    code: 'NVP7N4YKOZR0',
    image: '/certificates/Belajar Dasar Pemrograman JavaScript.jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/NVP7N4YKOZR0',
  },
  {
    id: 4,
    title: 'Belajar Dasar Cloud dan Gen AI di AWS',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '18 Januari 2026',
    code: 'KEXL2KJL0ZG2',
    image: '/certificates/Belajar Dasar Cloud dan Gen Al di AWS.jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/KEXL2KJL0ZG2',
  },
  {
    id: 5,
    title: 'Pengenalan ke Logika Pemrograman (Programming Logic 101)',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '17 Januari 2026',
    code: 'EYX4IK3E6SPDL',
    image: '/certificates/Pengenalan ke Logika Pemrograman (Programming Logic 101).jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/EYX4IK3E6SPDL',
  },
  {
    id: 6,
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '16 Januari 2026',
    code: 'MRZM6MJ4RPYQ',
    image: '/certificates/Memulai Dasar Pemrograman untuk Menjadi Pengembang Software.jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/MRZM6MJ4RPYQ',
  },
  {
    id: 7,
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '31 Januari 2026',
    code: '1OP8JQ3LLPQK',
    image: '/certificates/Belajar Dasar Pemrograman Web.jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/1OP8JQ3LLPQK',
  },
  {
    id: 8,
    title: 'Belajar Membuat Front-End Web untuk Pemula',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '07 Maret 2026',
    code: 'QLZ99VDK7Z5D',
    image: '/certificates/Belajar Membuat Front-End Web untuk Pemula.jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/QLZ99VDK7Z5D',
  },
  {
    id: 9,
    title: 'Introduction to Financial Literacy',
    issuer: 'Dicoding Indonesia',
    year: '2026',
    date: '01 Januari 2026',
    code: 'JMZVO4Q2RXN9',
    image: '/certificates/Introduction to Financial Literacy.jpg',
    verifyUrl: 'https://www.dicoding.com/certificates/JMZVO4Q2RXN9',
  },
  {
    id: 10,
    title: 'IT Essentials',
    issuer: 'Cisco Networking Academy',
    year: '2025',
    date: '06 Januari 2025',
    code: null,
    image: '/certificates/IT Essentials.jpg',
    verifyUrl: null,
  },
  {
    id: 11,
    title: 'Cryptography Basics',
    issuer: 'TryHackMe',
    year: '2026',
    date: '22 Januari 2026',
    code: null,
    image: '/certificates/TryHackMe - Cryptography Basics.png',
    verifyUrl: null,
  },
  {
    id: 12,
    title: 'Breaking Crypto the Simple Way',
    issuer: 'TryHackMe',
    year: '2026',
    date: '22 Januari 2026',
    code: null,
    image: '/certificates/TryHackMe - Breaking Crypto the Simple Way.png',
    verifyUrl: null,
  },
  {
    id: 13,
    title: 'Encryption - Crypto 101',
    issuer: 'TryHackMe',
    year: '2026',
    date: '22 Januari 2026',
    code: null,
    image: '/certificates/TryHackMe - Encryption - Crypto 101.png',
    verifyUrl: null,
  },
  {
    id: 14,
    title: 'Cryptography for Dummies',
    issuer: 'TryHackMe',
    year: '2026',
    date: '22 Januari 2026',
    code: null,
    image: '/certificates/TryHackMe - Cryptography for Dummies.png',
    verifyUrl: null,
  },
  {
    id: 15,
    title: 'Menciptakan Dampak dengan AI',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    date: '10 September 2025',
    code: null,
    image: '/certificates/Completion Certificate _ SkillsBuild_Menciptakan Dampak dengan AI-1.jpg',
    verifyUrl: null,
  },
  {
    id: 16,
    title: 'Membuat Pitch Elevator Menggunakan AI Generatif',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    date: '09 September 2025',
    code: null,
    image: '/certificates/Completion Certificate _ SkillsBuild_Membuat Pitch Elevator Menggunakan AI Generatif-1.jpg',
    verifyUrl: null,
  },
  {
    id: 17,
    title: 'Penerapan AI',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    date: '09 September 2025',
    code: null,
    image: '/certificates/Completion Certificate _ SkillsBuild_Penerapan AI-1.jpg',
    verifyUrl: null,
  },
  {
    id: 18,
    title: 'Bagaimana teknologi digunakan dalam sebuah konser musik?',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    date: '09 September 2025',
    code: null,
    image: '/certificates/Completion Certificate _ SkillsBuild_Bagaimana teknologi digunakan dalam sebuah konser musik-1.jpg',
    verifyUrl: null,
  },
  {
    id: 19,
    title: 'Menuju Konservasi Berkelanjutan',
    issuer: 'IBM SkillsBuild',
    year: '2025',
    date: '09 September 2025',
    code: null,
    image: '/certificates/Completion Certificate _ SkillsBuild_Menuju Konservasi Berkelanjutan-1.jpg',
    verifyUrl: null,
  },
  {
    id: 20,
    title: 'Hello World: Transformers One',
    issuer: 'Code.org',
    year: '2025',
    date: '18 Agustus 2025',
    code: null,
    image: '/certificates/Hello World Transformers One.jpg',
    verifyUrl: null,
  },
  {
    id: 21,
    title: 'Minecraft Designer',
    issuer: 'Code.org',
    year: '2025',
    date: '17 Agustus 2025',
    code: null,
    image: '/certificates/Minecraft Designer.jpg',
    verifyUrl: null,
  },
  {
    id: 22,
    title: 'Minecraft Adventurer',
    issuer: 'Code.org',
    year: '2025',
    date: '17 Agustus 2025',
    code: null,
    image: '/certificates/Minecraft Adventurer.jpg',
    verifyUrl: null,
  },
  {
    id: 23,
    title: 'Minecraft Hero\'s Journey',
    issuer: 'Code.org',
    year: '2025',
    date: '10 Agustus 2025',
    code: null,
    image: '/certificates/Minecraft Hero\'s Journey.jpg',
    verifyUrl: null,
  },
  {
    id: 24,
    title: 'Music Lab: Jam Session',
    issuer: 'Code.org',
    year: '2025',
    date: '07 Agustus 2025',
    code: null,
    image: '/certificates/Music Lab Jam Session.jpg',
    verifyUrl: null,
  },
]

const techStack = [
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Vite', icon: 'https://vitejs.dev/logo.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'Canva', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/canva/canva-original.svg' },
  { name: 'Cisco', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg' },
  { name: 'Debian', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg' },
]

const tabs = [
  { id: 'projects', label: 'Projects', icon: <FiCode size={16} /> },
  { id: 'design', label: 'Design', icon: <FiImage size={16} /> },
  { id: 'certificates', label: 'Certificates', icon: <FiAward size={16} /> },
  { id: 'techstack', label: 'Tech Stack', icon: <FiLayers size={16} /> },
]

/* ── COMPONENT ── */
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState('projects')
  const [showAllDesigns, setShowAllDesigns] = useState(false)
  const [showAllCertificates, setShowAllCertificates] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [currentCertIndex, setCurrentCertIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Navigate to previous certificate
  const handlePrevCert = (e) => {
    e.stopPropagation()
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      const visibleCerts = showAllCertificates ? certificates.length : 6
      const newIndex = currentCertIndex === 0 ? visibleCerts - 1 : currentCertIndex - 1
      setCurrentCertIndex(newIndex)
      setSelectedCertificate(certificates[newIndex])
      setIsTransitioning(false)
    }, 150)
  }

  // Navigate to next certificate
  const handleNextCert = (e) => {
    e.stopPropagation()
    if (isTransitioning) return
    
    setIsTransitioning(true)
    setTimeout(() => {
      const visibleCerts = showAllCertificates ? certificates.length : 6
      const newIndex = currentCertIndex === visibleCerts - 1 ? 0 : currentCertIndex + 1
      setCurrentCertIndex(newIndex)
      setSelectedCertificate(certificates[newIndex])
      setIsTransitioning(false)
    }, 150)
  }

  // Keyboard navigation
  useEffect(() => {
    if (!selectedCertificate) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCertificate(null)
      } else if (e.key === 'ArrowLeft') {
        handlePrevCert(e)
      } else if (e.key === 'ArrowRight') {
        handleNextCert(e)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedCertificate, currentCertIndex, isTransitioning])

  // Open certificate modal
  const openCertificate = (cert, index) => {
    setSelectedCertificate(cert)
    setCurrentCertIndex(index)
    setIsTransitioning(false)
  }

  return (
    <section id="portfolio" className="section portfolio-section section-dark">
      <div className="container">
        <div className="section-header">
          <span className="badge">
            <FiFolder size={12} />
            Portofolio
          </span>
          <h2 className="section-title" style={{ marginTop: 12 }}>
            Karya & <span>Proyek</span>
          </h2>
          <p className="section-subtitle">
            Beberapa karya yang telah saya buat selama belajar
          </p>
          <div className="glow-divider" />
        </div>

        {/* Tabs */}
        <div className="portfolio-tabs">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`portfolio-tab ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Projects ── */}
        {activeTab === 'projects' && (
          <div className="project-grid-new">
            {projects.map(p => (
              <div key={p.id} className="project-card-new card">
                <div className="project-image-wrap">
                  {p.image ? (
                    <img src={p.image} alt={p.title} className="project-image" />
                  ) : (
                    <div className="project-image-placeholder">
                      <FiCode size={48} style={{ opacity: 0.3 }} />
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title-new">{p.title}</h3>
                  <p className="project-desc-new">{p.desc}</p>
                  <div className="project-tags-new">
                    {p.tags.slice(0, 3).map((t, i) => <span key={i} className="project-tag-new">{t}</span>)}
                  </div>
                  <div className="project-actions">
                    {p.demo !== '#' && (
                      <a href={p.demo} target="_blank" rel="noreferrer" className="btn-project-primary">
                        <FiExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    <Link to={`/project/${p.id}`} className="btn-project-secondary">
                      Details →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── Design ── */}
        {activeTab === 'design' && (
          <>
            <div className="project-grid-new">
              {designs.slice(0, showAllDesigns ? designs.length : 4).map(d => (
                <div key={d.id} className="project-card-new card">
                  <div className="project-image-wrap">
                    {d.image ? (
                      <img src={d.image} alt={d.title} className="project-image" />
                    ) : (
                      <div className="project-image-placeholder">
                        <FiImage size={48} style={{ opacity: 0.3 }} />
                      </div>
                    )}
                  </div>
                  <div className="project-content">
                    <h3 className="project-title-new">{d.title}</h3>
                    <p className="project-desc-new">{d.desc}</p>
                    <div className="project-tags-new">
                      {d.tags.map((t, i) => <span key={i} className="project-tag-new">{t}</span>)}
                    </div>
                    <div className="project-actions">
                      {d.driveLink && (
                        <a href={d.driveLink} target="_blank" rel="noreferrer" className="btn-project-primary">
                          <FiExternalLink size={16} />
                          Lihat Detail
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {designs.length > 4 && (
              <div className="see-more-container">
                <button 
                  className="btn-see-more"
                  onClick={() => setShowAllDesigns(!showAllDesigns)}
                >
                  {showAllDesigns ? 'Show Less' : `See More (${designs.length - 4} more)`}
                  <FiArrowLeft size={16} style={{ transform: showAllDesigns ? 'rotate(90deg)' : 'rotate(-90deg)', transition: 'transform 0.3s ease' }} />
                </button>
              </div>
            )}
          </>
        )}

        {/* ── Certificates ── */}
        {activeTab === 'certificates' && (
          <>
            <div className="cert-grid-image">
              {certificates.slice(0, showAllCertificates ? certificates.length : 6).map((c, index) => (
                <div 
                  key={c.id} 
                  className="cert-card-image card"
                  onClick={() => openCertificate(c, index)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="cert-image-wrap">
                    {c.image ? (
                      <img src={c.image} alt={c.title} className="cert-image" />
                    ) : (
                      <div className="cert-image-placeholder">
                        <FiAward size={48} style={{ opacity: 0.3 }} />
                      </div>
                    )}
                  </div>
                  <div className="cert-info">
                    <h3 className="cert-info-title">{c.title}</h3>
                    <p className="cert-info-issuer">{c.issuer}</p>
                    <span className="cert-date-badge">{c.date || c.year}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {certificates.length > 6 && (
              <div className="see-more-container">
                <button 
                  className="btn-see-more"
                  onClick={() => setShowAllCertificates(!showAllCertificates)}
                >
                  {showAllCertificates ? 'Show Less' : `See More (${certificates.length - 6} more)`}
                  <FiArrowLeft size={16} style={{ transform: showAllCertificates ? 'rotate(90deg)' : 'rotate(-90deg)', transition: 'transform 0.3s ease' }} />
                </button>
              </div>
            )}
          </>
        )}

        {/* ── Tech Stack ── */}
        {activeTab === 'techstack' && (
          <div className="tech-grid">
            {techStack.map((t, i) => (
              <div key={i} className="tech-card card">
                <img src={t.icon} alt={t.name} className="tech-logo" onError={e => { e.target.style.display = 'none' }} />
                <span className="tech-name">{t.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="portfolio-cta">
          <p>Ingin melihat lebih banyak karya saya?</p>
          <a href="https://github.com/AshrafN25" target="_blank" rel="noreferrer" className="btn-outline">
            <FiGithub size={16} />
            Kunjungi GitHub
          </a>
        </div>
      </div>

      {/* Certificate Modal Popup - Using Portal to render at root level */}
      {selectedCertificate && createPortal(
        <div 
          className="cert-modal-overlay"
          onClick={() => setSelectedCertificate(null)}
        >
          {/* Previous Button */}
          <button 
            className="cert-modal-nav cert-modal-prev"
            onClick={handlePrevCert}
            aria-label="Previous certificate"
          >
            <FiArrowLeft size={24} />
          </button>

          <div 
            className="cert-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="cert-modal-close"
              onClick={() => setSelectedCertificate(null)}
              aria-label="Close"
            >
              ✕
            </button>
            
            <div className={`cert-modal-image-container ${isTransitioning ? 'transitioning' : ''}`}>
              {selectedCertificate.image ? (
                <img 
                  src={selectedCertificate.image} 
                  alt={selectedCertificate.title} 
                  className="cert-modal-image" 
                />
              ) : (
                <div className="cert-modal-placeholder">
                  <FiAward size={64} style={{ opacity: 0.3 }} />
                  <p>No image available</p>
                </div>
              )}
            </div>
            
            <div className={`cert-modal-info ${isTransitioning ? 'transitioning' : ''}`}>
              <h3 className="cert-modal-title">{selectedCertificate.title}</h3>
              <div className="cert-modal-meta">
                <p className="cert-modal-issuer">{selectedCertificate.issuer}</p>
                <span className="cert-modal-date">{selectedCertificate.date || selectedCertificate.year}</span>
              </div>
              {selectedCertificate.verifyUrl && (
                <a 
                  href={selectedCertificate.verifyUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="cert-modal-verify"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FiExternalLink size={14} />
                  Verify Certificate
                </a>
              )}
              <p className="cert-modal-counter">
                {currentCertIndex + 1}/{showAllCertificates ? certificates.length : 6}
              </p>
            </div>
          </div>

          {/* Next Button */}
          <button 
            className="cert-modal-nav cert-modal-next"
            onClick={handleNextCert}
            aria-label="Next certificate"
          >
            <FiArrowLeft size={24} style={{ transform: 'rotate(180deg)' }} />
          </button>
        </div>,
        document.body
      )}
    </section>
  )
}
