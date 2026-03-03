import { useState } from 'react'
import Topbar from '../components/Topbar.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'

const insigniaProjects = [
  {
    id: 1,
    numero: '01',
    nombre: 'Metro de la ciudad de Panamá, línea 2',
    descripcion: 'Diseño de iluminación, fabricación y suministro de accesorios para toda la protección.',
    status: 'Completado',
    heroImg: '/images/insignia/mp-hero.png',
    galeria: [
      '/images/insignia/mp-1.png',
      '/images/insignia/mp-2.png',
      '/images/insignia/mp-3.png',
    ],
  },
  {
    id: 2,
    numero: '02',
    nombre: 'Aeropuerto Internacional de Tocumen, terminal 2',
    descripcion: 'Diseño de iluminación y suministro de accesorios para todo el proyecto.',
    status: 'Completado',
    heroImg: '/images/insignia/ap-hero.png',
    galeria: [
      '/images/insignia/ap-1.png',
      '/images/insignia/ap-2.png',
      '/images/insignia/ap-3.png',
    ],
  },
  {
    id: 3,
    numero: '03',
    nombre: 'Biomuseo Panamá',
    descripcion: 'Diseño de iluminación y suministro de accesorios para todo el proyecto.',
    status: 'Completado',
    heroImg: '/images/insignia/pm-hero.png',
    galeria: [
      '/images/insignia/pm-1.png',
      '/images/insignia/pm-2.png',
      '/images/insignia/pm-3.png',
    ],
  },
]

export default function ProyectosInsignia() {
  const [active, setActive] = useState(insigniaProjects[0])
  const [lightbox, setLightbox] = useState(null)

  const handleSelect = (project) => {
    setActive(project)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <Topbar />
      <Nav />

      {/* HERO */}
      <section className="insignia-hero">
        <div
          className="insignia-hero-bg"
          style={{ backgroundImage: `url(${active.heroImg})` }}
        />
        <div className="insignia-hero-overlay" />
        <div className="insignia-hero-content">
          <h1>{active.nombre}</h1>
          <p className="insignia-categoria">{active.categoria}</p>
          <span className="insignia-status-badge">{active.status}</span>
        </div>
        <div className="insignia-numero">{active.numero}</div>

        {/* Tabs selector */}
        <div className="insignia-hero-selector">
          {insigniaProjects.map((p) => (
            <button
              key={p.id}
              className={`insignia-hero-tab ${active.id === p.id ? 'active' : ''}`}
              onClick={() => handleSelect(p)}
            >
              <span className="insignia-hero-tab-num">{p.numero}</span>
              <span className="insignia-hero-tab-name">{p.nombre}</span>
            </button>
          ))}
        </div>
      </section>

      {/* DETALLE */}
      <section className="insignia-section">
        <div className="insignia-body">

          {/* Texto */}
          <div className="insignia-text">
            <h2>{active.nombre}</h2>
            <p className="insignia-cat">{active.categoria}</p>
            <p className="insignia-desc">{active.descripcion}</p>
          </div>

          {/* Galería: 1 grande + 2 pequeñas */}
          <div className="insignia-galeria">
            <div className="insignia-img-grande" onClick={() => setLightbox(0)}>
              <img src={active.galeria[0]} alt={`${active.nombre} 1`} />
              <div className="insignia-img-hover">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
              </div>
            </div>
            <div className="insignia-imgs-small">
              {[1, 2].map((idx) => (
                <div key={idx} className="insignia-img-small" onClick={() => setLightbox(idx)}>
                  <img src={active.galeria[idx]} alt={`${active.nombre} ${idx + 1}`} />
                  <div className="insignia-img-hover">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          <img
            src={active.galeria[lightbox]}
            alt="Vista ampliada"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="lightbox-arrow lightbox-prev"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 2) % 3) }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button
            className="lightbox-arrow lightbox-next"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % 3) }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="cta-section" id="contacto">
        <div className="cta-inner">
          <div className="section-header">
            <h2>Hagamos realidad su visión de hospitalidad</h2>
            <div className="section-header-line" />
          </div>
          <p>Conéctese con nuestro equipo para discutir cronogramas, presupuestos y objetivos del proyecto.</p>
          <a href="mailto:hola@lumicentro.com.pa" className="cta-btn">
            Iniciar conversación
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  )
}