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
            <a href="#inicio" className={`navbar-link ${currentPage === 'home' ? 'active' : ''}`}>Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#quienes-somos" className={`navbar-link ${currentPage === 'quienes-somos' ? 'active' : ''}`}>Quienes somos</a>
          </li>
          <li className="navbar-item">
            <a href="#servicios" className={`navbar-link ${currentPage === 'servicios' ? 'active' : ''}`}>Servicios</a>
          </li>
          <li className="navbar-item">
            <a href="#trabajos" className={`navbar-link ${currentPage === 'trabajos' ? 'active' : ''}`}>Trabajos</a>
          </li>
          <li className="navbar-item">
            <a href="#opiniones" className={`navbar-link ${currentPage === 'opiniones' ? 'active' : ''}`}>Opiniones</a>
          </li>
          <li className="navbar-item">
            <a href="#contacto" className={`navbar-link ${currentPage === 'contacto' ? 'active' : ''}`}>Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
