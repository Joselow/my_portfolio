import type { Project } from "../interfaces";


export const projects: Project[] = [
  {
    id: 'plataforma-cursos-online',
    title: "Plataforma de Cursos Online - Online Course Platform",
    description: "Una plataforma en línea diseñada para ofrecer cursos educativos. Los usuarios pueden inscribirse en cursos, ver videos, y seguir sus progresos a través de una interfaz intuitiva",
    longDescription: "Esta plataforma fue desarrollada con un enfoque en la experiencia del usuario, ofreciendo una interfaz limpia y fácil de usar. Los instructores pueden subir sus cursos, mientras que los estudiantes pueden inscribirse, ver el progreso y recibir certificados al completar los cursos. Proyecto privado.",
    image: "data:image/jpeg;base64,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",
    images: [
     {
  image: '/images/projects/educative_platform01.png',
  alt: "Página principal de la plataforma de cursos",
  description: "CMS: panel inicial para la creación y gestión de cursos."
},
{
  image: '/images/projects/educative_platform02.png',
  alt: "Detalle de un curso",
  description: "CMS: control de ventas y compras realizadas por los usuarios."
},
{
  image: '/images/projects/educative_platform03.png',
  alt: "Detalle de un curso",
  description: "CMS: métricas y estadísticas clave del rendimiento del curso."
},
{
  image: '/images/projects/educative_platform05.png',
  alt: "Detalle de un curso",
  description: "Landing Page: catálogo principal de cursos disponibles."
},
{
  image: '/images/projects/educative_platform06.png',
  alt: "Detalle de un curso",
  description: "Landing Page: historial de compras del usuario."
},
{
  image: '/images/projects/educative_platform07.png',
  alt: "Detalle de un curso",
  description: "CMS: dashboard con estadísticas globales de cursos y estudiantes."
},
{
  image: '/images/projects/educative_platform08.png',
  alt: "Detalle de un curso",
  description: "App del estudiante: acceso rápido al curso en progreso."
},
{
  image: '/images/projects/educative_platform09.png',
  alt: "Detalle de un curso",
  description: "App del estudiante: certificados obtenidos por el usuario."
},
{
  image: '/images/projects/educative_platform10.png',
  alt: "Detalle de un curso",
  description: "App del estudiante: lecciones, comentarios y contenido multimedia."
}

    ],
    demoLink: "",
    codeLink: "",
    technologies: [
      { name: "Typescript", color: "#2677D4" },
      { name: "Vue", color: "#42b883" },
      { name: "Vue Router", color: "#42b883" },
      { name: "Laravel", color: "#F9322C" },
      { name: "Bootstrap", color: "#7550fa" },
    ],
    features: [
      "Sistema de autenticación de usuarios",
      "\"3 Sistemas\", Gestor de contenido, Aplicación de usuario para visualizar videos, Landing page de cursos.",
      "Reproductor de video integrado",
      "Sistema de valoraciones y comentarios"
    ]
  },
  {
    id: 'api-peliculas',
    title: "API de Películas - Movies API",
    description: "Una API desarrollada en Node.js con Express para proporcionar datos sobre películas. Ofrece endpoints para obtener información detallada sobre películas, como títulos, descripción, autores y más.",
    longDescription: "API RESTful completa con documentación Swagger, que permite a los desarrolladores acceder a información detallada sobre películas, incluyendo títulos, actores, directores y más. Incluye autenticación JWT y rate limiting.",
    image: "",
    images: [
      { 
        image: "/images/projects/movie_api01.png", 
        alt: "Documentación de la API", 
        description: "Interfaz de documentación interactiva con Swagger UI" 
      },
      { 
        image: "/images/projects/movie_api02.png", 
        alt: "Documentación de la API", 
        description: "Interfaz de documentación interactiva con Swagger UI" 
      },
      { 
        image: "/images/projects/movie_api03.png", 
        alt: "Documentación de la API", 
        description: "Interfaz de documentación interactiva con Swagger UI" 
      },
      { 
        image: "/images/projects/movie_api04.png", 
        alt: "Documentación de la API", 
        description: "Interfaz de documentación interactiva con Swagger UI" 
      },
    ],
    demoLink: "#",
    codeLink: "https://github.com/Joselow/movies-api",
    technologies: [
      { name: "Node.js", color: "#84BA64" },
      { name: "Express", color: "#657288" },
      { name: "MongoDB", color: "#4DB33D" }
    ],
    features: [
      "Documentación interactiva con Swagger",
      "Autenticación JWT",
      "Búsqueda y filtrado avanzado",
      "Rate limiting"
    ]
  },
  {
    id: 'carrito-compras',
    title: "Carrito de Compras Ecommerce - Shopping Cart",
    description: "Una aplicación de carrito de compras que permite a los usuarios agregar, eliminar y gestionar productos en su carrito. Implementa cálculo del total de la compra y la actualización en tiempo real del carrito.",
    longDescription: "Aplicación de carrito de compras desarrollada con React que simula una tienda en línea completa. Los usuarios pueden navegar por productos, ver detalles, agregar al carrito y realizar un proceso de pago simulado.",
    image: "",
    demoLink: "#",
    codeLink: "https://github.com/Joselow/shopping_cart",
    technologies: [
      { name: "React", color: "#58c4dc" },
      { name: "Context API, global states", color: "#764ABC" },
      { name: "CSS Modules", color: "#2965f1" }
    ],
    images: [
       { 
        image: "/images/projects/shoppingCart01.png", 
        alt: "Interfaz de productos",
        description: "Catálogo de productos con diseño limpio y enfoque en conversión."
      },
      { 
        image: "/images/projects/shoppingCart02.png", 
        alt: "Carrito de compras",
        description: "Carrito optimizado: edición rápida, totales claros y flujo de compra ágil."
      },
      { 
        image: "/images/projects/shoppingCart03.png", 
       alt: "Filtro por precios",
        description: "Listado con filtros por precio para encontrar productos más rápido."
      },
      
    ],
    features: [
      "Carrito de compras en tiempo real",
      "Persistencia de datos con localStorage",
      "Diseño responsivo",
      "Filtrado y búsqueda de productos"
    ]
  },
  {
    id: 'gatos-magicos',
    title: "Gatos Magicos - Cat Magic",
    description: "Una aplicación interactiva que presenta imágenes de gatos. Utiliza TypeScript y Vue para crear una interfaz amigable y dinámica, permitiendo a los usuarios explorar diversas imágenes de gatos.",
    longDescription: "Aplicación web interactiva que consume la API de The Cat API para mostrar imágenes aleatorias de gatos. Los usuarios pueden marcar sus imágenes favoritas, filtrar por categorías y compartir imágenes en redes sociales.",
    image: "",
    demoLink: "https://joselow.github.io/cat-magic/",
    codeLink: "https://github.com/Joselow/cat-magic",
    technologies: [
      { name: "Typescript", color: "#235a97" },
      { name: "Vue", color: "#42b883" },
      { name: "Tailwind", color: "#429EB8" }
    ],
    features: [
      "Galeria de imágenes de gatos",
      "Filtrado por categorías",
      "Scroll infinito de imagenes",
      "Aplicando Virtualización de listas",
    ],
    images: [
        {
        image: "/images/projects/cat_magic01.png",
        alt: "Interfaz de productos",
        description: "Catálogo de productos con diseño intuitivo y enfoque en facilitar la navegación."
      },
      {
        image: "/images/projects/cat_magic02.png",
        alt: "Carrito de compras",
        description: "Carrito con scroll infinito y visualización dinámica de gatos."
      },
      {
        image: "/images/projects/cat_magic03.png",
        alt: "Búsqueda de imágenes",
        description: "Búsqueda avanzada de imágenes utilizando palabras clave específicas."
      },
      {
        image: "/images/projects/cat_magic04.png",
        alt: "Filtros de búsqueda",
        description: "Ejemplo de filtros detallados para refinar resultados de búsqueda."
      }
      
    ],
  },
  {
    id: 'app-clima',
    title: "Aplicación del Clima - Weather App",
    description: "Una aplicación del clima que muestra información meteorológica actual y pronósticos. La interfaz está diseñada con Tailwind CSS y JavaScript para proporcionar una experiencia de usuario atractiva y responsiva.",
    longDescription: "Aplicación meteorológica que muestra el clima actual y el pronóstico para los próximos días. Utiliza la API de OpenWeatherMap para obtener datos en tiempo real y muestra información detallada como temperatura, humedad, velocidad del viento y más.",
    image: "",
    demoLink: "https://joselow.github.io/weather-app/",
    codeLink: "https://github.com/Joselow/weather-app",
    technologies: [
      { name: "Tailwind", color: "#38bdf8" },
      { name: "Javascript Vanilla", color: "#F7DF1E" },
      { name: "OpenWeather API", color: "#4A90E2" },
    ],
    features: [
      "Búsqueda por ciudad",
      "Datos meteorológicos detallados",
      "Diseño adaptativo",
    ], 
    images: [
        {
      image: "/images/projects/wheaterApp01.png",
        alt: "Filtros de búsqueda",
        description: "Vista inicial, soilicitando permisos de location"
      },
        {
      image: "/images/projects/wheaterApp02.png",
        alt: "Filtros de búsqueda",
        description: "Busqueda de pais y ciudad con datos del clima"
      },
      {
        image: "/images/projects/wheaterApp03.png",
        alt: "Filtros de búsqueda",
        description: "VIsta movil del clima"
      },
    ]
  }
];
