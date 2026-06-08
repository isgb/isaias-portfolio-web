/**
 * El "sol" central del sistema planetario de la sección de servicios,
 * que muestra el avatar del desarrollador con un efecto de brillo alrededor.
 * @param {string} avatar - La URL de la imagen del avatar a mostrar.
 * @returns {JSX.Element} El componente de sol central.
 */
function ServicesSun({ avatar }) {
  return (
    <div className="services-sun" aria-hidden="true">
      <span className="services-sun-glow" />
      <img src={avatar} alt="" className="services-sun-avatar" />
    </div>
  );
}

export default ServicesSun;
