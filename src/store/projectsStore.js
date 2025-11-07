import { defineStore } from "pinia";

export const useProjectsStore = defineStore('projects', ()=>{
    const projects = [
        {
            id: 1,
            title: 'Migración del frontal de El Corte Inglés',
            alt: 'Proyecto de migración del frontal de El Corte Inglés',
            description: 'Participación en la migración de Dust a Vue 2 y Vue 3, creando componentes reutilizables, arreglo de errores, asegurando calidad de código con cobertura de tests y buenas prácticas.',
            technologies: ['Vue 2', 'Vue 3', 'JavaScript', 'Jest', 'React Testing Library', 'Mocha', 'Dust', 'Less', 'Bitbucket', 'Jira'],
            image: 'images/elcorteingles.png',
            url: ''
        },
        {
            id: 2,
            title: 'Web para Startup de IA',
            alt: 'Proyecto de desarrollo web para startup de inteligencia artificial',
            description: 'Desarrollo de una web moderna y atractiva para una startup de servicios con inteligencia artificial.',
            technologies: ['React', 'Nextjs', 'TypeScript', 'Tailwind CSS', 'Vercel'],
            image: 'images/ai-squads-logo.png',
            url: 'https://ai-squads.es/'
        },
        {
            id: 3,
            title: 'Asistentes IA y Chatbots con Vue 3',
            alt: 'Proyecto de desarrollo de interfaces para asistentes IA y chatbots',
            description: 'Desarrollo de diferentes interfaces modernas y responsivas para asistentes basados en IA y chatbots.',
            technologies: ['Vue 3', 'JavaScript', 'Tailwind CSS', 'Vite', 'Python', 'FastAPI', 'GCP'],
            image: 'images/ia-chatbots.png',
            url: ''
        },
        {
            id: 4,
            title: 'Web Empresa de Limpieza',
            alt: 'Proyecto de desarrollo web para empresa de limpieza',
            description: 'Desarrollo de una web moderna y atractiva para una empresa de servicios de limpieza. Contamos con secciones como inicio, servicios, sobre nosotros y contacto con un formulario funcional.',
            technologies: ['Vue', 'Vue Router', 'Formkit', 'Tailwind CSS', 'JavaScript', 'Vercel', 'Google My Business'],
            image: 'images/lican.png',
            url: 'https://www.limpiezaslican.es/'
        },
        {
            id: 4,
            title: 'Web para Torneo de Fútbol v1.0',
            alt: 'Proyecto de desarrollo web para torneo de fútbol',
            description: 'Desarrollo de una web básica funcional para un torneo de fútbol, con clasificación, horarios, resultados y sanciones, y sección admin para introducir los resultados de las jornadas.',
            technologies: ['HTML', 'CSS', 'JavaScript', 'API Rest', 'NodeJS', 'Express', 'JWT', 'MongoDB', 'Vercel'],
            image: 'images/amigos-por-el-deporte.png',
            url: 'https://paternain.vercel.app/'
        },
        {
            id: 5,
            title: 'Web para Torneo de Fútbol v2.0 (En desarrollo)',
            alt: 'Proyecto de rediseño y mejora de la web para torneo de fútbol',
            description: 'Rediseño y mejora de la web del torneo de fútbol, optimizando la experiencia de usuario y añadiendo nuevas funcionalidades como; dar de alta a un equipo, información de los equipos, sección de galería y administración de equipos .',
            technologies: ['Vue 3', 'CSS', 'Tailwind', 'JavaScript', 'Vitest', 'Vue Testing Library', 'API Rest', 'NodeJS', 'Express', 'MongoDB', 'PostgreSQL', 'Vercel'],
            image: 'images/amigos-por-el-deporte.png',
            url: 'https://soccer-front.vercel.app/'
        }
    ];

    return { projects };
});