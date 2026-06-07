import { useState } from "react";

/**
 * Hook personalizado que encapsula el estado y los manejadores del formulario de contacto.
 * El formulario no envía datos a un servidor real, solo simula el envío y muestra un mensaje de éxito.
 * @returns {{ form: { name: string, email: string, message: string }, sent: boolean, handleChange: Function, handleSubmit: Function }}
 */
export function useContactForm() {

  // Estado para almacenar los valores del formulario y si el mensaje ha sido enviado
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  
  // Estado para mostrar un mensaje de éxito después de enviar el formulario
  const [sent, setSent] = useState(false);

  // Manejador de cambios en los campos del formulario, 
  // actualiza el estado con los nuevos valores
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Manejador de envío del formulario, simula el envío y muestra un mensaje de éxito
  const handleSubmit = (event) => {
    // Prevenir el comportamiento por defecto del formulario para evitar recargar la página
    event.preventDefault();
    // Validación básica para asegurarse de que los campos no estén vacíos
    setSent(true);
    // Simula un retraso para mostrar el mensaje de éxito antes de limpiar el formulario
    setForm({ name: "", email: "", message: "" });
  };

  return { form, sent, handleChange, handleSubmit };
}
