import './About.css'

function About() {
  return (
    <section className="about-container" aria-labelledby="about-title">
      <div className="about-hero">
        <p className="about-kicker">Quienes somos</p>
        <h2 id="about-title" className="about-title">Rotulacion profesional con experiencia</h2>
        <p className="about-intro">
          En Rotulmon llevamos anos ayudando a negocios a destacar con rotulacion profesional,
          combinando diseno, materiales de calidad y acabados duraderos.
        </p>
        <a href="#contacto" className="about-cta">
          Pide tu presupuesto ahora
        </a>
      </div>

      <section className="about-process" aria-labelledby="about-process-title">
        <div className="about-process-header">
          <p className="about-process-kicker">COMO TRABAJAMOS</p>
          <h3 id="about-process-title" className="about-process-title">
            Nos cuentas tu idea, te asesoramos, disenamos e instalamos
          </h3>
        </div>

        <div className="about-process-grid">
          <article className="about-process-step">
            <span className="about-process-number">01</span>
            <h4>Nos cuentas tu idea</h4>
            <p>Escuchamos lo que necesitas y entendemos el objetivo de tu negocio antes de empezar.</p>
          </article>

          <article className="about-process-step">
            <span className="about-process-number">02</span>
            <h4>Te asesoramos</h4>
            <p>Te proponemos materiales, formatos y soluciones para conseguir el mejor resultado.</p>
          </article>

          <article className="about-process-step">
            <span className="about-process-number">03</span>
            <h4>Disenamos</h4>
            <p>Preparamos una propuesta visual pensada para llamar la atencion y reforzar tu imagen.</p>
          </article>

          <article className="about-process-step">
            <span className="about-process-number">04</span>
            <h4>Instalamos</h4>
            <p>Realizamos el acabado final con cuidado y precision para que todo quede perfecto.</p>
          </article>
        </div>
      </section>

      <div className="about-grid">
        <article className="about-card">
          <h3>Experiencia real</h3>
          <p>
            Trabajamos cada proyecto pensando en la visibilidad del negocio, la coherencia de la
            marca y un acabado que transmita profesionalidad desde el primer vistazo.
          </p>
        </article>

        <article className="about-card">
          <h3>Calidad en cada detalle</h3>
          <p>
            Seleccionamos materiales y soluciones duraderas para que la rotulacion no solo llame
            la atencion, sino que tambien mantenga su presencia con el paso del tiempo.
          </p>
        </article>

        <article className="about-card">
          <h3>Cercania y asesoramiento</h3>
          <p>
            Acompanamos a cada cliente durante el proceso para convertir una idea en una imagen
            clara, atractiva y adaptada a su negocio.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
