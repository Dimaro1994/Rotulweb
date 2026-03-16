import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './Navbar'
import Services from './Services'
import Works from './Works'
import Contact from './Contact'
import WhatsAppButton from './WhatsAppButton'
import HelpAssistant from './HelpAssistant'

function App() {
  const [dailyPhrase, setDailyPhrase] = useState('')
  const [currentPage, setCurrentPage] = useState('home')
  const [isPrideDay, setIsPrideDay] = useState(false)
  const [showWorkScheduleNotice, setShowWorkScheduleNotice] = useState(true)

  const phrases = [
    'Transformamos ideas en imagen: rotulacion, impresion y diseno.',
    'Tu marca merece brillar con nuestros servicios de rotulacion.',
    'Impresion de calidad que deja una marca permanente.',
    'Diseno profesional para tu identidad visual.',
    'Rotulacion con estilo y precision garantizada.',
    'Hacemos visible lo que imaginas.',
    'Calidad, creatividad y profesionalismo en cada proyecto.',
    'Tu exito es nuestra mision.',
    'Imprimimos tus suenos en realidad.',
    'Diseno e impresion para marca de exito.',
    'Rotulacion que habla de tu negocio.',
    'Creatividad sin limites, impresion sin errores.',
    'Tu identidad visual, nuestro compromiso.',
    'Senales que cautivan, rotulacion que marca.',
    'Profesionalismo garantizado en cada centimetro.',
    'Impresion digital de maxima calidad.',
    'Rotulacion personalizada para tu exito.',
    'Diseno estrategico para tu marca.',
    'Visibilidad total para tu negocio.',
    'Impresion que impacta, rotulacion que permanece.',
    'Tu marca en cada proyecto que realizamos.',
    'Calidad superior en rotulacion e impresion.',
    'Diseno que comunica, impresion que vende.',
    'Rotulacion profesional desde hace anos.',
    'Imaginacion llevada a la realidad impresa.',
    'Impresion digital de precision extrema.',
    'Rotulacion que destaca tu negocio.',
    'Marca de calidad en todo lo que hacemos.',
    'Diseno inteligente para visibilidad total.',
    'Impresion duradera, impacto permanente',
  ]

  useEffect(() => {
    const today = new Date()
    const dayOfMonth = today.getDate()
    const phraseIndex = (dayOfMonth - 1) % phrases.length
    setDailyPhrase(phrases[phraseIndex])
    setIsPrideDay(today.getMonth() === 5 && today.getDate() === 28)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('pride-mode', isPrideDay)

    return () => {
      document.body.classList.remove('pride-mode')
    }
  }, [isPrideDay])

  useEffect(() => {
    const handleNavClick = (e: any) => {
      const href = e.target.getAttribute('href')
      if (href === '#servicios') {
        e.preventDefault()
        setCurrentPage('servicios')
      } else if (href === '#trabajos') {
        e.preventDefault()
        setCurrentPage('trabajos')
      } else if (href === '#contacto') {
        e.preventDefault()
        setCurrentPage('contacto')
      } else if (href === '#inicio') {
        e.preventDefault()
        setCurrentPage('home')
      }
    }

    document.addEventListener('click', handleNavClick)
    return () => document.removeEventListener('click', handleNavClick)
  }, [])

  useEffect(() => {
    const isHomePage = currentPage === 'home'
    document.body.classList.toggle('home-page', isHomePage)

    return () => {
      document.body.classList.remove('home-page')
    }
  }, [currentPage])

  useEffect(() => {
    if (!showWorkScheduleNotice) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      setShowWorkScheduleNotice(false)
    }, 6000)

    return () => window.clearTimeout(timeoutId)
  }, [showWorkScheduleNotice])

  return (
    <>
      <Navbar />
      {showWorkScheduleNotice && (
        <div className="work-schedule-modal" role="dialog" aria-modal="true" aria-labelledby="work-schedule-title">
          <div className="work-schedule-modal-card">
            <button
              type="button"
              className="work-schedule-close"
              aria-label="Cerrar aviso de horario"
              onClick={() => setShowWorkScheduleNotice(false)}
            >
              ×
            </button>
            <p className="work-schedule-modal-label">Informacion</p>
            <h2 id="work-schedule-title" className="work-schedule-modal-title">
              Horario de trabajo
            </h2>
            <p className="work-schedule-modal-text">Lunes a viernes de 7:00 a 15:00</p>
          </div>
        </div>
      )}
      {isPrideDay && (
        <div className="pride-banner" role="status" aria-live="polite">
          28 de junio: Orgullo LGTBIQ+.
          <span> Diversidad, respeto, visibilidad y libertad para amar y ser.</span>
        </div>
      )}
      <WhatsAppButton />
      {currentPage === 'home' ? (
        <div className="home-screen">
          <section className="home-welcome" aria-label="Bienvenida">
            <h1 className="animated-title">Bienvenido a</h1>
          </section>
          <HelpAssistant
            onGoToServices={() => setCurrentPage('servicios')}
            onGoToContact={() => setCurrentPage('contacto')}
          />
          <div className="home-bottom">
            <section className="home-budget" aria-labelledby="home-budget-title">
              <p className="home-budget-kicker">Presupuesto rapido</p>
              <h2 id="home-budget-title" className="home-budget-title">
                Necesitas rotulacion para tu negocio?
              </h2>
              <p className="home-budget-text">Solicita tu presupuesto sin compromiso.</p>
              <a href="#contacto" className="home-budget-button">
                Solicitar presupuesto
              </a>
            </section>
            <section className="home-highlights" aria-labelledby="why-choose-rotulmon">
              <h2 id="why-choose-rotulmon" className="home-highlights-title">Por que elegirnos</h2>
              <p className="home-highlights-line">
                <span>Disenos personalizados</span>
                <span>Materiales profesionales</span>
                <span>Instalacion de alta calidad</span>
                <span>Asesoramiento para empresas</span>
              </p>
            </section>
          </div>
        </div>
      ) : currentPage === 'servicios' ? (
        <Services />
      ) : currentPage === 'trabajos' ? (
        <Works dailyPhrase={dailyPhrase} />
      ) : currentPage === 'contacto' ? (
        <Contact />
      ) : null}
    </>
  )
}

export default App
