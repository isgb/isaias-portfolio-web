# Isaias Gaona — Full Stack Developer Portfolio

Portafolio profesional desarrollado para presentar mi experiencia, habilidades tecnicas y proyectos como desarrollador Full Stack.

Sitio de una sola pagina (SPA) con React 19 y Vite, diseño dark con paleta teal/sage, responsive y accesible.

**Demo en vivo:** https://isgb.github.io/isaias-portfolio-web/

## Tech Stack

| Tecnologia   | Uso                          |
| ------------ | ---------------------------- |
| React 19     | UI / componentes             |
| Vite 8       | Build tool / dev server      |
| CSS Modules  | Estilos por componente       |
| Swiper       | Carrusel de proyectos        |
| react-icons  | Iconos de tecnologias        |
| ESLint       | Calidad de codigo            |

## Estructura del proyecto

```text
src/
├── assets/images/        # Imagenes (avatar, perfil)
├── components/
│   ├── Hero/             # Seccion hero con foto, nombre, descripcion
│   ├── Services/         # Sistema planetario de servicios
│   ├── Experience/       # Timeline de experiencia + educacion
│   ├── Technologies/     # Grid de tecnologias con iconos
│   ├── Portfolio/        # Carrusel Swiper de proyectos
│   ├── Contact/          # Formulario de contacto
│   ├── Navbar/           # Navegacion con scroll detection
│   └── Footer/           # Pie de pagina
├── constants/constants.jsx  # Datos centralizados (socials, links, servicios, tecnologias)
├── data/
│   ├── experienceData.js    # Experiencia profesional y educacion (datos reales del CV)
│   └── projects.js          # Proyectos del portafolio
├── hooks/
│   ├── useContactForm.js    # Logica del formulario de contacto
│   └── useScrolled.js       # Deteccion de scroll para navbar
├── styles/                  # CSS Modules + Services.css
├── App.jsx
└── main.jsx
```

## Paleta de colores

| Color     | Hex       | Uso                        |
| --------- | --------- | -------------------------- |
| Deep teal | `#051F20` | Fondo principal            |
| Dark teal | `#0B2B26` | Fondo secundario / cards   |
| Mid teal  | `#163832` | Gradientes secundarios     |
| Teal      | `#235347` | Color primario / botones   |
| Sage      | `#8EB69B` | Acentos / texto secundario |
| Mint      | `#DAF1DE` | Texto principal            |

## Getting Started

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build de produccion
npm run build

# Lint
npx eslint src/
```

### Requisitos

- Node.js 20+
- npm

## Contacto

- LinkedIn: [linkedin.com/in/isaias-salvador-gaona-bracamontes](https://www.linkedin.com/in/isa%C3%ADas-salvador-gaona-bracamontes/)
- GitHub: [github.com/isgb](https://github.com/isgb)
- Email: isgb_codigo@hotmail.com

## Licencia

MIT
