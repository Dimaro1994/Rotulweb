import './Services.css'

const serviceCategories = [
  {
    title: 'Rotulacion',
    icon: '\u270E',
    items: [
      { label: 'Vehiculos', icon: '\u{1F697}' },
      { label: 'Escaparates', icon: '\u{1F6CD}' },
      { label: 'Fachadas', icon: '\u{1F3E2}' },
      { label: 'Letras corporeas', icon: '\u{1F521}' },
    ],
  },
  {
    title: 'Impresion',
    icon: '\u{1F5A8}',
    items: [
      { label: 'Lonas', icon: '\u{1F3F7}' },
      { label: 'Vinilos', icon: '\u{1F4DC}' },
      { label: 'Carteleria', icon: '\u{1F4CB}' },
      { label: 'Personalizacion', icon: '\u2728' },
    ],
  },
  {
    title: 'Personalizacion',
    icon: '\u2728',
    items: [
      { label: 'Ropa personalizada', icon: '\u{1F455}' },
      { label: 'Merchandising', icon: '\u{1F381}' },
      { label: 'Regalos personalizados', icon: '\u{1F381}' },
    ],
  },
  {
    title: 'Diseno',
    icon: '\u{1F3A8}',
    items: [
      { label: 'Diseno grafico', icon: '\u{1F58C}' },
      { label: 'Branding', icon: '\u{1F3F7}' },
      { label: 'Diseno web', icon: '\u{1F4BB}' },
    ],
  },
]

function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">Nuestros Servicios</h2>

      <div className="services-grid">
        {serviceCategories.map((category) => (
          <div key={category.title} className="service-category">
            <div className="service-heading">
              <span className="service-category-icon" aria-hidden="true">
                {category.icon}
              </span>
              <h3>{category.title}</h3>
            </div>
            <ul>
              {category.items.map((item) => (
                <li key={item.label}>
                  <span className="service-item-icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
