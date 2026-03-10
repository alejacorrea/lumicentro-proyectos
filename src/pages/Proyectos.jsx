import Topbar from "../components/Topbar.jsx";
import Nav from "../components/Nav.jsx";
import HeroSlider from "../components/HeroSlider.jsx";
import Footer from "../components/Footer.jsx";

const projects = [
  {
    id: 1,
    name: "JW Marriott Panamá",
    desc: "Es un hotel de lujo cinco estrellas en Punta Pacífica, reconocido por su arquitectura icónica, vistas al océano Pacífico y experiencia de hospitalidad premium en Ciudad de Panamá.",
    images: [
      "/images/proyectos/jw-marriott-1.jpeg",
      "/images/proyectos/jw-marriott-2.jpeg",
      "/images/proyectos/jw-marriott-3.jpeg",
    ],
  },
  {
    id: 2,
    name: "Hilton Panamá",
    desc: "El Hilton Panamá es un hotel de alta categoría en Avenida Balboa, reconocido por sus vistas al mar y su ubicación estratégica en Ciudad de Panamá.",
    images: [
      "/images/proyectos/hilton-1.jpeg",
      "/images/proyectos/hilton-2.jpeg",
      "/images/proyectos/hilton-3.jpeg",
    ],
  },
  {
    id: 3,
    name: "Sortis Hotel, Spa & Casino by Marriott",
    desc: "El Sortis Hotel, Spa & Casino es un hotel urbano de lujo ubicado en Obarrio, Ciudad de Panamá. Reconocido por su diseño moderno, spa, casino y vibrante oferta gastronómica, es un referente de hospitalidad contemporánea en la capital.",
    images: [
      "/images/proyectos/sortis-1.jpeg",
      "/images/proyectos/sortis-2.jpeg",
      "/images/proyectos/sortis-3.jpeg",
    ],
  },
  {
    id: 4,
    name: "Yoo Panamá",
    desc: "El YOO Panama es un exclusivo complejo residencial en Avenida Balboa, reconocido por su diseño vanguardista y vistas al mar en Ciudad de Panamá.",
    images: [
      "/images/proyectos/yoo-1.jpeg",
      "/images/proyectos/yoo-2.jpeg",
      "/images/proyectos/yoo-3.jpg",
    ],
  },
  {
    id: 5,
    name: "Waldorf Astoria Panamá",
    desc: "El Waldorf Astoria Panamá es un hotel de lujo en el corazón de Ciudad de Panamá, reconocido por su elegancia, servicio exclusivo y hospitalidad de alto nivel.",
    images: [
      "/images/proyectos/waldorf-1.jpeg",
      "/images/proyectos/waldorf-2.jpeg",
      "/images/proyectos/waldorf-3.jpeg",
    ],
  },
  {
    id: 6,
    name: "Hotel W Panamá",
    desc: "El W Panama es un hotel urbano de lujo en el distrito financiero de Ciudad de Panamá, reconocido por su diseño moderno y estilo vibrante.",
    images: [
      "/images/proyectos/w-hotels-1.jpeg",
      "/images/proyectos/w-hotels-2.jpeg",
      "/images/proyectos/w-hotels-3.jpeg",
    ],
  },
  {
    id: 7,
    name: "The Ritz-Carlton",
    desc: "Es una reconocida marca internacional de hoteles y resorts de lujo, distinguida por su servicio exclusivo, elegancia y experiencias premium en destinos de alto nivel alrededor del mundo.",
    images: [
      "/images/proyectos/ritz-1.jpg",
    ],
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
  { type: "img", src: "/images/logos/jw-marriott.png",    alt: "JW Marriott",     projectId: 1 },
  { type: "img", src: "/images/logos/ritz-carlton.png",   alt: "Ritz-Carlton",    projectId: 7 },
  { type: "img", src: "/images/logos/hilton.png",         alt: "Hilton",          projectId: 2 },
  { type: "img", src: "/images/logos/sortis.png",         alt: "Sortis",          projectId: 3 },
  { type: "img", src: "/images/logos/westin.png",         alt: "Westin",          projectId: null },
  { type: "img", src: "/images/logos/w-hotels.png",       alt: "W Hotels",        projectId: 6 },
  { type: "img", src: "/images/logos/yoopanama.png",      alt: "Yoo Panamá",      projectId: 4 },
  { type: "img", src: "/images/logos/courtyard.png",      alt: "Courtyard",       projectId: null },
  { type: "img", src: "/images/logos/melia.png",          alt: "Melia",           projectId: null },
  { type: "img", src: "/images/logos/sheraton.png",       alt: "Sheraton",        projectId: null },
  { type: "img", src: "/images/logos/hyatt.png",          alt: "Hyatt",           projectId: null },
  { type: "img", src: "/images/logos/waldorf-astoria.png",alt: "Waldorf Astoria", projectId: 5 },
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
    desc: "En Lumicentro Lighting & Design Studio desarrollamos soluciones integrales de iluminación para el sector hospitalidad, creando espacios estéticos y funcionales adaptados a la identidad de cada hotel. Nuestro enfoque combina diseño contemporáneo, eficiencia técnica y control lumínico estratégico para resaltar la arquitectura y generar experiencias memorables. Ofrecemos un servicio completo que va desde la fabricación a medida hasta la instalación final, garantizando planificación, eficiencia y una ejecución impecable.",
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
    desc: "Ofrecemos soluciones integrales en suministro y fabricación de luminarias decorativas para proyectos hoteleros, con piezas a medida que integran diseño, ingeniería y materiales de alta calidad. Acompañamos todo el proceso, desde el concepto hasta la entrega final, creando luminarias que realzan la arquitectura y la experiencia del huésped.",
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
    titulo: "Soluciones arquitectónicas para proyectos hoteleros high end",
    desc: "Desarrollamos soluciones luminotécnicas arquitectónicas para hoteles, donde la iluminación define la identidad y la experiencia del espacio. Integramos iluminación técnica y decorativa para resaltar arquitectura, materiales y recorridos, creando ambientes elegantes, eficientes y visualmente confortables en cada proyecto.",
  },
];

