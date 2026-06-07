import "../../styles/Services.css";
import avatarImagen from "../../assets/images/avatar.jpeg";
import {
  serviciosInfo,
  START_ANGLES,
  ORBIT_RADIUS,
  ORBIT_DURATION,
} from "../../constants/constants";
import ServicesOrbitList from "./Components/Services/ServicesOrbitList";

/**
 * Sección de servicios con un efecto de "sistema planetario": el avatar actúa
 * como sol central y las tarjetas de servicio orbitan a su alrededor en un
 * único anillo, repartidas a partes iguales para evitar cualquier colisión.
 * @returns {JSX.Element} El componente de servicios.
 */
function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container">
        <h2 className="section-title">Servicios</h2>
        <p className="section-subtitle">Lo que puedo ofrecer a tu proyecto</p>

        <div className="services-orbit-system">
          <div className="services-sun" aria-hidden="true">
            <span className="services-sun-glow" />
            <img src={avatarImagen} alt="" className="services-sun-avatar" />
          </div>

          {/* Componente que renderiza las tarjetas de servicio orbitando alrededor 
            del avatar central, utilizando los datos de serviciosInfo 
            y las constantes de configuración para calcular las posiciones y animaciones de cada tarjeta.*/}
          <ServicesOrbitList
            services={serviciosInfo}
            startAngles={START_ANGLES}
            orbitRadius={ORBIT_RADIUS}
            orbitDuration={ORBIT_DURATION}
          />
        </div>
        
      </div>
    </section>
  );
}

export default Services;
