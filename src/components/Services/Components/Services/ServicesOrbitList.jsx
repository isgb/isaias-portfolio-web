function ServicesOrbitList({ services, startAngles, orbitRadius, orbitDuration }) {
  return (
    <ul className="services-orbit-list">
      {services.map((service, index) => {
        // Calcula el ángulo de inicio para esta tarjeta según su índice.
        const angle = startAngles[index % startAngles.length];

        // Desfasa el inicio de la animación según el ángulo para que las
        // tarjetas arranquen repartidas en el círculo, no apiladas.
        const delay = -(orbitDuration * angle) / 360;

        return (
          <li
            key={service.title}
            className="services-orbit"
            style={{
              '--orbit-radius': orbitRadius,
              '--orbit-duration': `${orbitDuration}s`,
              '--orbit-delay': `${delay}s`,
            }}
          >
            <div className="services-planet">
              <article className="glass-card services-planet-card">
                <span className="services-planet-icon" aria-hidden="true">
                  {service.icon}
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default ServicesOrbitList;
