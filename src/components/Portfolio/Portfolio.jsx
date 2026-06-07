import Carousel from "./Components/Carousel/Carousel";

/**
 *  Componente de sección de portafolio que muestra una lista de proyectos
 *  en los que se ha trabajado.
 * @returns  {JSX.Element} El componente de sección de portafolio.
 */
function Portfolio() {
  return (
    <section id="portafolio" className="section">
      <div className="container">
        <h2 className="section-title">Portafolio</h2>
        <p className="section-subtitle">
          Algunos proyectos en los que he trabajado
        </p>

        {/* Componente de carrusel para mostrar los proyectos del portafolio. */}
        <Carousel />
      </div>
    </section>
  );
}

export default Portfolio;
