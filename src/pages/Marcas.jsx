import Topbar from "../components/Topbar.jsx";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";

const marcas = [
  { src: "/images/logos/ARTELUCE.jpeg", alt: "ARTELUCE" },
  { src: "/images/logos/ARTEMIDE.jpeg", alt: "ARTEMIDE" },
  { src: "/images/logos/LUTRON.jpeg", alt: "LUTRON" },
  { src: "/images/logos/LEDSC4.jpeg", alt: "LEDS C4" },
  { src: "/images/logos/VIBIA.jpeg", alt: "VIBIA" },
  { src: "/images/logos/MODERNFORMS.jpeg", alt: "MODERN FORMS" },
  { src: "/images/logos/WAC.jpeg", alt: "WAC" },
  { src: "/images/logos/SYLVANIA.jpeg", alt: "SYLVANIA" },
  { src: "/images/logos/PHILIPS.jpeg", alt: "PHILIPS" },
  { src: "/images/logos/CURRENT.jpeg", alt: "CURRENT" },
  { src: "/images/logos/COOPER.jpeg", alt: "COOPER" },
  { src: "/images/logos/FUMAGALLI.jpeg", alt: "FUMAGALLI" },
];

export default function Marcas() {
  return (
    <>
      <Topbar />
      <Nav />

      {/* LOGOS GRID */}
      <section className="marcas-grid-section">
        <div className="section-header">
          <h2>Luxury Brands</h2>
          <div className="section-header-line" />
        </div>
        <div className="marcas-grid">
          {marcas.map((marca, i) => (
            <div key={i} className="marca-item">
              <img src={marca.src} alt={marca.alt} />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}