export default function Proyectos() {
  return (
    <>
      <Topbar />
      <Nav />

      <HeroSlider
        title={
          <>
            LUMICENTRO 
          </>
        }
        subtitle="Fundada en 1966, fue establecida con la visión de ofrecer soluciones de iluminación decorativa de clase mundial a la mayor cantidad de hogares posible, mejorando las experiencias de vida a través del diseño, la calidad y la innovación."
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
              {v.desc.split("\n\n").map((parrafo, pi) => (
                <p
                  key={pi}
                  className="valor-desc"
                  style={{
                    marginBottom:
                      pi < v.desc.split("\n\n").length - 1 ? "14px" : "0",
                  }}
                >
                  {parrafo}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO PROYECTOS */}
      <section className="proyectos-intro-section">
        <div className="section-header">
          <h2>Proyectos de hospitalidad ejecutados con precisión</h2>
          <div className="section-header-line" />
        </div>
        <p className="proyectos-intro-text">
          En Lumicentro Lighting &amp; Design Studio desarrollamos soluciones integrales para el sector hospitalidad, desde la fabricación a medida hasta la instalación final. Cada proyecto refleja planificación estratégica, eficiencia operativa y una ejecución impecable.
        </p>
      </section>

      {/* LOGO CAROUSEL — después de valores */}
      <section className="logo-carousel-section">
        <div className="logo-carousel-wrapper">
          <div className="logo-carousel">
            {allLogos.map((logo, i) => (
              <div
                key={i}
                className={`logo-item${logo.projectId ? ' logo-item-clickable' : ''}`}
                onClick={() => {
                  if (logo.projectId) {
                    document.getElementById(`project-${logo.projectId}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }
                }}
              >
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="section-header">
          <h2>Una muestra de nuestro trabajo</h2>
          <div className="section-header-line" />
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} id={`project-${p.id}`} className="project-item">
              <div className="project-collage">
                <div className={p.images[1] ? "project-collage-top" : "project-collage-full"}>
                  <img src={p.images[0]} alt={`${p.name} 1`} />
                </div>
                {p.images[1] && (
                  <div className="project-collage-bottom">
                    <div className="project-collage-small">
                      <img src={p.images[1]} alt={`${p.name} 2`} />
                    </div>
                    <div className="project-collage-small">
                      <img src={p.images[2]} alt={`${p.name} 3`} />
                    </div>
                  </div>
                )}
              </div>
              <div className="project-info">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-desc">{p.desc}</p>
              </div>
            </div>
          ))}
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