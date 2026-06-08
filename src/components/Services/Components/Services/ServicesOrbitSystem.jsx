/**
 * Contenedor de layout para el sistema planetario de servicios. No conoce ni
 * relaya las props de sus hijos (avatar, servicios, ángulos, radio, duración):
 * cada hijo (p. ej. ServicesSun, ServicesOrbitList) recibe sus props
 * directamente desde quien lo renderiza, evitando el prop drilling.
 * @param {React.ReactNode} children - El "sol" central y las tarjetas orbitando, ya configurados por su padre.
 * @returns {JSX.Element} El componente de sistema planetario de servicios.
 */
function ServicesOrbitSystem({ children }) {
  return <div className="services-orbit-system">{children}</div>;
}

export default ServicesOrbitSystem;
