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
    name: "Sortis Panamá",
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
  { type: "img", src: "/images/logos/jw-marriott.png", alt: "JW Marriott" },
  { type: "img", src: "/images/logos/ritz-carlton.png", alt: "Ritz-Carlton" },
  { type: "img", src: "/images/logos/hilton.png", alt: "Hilton" },
  { type: "img", src: "/images/logos/sortis.png", alt: "Sortis" },
  { type: "img", src: "/images/logos/westin.png", alt: "Westin" },
  { type: "img", src: "/images/logos/w-hotels.png", alt: "W Hotels" },
  { type: "img", src: "/images/logos/yoopanama.png", alt: "Yoo Panamá" },
  { type: "img", src: "/images/logos/courtyard.png", alt: "Courtyard" },
  { type: "img", src: "/images/logos/melia.png", alt: "Melia" },
  { type: "img", src: "/images/logos/sheraton.png", alt: "Sheraton" },
  { type: "img", src: "/images/logos/hyatt.png", alt: "Hyatt" },
  {
    type: "img",
    src: "/images/logos/waldorf-astoria.png",
    alt: "Waldorf Astoria",
  },
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
    desc: "Creamos soluciones estéticas y funcionales adaptadas a cada proyecto hotelero de alto nivel, integrando iluminación, arquitectura y experiencia en un mismo concepto. En Lighting & design studio entendemos que cada hotel posee una identidad única, por lo que desarrollamos propuestas personalizadas que elevan la atmósfera de lobbies, habitaciones, restaurantes, áreas comunes y exteriores.\n\nNuestro enfoque combina diseño contemporáneo, eficiencia técnica y control lumínico estratégico para potenciar la arquitectura, resaltar materiales y generar experiencias memorables. Trabajamos junto a arquitectos, interioristas y desarrolladores para garantizar coherencia visual, cumplimiento normativo y alto desempeño.",
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
    desc: "Ofrecemos soluciones integrales en suministro y fabricación de luminarias decorativas para proyectos hoteleros de alto nivel, garantizando calidad, precisión y coherencia con la identidad arquitectónica de cada espacio.\n\nDesarrollamos piezas a medida que integran diseño, ingeniería y acabados de lujo, utilizando materiales premium y tecnología LED de alto desempeño para asegurar durabilidad, eficiencia y una experiencia visual sofisticada. Acompañamos cada etapa del proceso —desde el concepto y la ingeniería hasta la producción y entrega final— para crear luminarias que no solo iluminen, sino que realcen la experiencia del huésped y el carácter distintivo del proyecto.",
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
    desc: "Desarrollamos soluciones luminotécnicas arquitectónicas para hoteles de alta gama, donde la iluminación se convierte en un elemento clave que define la identidad y la experiencia del espacio.\n\nIntegramos estratégicamente iluminación técnica y decorativa para resaltar volúmenes, materiales y recorridos, creando atmósferas memorables en cada área del proyecto. Trabajamos en conjunto con arquitectos, diseñadores e ingenieros para garantizar una integración precisa y coherente con el concepto general, logrando espacios que combinan diseño, eficiencia energética, confort visual y tecnología avanzada, elevando la percepción de lujo y el valor de la marca.",
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

      {/* PROJECTS */}
      <section className="projects-section">
        <div className="section-header">
          <h2>Una muestra de nuestro trabajo</h2>
          <div className="section-header-line" />
        </div>
        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-item">
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