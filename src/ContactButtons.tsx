import { useState } from 'react'
import './ContactButtons.css'

function ContactButtons() {
  const [openMenu, setOpenMenu] = useState<'phone' | 'email' | null>(null)

  const toggleMenu = (menu: 'phone' | 'email') => {
    setOpenMenu((current) => (current === menu ? null : menu))
  }

  return (
    <div className="contact-buttons">
      <div className={`contact-group ${openMenu === 'phone' ? 'open' : ''}`}>
        {openMenu === 'phone' && (
          <div className="contact-options">
            <a href="tel:633833407" className="contact-option">
              Llamar al 633833407
            </a>
            <a
              href="https://wa.me/34633833407"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-option"
            >
              Contactar por WhatsApp
            </a>
          </div>
        )}
        <button
          type="button"
          className="contact-btn phone"
          title="Telefono"
          onClick={() => toggleMenu('phone')}
        >
          <span className="label">Telefono</span>
          <span>📞</span>
        </button>
      </div>

      <div className={`contact-group ${openMenu === 'email' ? 'open' : ''}`}>
        {openMenu === 'email' && (
          <div className="contact-options">
            <a href="mailto:rotulmon@gmail.com" className="contact-option">
              Enviar email
            </a>
          </div>
        )}
        <button
          type="button"
          className="contact-btn email"
          title="Email"
          onClick={() => toggleMenu('email')}
        >
          <span className="label">Email</span>
          <span>✉️</span>
        </button>
      </div>
    </div>
  )
}

export default ContactButtons
