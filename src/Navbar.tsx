import './Navbar.css'

type NavbarProps = {
  currentPage: string
}

function Navbar({ currentPage }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#inicio" className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`} aria-current={currentPage === 'home' ? 'page' : undefined}>Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#quienes-somos" className={`navbar-link ${currentPage === 'quienes-somos' ? 'active' : ''}`} aria-current={currentPage === 'quienes-somos' ? 'page' : undefined}>Quienes somos</a>
          </li>
          <li className="navbar-item">
            <a href="#servicios" className={`navbar-link ${currentPage === 'servicios' ? 'active' : ''}`} aria-current={currentPage === 'servicios' ? 'page' : undefined}>Servicios</a>
          </li>
          <li className="navbar-item">
            <a href="#trabajos" className={`navbar-link ${currentPage === 'trabajos' ? 'active' : ''}`} aria-current={currentPage === 'trabajos' ? 'page' : undefined}>Trabajos</a>
          </li>
          <li className="navbar-item">
            <a href="#opiniones" className={`navbar-link ${currentPage === 'opiniones' ? 'active' : ''}`} aria-current={currentPage === 'opiniones' ? 'page' : undefined}>Opiniones</a>
          </li>
          <li className="navbar-item">
            <a href="#contacto" className={`navbar-link ${currentPage === 'contacto' ? 'active' : ''}`} aria-current={currentPage === 'contacto' ? 'page' : undefined}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
