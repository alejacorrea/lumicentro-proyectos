import Topbar from "../components/Topbar.jsx";
import Nav from "../components/Nav.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import Footer from "../components/Footer.jsx";

const projects = [
  {
    id: 1,
    name: "JW Marriott Panamá",
    desc: "Es un hotel de lujo cinco estrellas en Punta Pacífica, reconocido por su arquitectura icónica, vistas al océano Pacífico y experiencia de hospitalidad premium en Ciudad de Panamá.",
    image: "/images/jw-marriott.jpg",
  },
  {
    id: 2,
    name: "Hilton Panamá",
    desc: "El Hilton Panamá es un hotel de alta categoría en Avenida Balboa, reconocido por sus vistas al mar y su ubicación estratégica en Ciudad de Panamá.",
    image: "/images/hilton.jpg",
  },
  {
    id: 3,
    name: "Sortis Hotel, Spa & Casino",
    desc: "El Sortis Hotel, Spa & Casino es un hotel urbano de lujo ubicado en Obarrio, Ciudad de Panamá. Reconocido por su diseño moderno, spa, casino y vibrante oferta gastronómica, es un referente de hospitalidad contemporánea en la capital.",
    image: "/images/sortis.jpg",
  },
  {
    id: 4,
    name: "Yoo Panamá",
    desc: "El YOO Panamá es un exclusivo complejo residencial en Avenida Balboa, reconocido por su diseño vanguardista y vistas al mar en Ciudad de Panamá.",
    image: "/images/yoo.jpg",
  },
  {
    id: 5,
    name: "Waldorf Astoria Panamá",
    desc: "El Waldorf Astoria Panamá es un hotel de lujo en el corazón de Ciudad de Panamá, reconocido por su elegancia, servicio exclusivo y hospitalidad de alto nivel.",
    image: "/images/waldorf.jpg",
  },
  {
    id: 6,
    name: "Hotel W Panamá",
    desc: "El W Panamá es un hotel urbano de lujo en el distrito financiero de Ciudad de Panamá, reconocido por su diseño moderno y estilo vibrante.",
    image: "/images/w-hotels.jpg",
  },
  {
    id: 7,
    name: "The Ritz-Carlton Panamá",
    desc: "Es una reconocida marca internacional de hoteles y resorts de lujo, distinguida por su servicio exclusivo, elegancia y experiencias premium en destinos de alto nivel alrededor del mundo.",
    image: "/images/ritz.jpg",
  },
];

const clients = [
  "JW Marriott Panamá",
  "Hilton Panamá",
  "Sortis Panamá",
  "Yoo Panamá",
  "Waldorf Astoria Panamá",
  "Hotel W Panamá",
];

const logos = [
  { type: 'img', src: '/images/logos/jw-marriott.png', alt: 'JW Marriott' },
  { type: 'img', src: '/images/logos/ritz-carlton.png', alt: 'Ritz-Carlton' },
  { type: 'img', src: '/images/logos/hilton.png', alt: 'Hilton' },
  { type: 'img', src: '/images/logos/sortis.png', alt: 'Sortis' },
  { type: 'img', src: '/images/logos/westin.png', alt: 'Westin' },
  { type: 'img', src: '/images/logos/w-hotels.png', alt: 'W Hotels' },
  { type: 'img', src: '/images/logos/yoopanama.png', alt: 'Yoo Panamá' },
  { type: 'img', src: '/images/logos/courtyard.png', alt: 'Courtyard' },
  { type: 'img', src: '/images/logos/melia.png', alt: 'Melia' },
  { type: 'img', src: '/images/logos/sheraton.png', alt: 'Sheraton' },
  { type: 'img', src: '/images/logos/hyatt.png', alt: 'Hyatt' },
  { type: 'img', src: '/images/logos/waldorf-astoria.png', alt: 'Waldorf Astoria' },
];
const allLogos = [...logos, ...logos];

const valores = [
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    titulo: "Diseño",
    desc: "Soluciones estéticas y funcionales adaptadas a cada proyecto hotelero de alto nivel.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    titulo: "Suministro y manufactura de luminarias decorativas",
    desc: "Fabricación a medida con materiales premium, desde el concepto hasta la entrega.",
  },
  {
    icon: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18M9 21V9" />
      </svg>
    ),
    titulo: "Arquitectónicas para proyectos hoteleros high end",
    desc: "Integración luminotécnica que eleva la experiencia del huésped y define la identidad del espacio.",
  },
];

const PlaceholderIcon = () => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 24 24"
    fill="none"
    stroke="#ccc"
    strokeWidth="1.5"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="m21 15-5-5L5 21" />
  </svg>
);

export default function Proyectos() {
  return (
    <>
      <Topbar />
      <Nav />

      <HeroSlider
        title={
          <>
            Proyectos de hospitalidad
            <br />
            ejecutados con precisión
          </>
        }
        subtitle="En Lumicentro Proyecto desarrollamos soluciones integrales para el sector hospitalidad, desde la fabricación a medida hasta la instalación final. Cada proyecto refleja planificación estratégica, eficiencia operativa y una ejecución impecable."
      />

      {/* VALORES AGREGADOS */}
      <section className="valores-section">
        <div className="section-header">
          <h2>Valores Agregados</h2>
          <div className="section-header-line" />
        </div>
        <div className="valores-grid">
          {valores.map((v, i) => (
            <div key={i} className="valor-bloque">
              <div className="valor-icon">{v.icon}</div>
              <h3 className="valor-titulo">{v.titulo}</h3>
              <p className="valor-desc">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="section-header">
          <h2>Una muestra de nuestro trabajo</h2>
          <div className="section-header-line" />
        </div>
        <div className="projects-grid">
          {projects.map((p) =>
            p.image ? (
              <div key={p.id} className="project-card">
                <img src={p.image} alt={p.name} />
                <div className="project-card-overlay">
                  <div className="overlay-text">
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div key={p.id} className="project-card project-card-placeholder">
                <PlaceholderIcon />
                <span>Imagen del proyecto</span>
              </div>
            ),
          )}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="clients-section">
        <div className="section-header">
          <h2>Hoteles y complejos turísticos</h2>
          <div className="section-header-line" />
        </div>
        <ul className="clients-list">
          {clients.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
        <div className="logo-carousel-wrapper">
          <div className="logo-carousel">
            {allLogos.map((logo, i) => (
              <div key={i} className="logo-item">
                {logo.type === "img" ? (
                  <img src={logo.src} alt={logo.alt} />
                ) : (
                  <span className="logo-item-text">{logo.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section" id="contacto">
        <div className="cta-inner">
          <div className="section-header">
            <h2>Hagamos realidad su visión de hospitalidad</h2>
            <div className="section-header-line" />
          </div>
          <p>
            Conéctese con nuestro equipo para discutir cronogramas, presupuestos
            y objetivos del proyecto.
          </p>
          <a href="mailto:hola@lumicentro.com.pa" className="cta-btn">
            Iniciar conversación
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
