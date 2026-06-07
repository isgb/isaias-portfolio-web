import styles from "../../../../styles/Contact.module.css";

/**
 * Componente para mostrar la información de contacto en la sección de contacto.
 * Recibe un array de objetos con la información de contacto a mostrar, cada objeto debe tener las propiedades 'label', 'value' y 'href'.
 * El componente utiliza un diseño de tarjeta de vidrio para mostrar la información de contacto de manera elegante y legible.
 * @param {Object[]} info - Array de objetos con la información de contacto a mostrar.
 * @returns {JSX.Element} El componente de información de contacto.
 */
export const InformacionContacto = ({ info }) => {
  return (
    <div>
      <div className={`glass-card ${styles.info}`}>
        <h3>Información de contacto</h3>
        <ul>
          {info.map((item) => (
            <li key={item.label}>
              <span className={styles.label}>{item.label}</span>
              <a href={item.href} target="_blank" rel="noreferrer">
                {item.value}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
