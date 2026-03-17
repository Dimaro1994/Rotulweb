import './Testimonials.css'

const testimonios = [
  {
    author: 'Juan, Malaga',
    quote: 'Trabajo impecable, muy profesionales',
    featured: true,
  },
  {
    author: 'Maria, Marbella',
    quote: 'Rotularon mi negocio y quedo perfecto',
  },
  {
    author: 'Carlos Ruiz, Fuengirola',
    quote: 'Gran calidad en los materiales y acabados. Se nota que saben lo que hacen.',
  },
  {
    author: 'Laura Sanchez, Malaga',
    quote: 'Me hicieron la rotulacion completa del negocio y ha llamado la atencion desde el primer dia.',
  },
  {
    author: 'David Gomez, Estepona',
    quote: 'Pedi camisetas personalizadas para mi empresa y quedaron perfectas. Muy recomendables.',
  },
  {
    author: 'Antonio Fernandez, Mijas',
    quote: 'Buen trato, rapidez y resultados de calidad. Justo lo que buscaba.',
  },
  {
    author: 'Sergio Martin, Malaga',
    quote: 'Desde el diseno hasta la instalacion todo fue perfecto. Muy profesionales en todo el proceso.',
  },
  {
    author: 'Rocio Jimenez, Marbella',
    quote: 'Nos asesoraron en todo momento y el resultado final ha sido increible. Empresa muy seria.',
  },
  {
    author: 'Manuel Ortega, Benalmadena',
    quote: 'Relacion calidad-precio excelente. Cumplieron plazos y el acabado fue de 10.',
  },
]

function Testimonials() {
  const featuredTestimonial = testimonios.find((testimonio) => testimonio.featured)
  const regularTestimonials = testimonios.filter((testimonio) => !testimonio.featured)

  return (
    <section className="testimonials-section" aria-labelledby="testimonials-title">
      <div className="testimonials-header">
        <p className="testimonials-kicker">Confianza real</p>
        <p className="testimonials-lead">Mas de 100 clientes satisfechos en Malaga y alrededores</p>
        <h2 id="testimonials-title" className="testimonials-title">Lo que dicen nuestros clientes</h2>
        <a href="#contacto" className="testimonials-cta">
          Pide tu presupuesto ahora
        </a>
      </div>

      {featuredTestimonial && (
        <article className="testimonial-featured-card">
          <div className="testimonial-featured-copy">
            <p className="testimonial-featured-label">Opinion destacada</p>
            <div className="testimonial-stars" aria-label="Valoracion de cinco estrellas">
              <span className="testimonial-star">★</span>
              <span className="testimonial-star">★</span>
              <span className="testimonial-star">★</span>
              <span className="testimonial-star">★</span>
              <span className="testimonial-star">★</span>
            </div>
            <blockquote className="testimonial-featured-quote">
              "{featuredTestimonial.quote}"
            </blockquote>
            <p className="testimonial-author">- {featuredTestimonial.author}</p>
          </div>
          <div className="testimonial-featured-avatar" aria-hidden="true">
            JR
          </div>
        </article>
      )}

      <div className="testimonials-grid">
        {regularTestimonials.map((testimonio, index) => (
          <article
            key={testimonio.author}
            className="testimonial-card"
            style={{ animationDelay: `${index * 0.18}s` }}
          >
            <div className="testimonial-stars" aria-label="Valoracion de cinco estrellas">
              <span className="testimonial-star">★</span>
              <span className="testimonial-star">★</span>
              <span className="testimonial-star">★</span>
              <span className="testimonial-star">★</span>
              <span className="testimonial-star">★</span>
            </div>
            <blockquote className="testimonial-quote">"{testimonio.quote}"</blockquote>
            <p className="testimonial-author">- {testimonio.author}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
