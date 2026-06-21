import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiBootstrap,
} from "react-icons/si";

// Nos permite centralizar la información de las redes sociales,
// facilitando su mantenimiento y actualización en un solo lugar.
// Esto mejora la organización del código y evita la repetición de datos en diferentes componentes.
export const socials = [
  { href: "https://github.com/isgb", label: "GitHub", icon: "GH" },
  { href: "https://www.linkedin.com/in/isa%C3%ADas-salvador-gaona-bracamontes/", label: "LinkedIn", icon: "in" },
  { href: "mailto:isgb_codigo@hotmail.com", label: "Email", icon: "✉" },
];

//Nos permite centralizar la información de los enlaces de navegación,
// lo que facilita su mantenimiento y actualización en un solo lugar.
// Esto mejora la organización del código y evita la repetición de datos en diferentes componentes, como el Navbar.
export const links = [
  { href: "#hero", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#tecnologias", label: "Tecnologías" },
  { href: "#portafolio", label: "Portafolio" },
  { href: "#contacto", label: "Contacto" },
];

// Nos permite centralizar la información de contacto,
// facilitando su mantenimiento y actualización en un solo lugar.
export const info = [
  {
    label: "Email",
    value: "isgb_codigo@hotmail.com",
    href: "mailto:isgb_codigo@hotmail.com",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/isaías-salvador",
    href: "https://www.linkedin.com/in/isa%C3%ADas-salvador-gaona-bracamontes/",
  },
  { label: "GitHub", value: "github.com/isgb", href: "https://github.com/isgb" },
];

// Nos permite centralizar la información de los servicios ofrecidos,
// facilitando su mantenimiento y actualización en un solo lugar.
// Esto mejora la organización del código y evita la repetición de datos en diferentes componentes, como el componente de Servicios.
export const serviciosInfo = [
  {
    title: "Frontend Development",
    icon: "◧",
    description:
      "Interfaces rápidas, accesibles y responsive con React y JavaScript moderno.",
  },
  {
    title: "Backend Development",
    icon: "⌬",
    description: "APIs y servicios robustos con Node.js, Express y PHP.",
  },
  {
    title: "APIs",
    icon: "⇄",
    description:
      "Diseño e integración de APIs RESTful seguras y bien documentadas.",
  },
  {
    title: "Bases de Datos",
    icon: "⛁",
    description:
      "Modelado y administración de bases de datos relacionales y NoSQL.",
  },
  {
    title: "Mobile Apps",
    icon: "▭",
    description: "Aplicaciones móviles multiplataforma con React Native.",
  },
  {
    title: "UI/UX Implementation",
    icon: "◎",
    description:
      "Traducción de diseños a interfaces fieles, fluidas y consistentes.",
  },
];

// Nos permite centralizar la información de las órbitas y su comportamiento,
export const ORBIT_RADIUS = "clamp(270px, 35vw, 370px)"; // Radio de la órbita, usando clamp para adaptarse a diferentes tamaños de pantalla. El mínimo es 224px para asegurar que las tarjetas no se superpongan al avatar en pantallas pequeñas, y el máximo es 300px para evitar que se alejen demasiado en pantallas grandes. En pantallas medianas, el radio se ajusta dinámicamente al 30% del ancho de la ventana, manteniendo un diseño equilibrado y responsivo.
// Esto mejora la organización del código y evita la repetición de datos en diferentes componentes, como el componente de Servicios.
export const ORBIT_DURATION = 30; // segundos para dar una vuelta completa, a esta velocidad las tarjetas se mueven lo suficientemente rápido como para no aburrir, pero lo bastante lento como para poder leer su contenido sin dificultad.
// Nos permite centralizar la información de los ángulos de inicio de las órbitas,
export const START_ANGLES = [0, 60, 120, 180, 240, 300]; // Ángulos de inicio para cada tarjeta, en grados, separados 60° para repartirlas uniformemente en el círculo (360° / 6 tarjetas = 60° entre cada una).

export const technologies = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", icon: SiCss, color: "#1572B6" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "PHP", icon: SiPhp, color: "#777BB4" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#E8E8E8" },
  { name: "Next.js", icon: SiNextdotjs, color: "#E8E8E8" },
];

// Umbral mínimo de desplazamiento para considerar un gesto como swipe
export const SWIPE_THRESHOLD = 45;