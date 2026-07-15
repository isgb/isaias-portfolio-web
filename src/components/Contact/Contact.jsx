import styles from "../../styles/Contact.module.css";
import { info } from "../../constants/constants";
import { Form } from "./Components/Contact/Form";
import { InformacionContacto } from "./Components/Contact/InformacionContacto";
import { useContactForm } from "../../hooks/useContactForm";

/**
 * Componente de contacto que muestra información de contacto y un formulario para enviar mensajes.
 * El formulario no envía datos a un servidor real, solo simula el envío y muestra un mensaje de éxito.
 * Incluye validación básica para asegurarse de que los campos no estén vacíos antes de permitir el envío.
 * El diseño es responsivo y se adapta a diferentes tamaños de pantalla, utilizando estilos modernos y limpios.
 * El componente utiliza un diseño de tarjeta de vidrio para la sección de información y el formulario, con un fondo translúcido y bordes redondeados para un aspecto elegante.
 * El componente también incluye un mensaje de agradecimiento que se muestra después de enviar el formulario, indicando al usuario que su mensaje ha sido recibido.
 * @returns {JSX.Element} El componente de contacto.
 */
function Contact() {
  // Utiliza el hook personalizado useContactForm para manejar el estado del formulario,
  // el envío y los cambios en los campos del formulario.
  const { form, sent, handleChange, handleSubmit } = useContactForm();

  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? Hablemos
        </p>

        <div className={styles.layout}>
          {/* Componente para mostrar la información de contacto en la sección de contacto. */}
          <InformacionContacto info={info} />

          {/* Componente de formulario de contacto para la sección de contacto. */}
          <Form
            form={form}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            sent={sent}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
