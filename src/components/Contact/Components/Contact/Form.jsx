import styles from "../../../../styles/Contact.module.css";

/**
 * Componente de formulario de contacto para la sección de contacto.
 * Recibe el estado del formulario, manejadores de cambio y envío, y un indicador de envío exitoso.
 * @param {Object} props - Las propiedades del componente.
 * @param {Object} props.form - El estado actual del formulario con campos name, email y message.
 * @param {Function} props.handleChange - Función para manejar cambios en los campos del formulario.
 * @param {Function} props.handleSubmit - Función para manejar el envío del formulario.
 * @param {boolean} props.sent - Indicador de si el mensaje ha sido enviado exitosamente.
 * @returns  {JSX.Element} El componente de formulario de contacto.
 */
export const Form = ({ form, handleChange, handleSubmit, sent, loading, error }) => {
  return (
    <div>
      <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label htmlFor="name">Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
            disabled={loading}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Enviando..." : "Enviar Mensaje"}
        </button>
        {sent && (
          <p className={styles.success}>
            ¡Gracias! Tu mensaje ha sido enviado.
          </p>
        )}
        {error && (
          <p style={{ color: "#ff4a4a", marginTop: "10px" }}>
            {error}
          </p>
        )}
      </form>
    </div>
  );
};
