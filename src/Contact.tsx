import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [showPhoneOptions, setShowPhoneOptions] = useState(false)

  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contacto</h2>

        <div className="contact-actions">
          <div className="contact-panel contact-panel-anchor">
            <div className="contact-icon contact-icon-phone" aria-hidden="true">TL</div>
            <h3>Telefono</h3>
            <p className="contact-panel-text">Pulsa aqui para elegir si prefieres llamarnos o escribirnos por WhatsApp.</p>
            <div className="contact-links">
              <button
                type="button"
                className="contact-link contact-link-button"
                onClick={() => setShowPhoneOptions((current) => !current)}
              >
                Telefono
              </button>
            </div>
            {showPhoneOptions && (
              <div className="contact-links contact-links-stack">
                <a href="tel:633833407" className="contact-link">
                  Llamar
                </a>
                <a
                  href="https://wa.me/34633833407"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  WhatsApp
                </a>
              </div>
            )}
          </div>

          <a href="mailto:rotulmon@gmail.com" className="contact-panel contact-panel-anchor">
            <div className="contact-icon contact-icon-email" aria-hidden="true">EM</div>
            <h3>Email</h3>
            <p className="contact-panel-text">Pulsa aqui para escribirnos y te responderemos lo antes posible.</p>
            <div className="contact-links">
              <span className="contact-link">Escribir email</span>
            </div>
          </a>

          <a
            href="https://www.instagram.com/rotulmonn/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-panel contact-panel-anchor"
          >
            <div className="contact-icon contact-icon-social" aria-hidden="true">IG</div>
            <h3>Instagram</h3>
            <div className="contact-links">
              <span className="contact-link">Ver Instagram</span>
            </div>
          </a>
        </div>

        <form className="contact-form">
          <h3>Formulario</h3>
          <input type="text" name="name" placeholder="Tu nombre" />
          <input type="email" name="email" placeholder="Tu email" />
          <input type="tel" name="phone" placeholder="Tu telefono" />
          <textarea name="message" rows={5} placeholder="Cuentanos que necesitas" />
          <label className="contact-consent">
            <input type="checkbox" name="privacy" required />
            <span>Acepto la politica de privacidad</span>
          </label>
          <button type="submit">Enviar consulta</button>
        </form>

        <section className="contact-map" aria-labelledby="contact-map-title">
          <div className="contact-map-header">
            <h3 id="contact-map-title">Donde estamos</h3>
            <p>Te mostramos nuestra ubicacion en Monda, Malaga.</p>
          </div>
          <div className="contact-map-frame">
            <iframe
              title="Ubicacion de Rotulmon en Monda"
              src="https://www.google.com/maps?q=Monda%2C%20Malaga&z=13&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Contact
