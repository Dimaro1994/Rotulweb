import rotulmon1Image from './assets/rotulmon1.png'
import rotulmon2Image from './assets/rotulmon2.png'
import rotulmon3Image from './assets/rotulmon3.png'
import rotulmon4Image from './assets/rotulmon4.png'
import rotulmon5Image from './assets/rotulmon5.png'
import './Works.css'

const trabajos = [
  {
    title: 'Vehiculos rotulados',
    description: 'Aplicaciones visuales para empresas que quieren convertir cada desplazamiento en una oportunidad de marca.',
    image: rotulmon1Image,
    tag: 'Movilidad de marca',
  },
  {
    title: 'Rotulacion comercial',
    description: 'Proyectos pensados para captar miradas y reforzar la presencia del negocio en su entorno.',
    image: rotulmon2Image,
    tag: 'Fachadas y locales',
  },
  {
    title: 'Imagen corporativa',
    description: 'Acabados profesionales que cuidan cada detalle para transmitir una imagen solida y memorable.',
    image: rotulmon3Image,
    tag: 'Identidad visual',
  },
  {
    title: 'Rotulos personalizados',
    description: 'Proyectos visuales creados para reforzar la identidad del negocio con un acabado llamativo y cuidado.',
    image: rotulmon4Image,
    tag: 'Personalizacion',
  },
  {
    title: 'Acabados de impacto',
    description: 'Trabajos pensados para destacar desde lejos y mantener una presencia visual potente en cualquier soporte.',
    image: rotulmon5Image,
    tag: 'Alta visibilidad',
  },
]

type WorksProps = {
  dailyPhrase: string
}

function Works({ dailyPhrase }: WorksProps) {
  return (
    <section className="works-container">
      <header className="works-hero">
        <p className="works-kicker">Proyectos reales</p>
        <h2 className="works-title">Trabajos que hacen visible tu negocio</h2>
        <p className="works-intro">
          Una seleccion de rotulaciones, acabados e imagen comercial pensada para mostrar como
          trabajamos el detalle, la presencia de marca y el impacto visual.
        </p>
      </header>

      <div className="works-grid">
        <article className="work-card work-card-featured">
          <img
            src={rotulmon2Image}
            alt="Trabajo destacado de rotulacion realizado por Rotulmon"
            className="work-image"
          />
          <div className="work-card-content">
            <p className="work-card-label">Trabajo destacado</p>
            <h3>Rotulacion comercial pensada para atraer desde el primer vistazo</h3>
            <p>
              Una muestra de nuestro enfoque: composicion limpia, materiales de calidad y una
              ejecucion pensada para que la marca gane presencia, orden y personalidad.
            </p>
            <div className="work-card-points" aria-label="Puntos fuertes del trabajo destacado">
              <span>Diseno claro</span>
              <span>Material profesional</span>
              <span>Impacto visual</span>
            </div>
          </div>
        </article>

        {trabajos.map((trabajo) => (
          <article key={trabajo.title} className="work-card work-card-gallery">
            <img
              src={trabajo.image}
              alt={trabajo.title}
              className="work-image work-image-gallery"
            />
            <div className="work-card-content work-card-content-gallery">
              <p className="work-card-label">{trabajo.tag}</p>
              <h3>{trabajo.title}</h3>
              <p>{trabajo.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="works-tagline works-tagline-bottom">
        <p>{dailyPhrase}</p>
      </div>
    </section>
  )
}

export default Works
