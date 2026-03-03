import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavLogo = () => (
  <Link to="/" className="nav-logo">
    <img src="/images/logo.png" alt="Lumicentro" style={{ height: '32px', width: 'auto' }} />
  </Link>
)

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const close = () => setMenuOpen(false)

  return (
    <nav>
      <NavLogo />

      {/* Hamburger — ANTES de nav-links para que aparezca en la derecha en móvil */}
      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menú"
      >
        <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}/>
        <span style={{ opacity: menuOpen ? 0 : 1 }}/>
        <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}/>
      </button>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#" onClick={close}>Inicio</a></li>
        <li><a href="#" onClick={close}>Acerca de</a></li>
        <li><a href="#" onClick={close}>Servicios</a></li>
        <li>
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={close}
          >
            Proyectos
          </Link>
        </li>
        <li>
          <Link
            to="/proyectos-insignia"
            className={location.pathname === '/proyectos-insignia' ? 'active' : ''}
            onClick={close}
          >
            Proyectos Insignia
          </Link>
        </li>
        <li><a href="#contacto" onClick={close}>Contacto</a></li>
      </ul>
    </nav>
  )
}