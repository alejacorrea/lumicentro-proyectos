const FooterLogo = () => (
  <div className="footer-logo">
    <img src="/images/logo-lumicentro.png" alt="Lumicentro" style={{ height: '80px', width: 'auto' }} />
  </div>
)

export default function Footer() {
  return (
    <>
      <footer>
        <FooterLogo />
        <div className="footer-contact">
          <a href="mailto:hola@lumicentro.com.pa">infoproyectos@lumicentro.com</a>
          <a href="tel:+50761562744">+507 6156 2744</a>
        </div>
      </footer>
      <div className="footer-bottom">
        <p>© 2026 Lumicentro Proyecto — Todos los derechos reservados</p>
      </div>
    </>
  )
}