// Devuelve el año actual usando Date.
// Útil para mostrar el año en el pie de página u otro componente.
export function getCurrentYear() {
  const year = new Date().getFullYear();
  return year;
}

// Total de proyectos en el carrusel, usado para calcular índices de navegación
export function getTotalProjects(projects) {
  return projects.length;
}
