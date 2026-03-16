import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a href="#inicio" className="navbar-link">Inicio</a>
          </li>
          <li className="navbar-item">
            <a href="#servicios" className="navbar-link">Servicios</a>
          </li>
          <li className="navbar-item">
            <a href="#trabajos" className="navbar-link">Trabajos</a>
          </li>
          <li className="navbar-item">
            <a href="#contacto" className="navbar-link">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
