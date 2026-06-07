import Carousel from "./Components/Carousel/Carousel";

function Portfolio() {
  return (
    <section id="portafolio" className="section">
      <div className="container">
        <h2 className="section-title">Portafolio</h2>
        <p className="section-subtitle">
          Algunos proyectos en los que he trabajado
        </p>

        <Carousel />
      </div>
    </section>
  );
}

export default Portfolio;
