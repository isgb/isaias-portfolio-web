import "../../styles/Services.css";
import avatarImagen from "../../assets/images/avatar.png";
import {
  serviciosInfo,
  START_ANGLES,
  ORBIT_RADIUS,
  ORBIT_DURATION,
} from "../../constants/constants";
import ServicesOrbitSystem from "./Components/Services/ServicesOrbitSystem";
import ServicesSun from "./Components/Services/ServicesSun";
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

        {/* Sistema planetario de servicios: cada hijo recibe sus props directamente,
          ServicesOrbitSystem solo aporta el contenedor de layout (sin prop drilling). */}
        <ServicesOrbitSystem>
          {/* El "sol" central del sistema planetario, que es el avatar del desarrollador. */}
          <ServicesSun avatar={avatarImagen} />

          {/* Tarjetas de servicio orbitando alrededor del avatar central. */}
          <ServicesOrbitList
            services={serviciosInfo}
            startAngles={START_ANGLES}
            orbitRadius={ORBIT_RADIUS}
            orbitDuration={ORBIT_DURATION}
          />
        </ServicesOrbitSystem>

      </div>
    </section>
  );
}

export default Services;
