import { Injectable, signal } from '@angular/core';

export type Language = 'es' | 'en';

export interface ProjectData {
  title: string;
  type: string;
  stack: string[];
  description: string;
  images: string[];
  isMobile: boolean;
  urlMock: string;
  githubUrl?: string;
  highlights: string[];
  descriptionL: string;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  // Starts always in Spanish by default
  currentLang = signal<Language>('es');

  setLanguage(lang: Language) {
    this.currentLang.set(lang);
  }

  get isSpanish(): boolean {
    return this.currentLang() === 'es';
  }

  get isEnglish(): boolean {
    return this.currentLang() === 'en';
  }

  // Translations dictionary
  readonly content = {
    es: {
      hero: {
        status: 'Disponible para nuevos desafíos',
        role: 'Desarrollador Fullstack & Estudiante de Ing. en Informática',
        location: 'CABA, Argentina',
        emailBtn: 'Email',
        githubBtn: 'GitHub',
        whatsappBtn: 'WhatsApp',
        tabCV: 'Curriculum Vitae',
        tabProjects: 'Sobre mí & Proyectos',
        footerCopy: '© 2026 Juan Martín Giannotti Calens - Desarrollador Fullstack'
      },
      cv: {
        profileTitle: 'Perfil Profesional',
        profileSub: 'Acerca de mi enfoque y objetivos',
        profileTxt: 'Estudiante de Ingeniería en Informática con pasión por el aprendizaje continuo y la resolución de desafíos técnicos. Destaco por mi capacidad para trabajar en equipo, comunicación efectiva y disciplina, habilidades desarrolladas en proyectos colaborativos. Poseo un nivel avanzado de inglés, adquirido mediante estudios formales.',
        eduTitle: 'Educación & Formación',
        eduSub: 'Trayectoria académica formal',
        education: [
          {
            degree: 'Ingeniería en Informática',
            institution: 'Universidad del CEMA (UCEMA)',
            period: '2024 - 2027 (Estimado)',
            status: 'En curso',
            type: 'Universitario',
            isCurrent: true
          },
          {
            degree: 'Analista en Sistemas',
            institution: 'Instituto Tecnológico Superior ORT',
            period: '2021 - 2023',
            status: 'Finalizado',
            type: 'Terciario',
            isCurrent: false
          }
        ],
        langTitle: 'Idiomas',
        languages: [
          { name: 'Español', level: 'Nativo', detail: 'Lengua materna' },
          { name: 'Inglés', level: 'B2 / Avanzado', detail: 'Estudios formales' }
        ],
        expTitle: 'Experiencia Profesional',
        expSub: 'Trayectoria y desarrollo de software',
        experience: {
          role: 'Junior Backend Developer',
          company: 'Xenio',
          period: '01/2024 – 06/2024',
          duration: '6 meses',
          type: 'Contractor',
          stack: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Cypress', 'Git', 'Swagger'],
          details: [
            'Desarrollo y mantenimiento de APIs REST utilizando Node.js y Express.',
            'Trabajo con bases de datos PostgreSQL y MongoDB para la persistencia de datos.',
            'Implementación de automatizaciones con Cypress y ejecución de pruebas manuales para aseguramiento de calidad.',
            'Colaboración activa en equipos ágiles bajo metodología Scrum.',
            'Documentación con Swagger y versionado con Git aplicando patrones de diseño.',
            'Enfoque en calidad de código, rendimiento y mantenibilidad del servicio.'
          ]
        },
        skillsTitle: 'Aptitudes & Stack Tecnológico',
        skillsSub: 'Herramientas y tecnologías dominadas',
        skillCategories: [
          {
            category: 'Lenguajes & Backend',
            icon: 'code',
            skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'TypeScript', 'JavaScript', 'REST APIs', 'Microservicios']
          },
          {
            category: 'Frontend & UI',
            icon: 'layout',
            skills: ['Angular', 'Vue.js', 'HTML5', 'CSS3 / Sass', 'Responsive Design', 'Material Design']
          },
          {
            category: 'Bases de Datos & DevOps',
            icon: 'database',
            skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Firebase', 'Git / GitHub', 'Vercel']
          },
          {
            category: 'Metodologías & Calidad',
            icon: 'check-circle',
            skills: ['Scrum / Agile', 'Cypress (Testing)', 'Swagger / OpenAPI', 'Clean Code', 'Patrones de Diseño', 'Trabajo en Equipo']
          }
        ]
      },
      about: {
        accordionTitle: 'Conocé más sobre mí',
        accordionSub: 'Perfil personal, método de trabajo e intereses',
        panels: [
          {
            title: '¿Quién soy?',
            icon: 'user',
            content: 'Soy estudiante de Ingeniería en Informática y Analista en Sistemas. Me apasiona resolver problemas complejos mediante soluciones de software eficientes, limpias y escalables. Me caracterizo por la perseverancia, el pensamiento analítico y la búsqueda constante de superación técnica y personal.'
          },
          {
            title: '¿Cómo trabajo?',
            icon: 'briefcase',
            content: 'Valoro profundamente el trabajo en equipo, la comunicación transparente y las buenas prácticas de desarrollo. Me adapto con rapidez a nuevas tecnologías y disfruto participar en entornos ágiles (Scrum) donde la colaboración y el feedback continuo impulsan el éxito del producto.'
          },
          {
            title: 'Mis Objetivos',
            icon: 'target',
            content: 'Continuar creciendo como Desarrollador de Software participando en proyectos desafiantes de alto impacto. Aspiro a especializarme en arquitectura de backend, microservicios y sistemas distribuidos, aportando valor tangible al equipo y a los usuarios finales.'
          },
          {
            title: 'Intereses Personales',
            icon: 'heart',
            content: 'Fuera de la programación, disfruto jugar al vóley competitivo, la lectura, el gaming estratégico y explorar continuamente tendencias de innovación tecnológica.'
          }
        ],
        projectsTitle: 'Proyectos Destacados',
        projectsSub: 'Aplicaciones desarrolladas y proyectos open source',
        viewDetailsBtn: 'Ver detalles',
        screenshotsBadge: 'capturas'
      },
      dialog: {
        techUsed: 'Tecnologías Utilizadas',
        description: 'Descripción',
        keyHighlights: 'Aspectos Clave & Arquitectura',
        viewGithub: 'Ver repositorio en GitHub ↗',
        close: 'Cerrar'
      },
      projects: [
        {
          title: "Cerro Catedral Bot",
          type: "Telegram Bot & Automation",
          stack: ["NodeJs", "Docker", "Puppeteer", "Telegram API"],
          description: "Bot automatizado que monitorea en tiempo real pistas y medios del Cerro Catedral con generación dinámica de mapas.",
          images: [
            'assets/images/Cerrobot-mapa.jpg',
            'assets/images/Cerrobot-telegram.jpg'
          ],
          isMobile: false,
          urlMock: "https://github.com/jmgiannotti/cerro-bot",
          githubUrl: "https://github.com/jmgiannotti/cerro-bot",
          highlights: [
            "Web scraping automatizado en tiempo real con Puppeteer y Node.js para telemetría de pistas y medios de elevación.",
            "Generación programática de mapas visuales de pistas basados en el estado dinámico de la montaña.",
            "Notificaciones push automáticas y comandos interactivos mediante Telegram Bot API.",
            "Contenerización con Docker para despliegue y monitoreo continuo 24/7."
          ],
          descriptionL: "Bot de Telegram que monitorea en tiempo real el estado de pistas de esquí y medios de elevación del Cerro Catedral (Bariloche). Utiliza Puppeteer para extraer datos del sitio oficial, procesa la telemetría y genera un mapa visual interactivo cada vez que detecta cambios de estado o ante consultas de los usuarios por Telegram."
        },
        {
          title: "RespirAR",
          type: "Web Dashboard & IoT",
          stack: ["VueJs", "NodeJs", "Docker"],
          description: "Visualización de estaciones meteorológicas en mapa interactivo con telemetría en tiempo real.",
          images: [
            'assets/images/RespirAR-cap1.jpg',
            'assets/images/RespirAR-cap2.jpg',
            'assets/images/RespirAR-cap3.jpg'
          ],
          isMobile: false,
          urlMock: "https://ciudadesdelfuturo.org/respirar",
          githubUrl: "https://github.com/nicoabaez/RespirAR",
          highlights: [
            "Integración del framework europeo de IoT Fiware en contenedores Docker.",
            "Mapeo geoespacial interactivo y panel lateral con telemetría en tiempo real.",
            "Arquitectura frontend reactiva construida en Vue.js con backend en Node.js."
          ],
          descriptionL: "Aplicación desarrollada para \"Ciudades del Futuro\", diseñada para visualizar estaciones meteorológicas en un mapa interactivo y listarlas en un panel lateral en tiempo real. El reto clave fue implementar el framework de IoT \"Fiware\", cumpliendo con un requisito exclusivo del cliente y adaptando todo el entorno de desarrollo a microservicios en contenedores Docker."
        },
        {
          title: "CinePlus",
          type: "Mobile App Android",
          stack: ["Kotlin", "Firebase"],
          description: "App móvil nativa para exploración de películas, detalles de elenco y comentarios en vivo.",
          images: [
            'assets/images/Cineplus-cap1.jpg',
            'assets/images/Cineplus-cap2.jpg'
          ],
          isMobile: true,
          urlMock: "app://cineplus.android",
          githubUrl: "https://github.com/nicoabaez/CinePlus-Proyecto",
          highlights: [
            "Desarrollo nativo en Kotlin con arquitectura Clean y componentes de Android Jetpack.",
            "Consumo asíncrono de APIs REST de catálogo cinematográfico.",
            "Autenticación y base de datos NoSQL en tiempo real con Firebase Firestore."
          ],
          descriptionL: "Aplicación móvil desarrollada en Kotlin para explorar películas en cartelera, ver detalles de elenco, trailers y dejar comentarios y reseñas en tiempo real. Cuenta con integración de API pública de películas y almacenamiento en la nube mediante Firebase para autenticación de usuarios y persistencia de interacciones."
        }
      ]
    },
    en: {
      hero: {
        status: 'Available for new opportunities',
        role: 'Fullstack Developer & Informatics Engineering Student',
        location: 'Buenos Aires, Argentina',
        emailBtn: 'Email',
        githubBtn: 'GitHub',
        whatsappBtn: 'WhatsApp',
        tabCV: 'Resume / CV',
        tabProjects: 'About Me & Projects',
        footerCopy: '© 2026 Juan Martín Giannotti Calens - Fullstack Developer'
      },
      cv: {
        profileTitle: 'Professional Profile',
        profileSub: 'About my technical focus and career goals',
        profileTxt: 'Informatics Engineering student passionate about continuous learning and technical problem solving. Recognized for teamwork, effective communication, and discipline developed across collaborative software projects. Advanced English proficiency acquired through formal education.',
        eduTitle: 'Education & Training',
        eduSub: 'Formal academic background',
        education: [
          {
            degree: "Bachelor's in Informatics Engineering",
            institution: 'Universidad del CEMA (UCEMA)',
            period: '2024 - 2027 (Expected)',
            status: 'In progress',
            type: 'University',
            isCurrent: true
          },
          {
            degree: 'Systems Analyst Degree',
            institution: 'Instituto Tecnológico Superior ORT',
            period: '2021 - 2023',
            status: 'Graduated',
            type: 'Associate Degree',
            isCurrent: false
          }
        ],
        langTitle: 'Languages',
        languages: [
          { name: 'Spanish', level: 'Native', detail: 'Mother tongue' },
          { name: 'English', level: 'B2 / Advanced', detail: 'Formal education' }
        ],
        expTitle: 'Professional Experience',
        expSub: 'Career history and software development',
        experience: {
          role: 'Junior Backend Developer',
          company: 'Xenio',
          period: '01/2024 – 06/2024',
          duration: '6 months',
          type: 'Contractor',
          stack: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Cypress', 'Git', 'Swagger'],
          details: [
            'Development and maintenance of RESTful APIs utilizing Node.js and Express.',
            'Data persistence and query optimization with PostgreSQL and MongoDB databases.',
            'Implementation of test automation with Cypress and manual QA testing.',
            'Active collaboration in agile teams following Scrum methodologies.',
            'API documentation with Swagger and Git version control applying design patterns.',
            'Focus on code quality, performance, and service maintainability.'
          ]
        },
        skillsTitle: 'Skills & Tech Stack',
        skillsSub: 'Mastered tools and technologies',
        skillCategories: [
          {
            category: 'Languages & Backend',
            icon: 'code',
            skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'TypeScript', 'JavaScript', 'REST APIs', 'Microservices']
          },
          {
            category: 'Frontend & UI',
            icon: 'layout',
            skills: ['Angular', 'Vue.js', 'HTML5', 'CSS3 / Sass', 'Responsive Design', 'Material Design']
          },
          {
            category: 'Databases & DevOps',
            icon: 'database',
            skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Firebase', 'Git / GitHub', 'Vercel']
          },
          {
            category: 'Methodologies & Quality',
            icon: 'check-circle',
            skills: ['Scrum / Agile', 'Cypress (Testing)', 'Swagger / OpenAPI', 'Clean Code', 'Design Patterns', 'Team Collaboration']
          }
        ]
      },
      about: {
        accordionTitle: 'Learn More About Me',
        accordionSub: 'Personal profile, work methodology and goals',
        panels: [
          {
            title: 'Who am I?',
            icon: 'user',
            content: 'I am an Informatics Engineering student and certified Systems Analyst. I am passionate about solving complex technical challenges through efficient, clean, and scalable software solutions. I stand out for perseverance, analytical mindset, and continuous technical growth.'
          },
          {
            title: 'How do I work?',
            icon: 'briefcase',
            content: 'I deeply value teamwork, transparent communication, and clean software engineering practices. I rapidly adapt to new technologies and thrive in agile environments (Scrum) where collaboration and continuous feedback drive product success.'
          },
          {
            title: 'My Goals',
            icon: 'target',
            content: 'To continue growing as a Software Engineer by taking on challenging, high-impact projects. I aim to specialize in backend architecture, microservices, and distributed systems, delivering tangible value to the team and end-users.'
          },
          {
            title: 'Personal Interests',
            icon: 'heart',
            content: 'Outside of coding, I enjoy competitive volleyball, reading, strategic gaming, and constantly exploring emerging tech innovation trends.'
          }
        ],
        projectsTitle: 'Featured Projects',
        projectsSub: 'Highlighted applications and open source work',
        viewDetailsBtn: 'View Details',
        screenshotsBadge: 'screenshots'
      },
      dialog: {
        techUsed: 'Technologies Used',
        description: 'Description',
        keyHighlights: 'Key Highlights & Architecture',
        viewGithub: 'View repository on GitHub ↗',
        close: 'Close'
      },
      projects: [
        {
          title: "Cerro Catedral Bot",
          type: "Telegram Bot & Automation",
          stack: ["NodeJs", "Docker", "Puppeteer", "Telegram API"],
          description: "Automated bot that monitors ski slopes and lifts at Cerro Catedral in real time with dynamic map generation.",
          images: [
            'assets/images/Cerrobot-mapa.jpg',
            'assets/images/Cerrobot-telegram.jpg'
          ],
          isMobile: false,
          urlMock: "https://github.com/jmgiannotti/cerro-bot",
          githubUrl: "https://github.com/jmgiannotti/cerro-bot",
          highlights: [
            "Real-time automated web scraping with Puppeteer and Node.js for slope and lift telemetry.",
            "Programmatic visual map rendering reflecting dynamic mountain conditions.",
            "Automated push notifications and interactive commands via Telegram Bot API.",
            "Containerized with Docker for 24/7 continuous deployment and monitoring."
          ],
          descriptionL: "Telegram bot that monitors the operational status of ski slopes and lifts at Cerro Catedral (Bariloche) in real time. It uses Puppeteer to fetch data from the official site, processes telemetry, and generates an interactive visual map whenever condition changes are detected or requested by users via Telegram."
        },
        {
          title: "RespirAR",
          type: "Web Dashboard & IoT",
          stack: ["VueJs", "NodeJs", "Docker"],
          description: "Meteorological station monitoring dashboard on an interactive map with real-time telemetry.",
          images: [
            'assets/images/RespirAR-cap1.jpg',
            'assets/images/RespirAR-cap2.jpg',
            'assets/images/RespirAR-cap3.jpg'
          ],
          isMobile: false,
          urlMock: "https://ciudadesdelfuturo.org/respirar",
          githubUrl: "https://github.com/nicoabaez/RespirAR",
          highlights: [
            "Integration of the European IoT framework Fiware within Docker containers.",
            "Interactive geospatial mapping and side panel with real-time telemetry.",
            "Reactive frontend architecture built with Vue.js and Node.js backend."
          ],
          descriptionL: "Application developed for \"Ciudades del Futuro\", designed to visualize meteorological stations on an interactive map and list them in a side panel with real-time metrics. The core challenge was implementing the \"Fiware\" IoT framework, fulfilling specific client requirements and structuring the entire development environment into microservices with Docker containers."
        },
        {
          title: "CinePlus",
          type: "Mobile App Android",
          stack: ["Kotlin", "Firebase"],
          description: "Native mobile app for movie browsing, cast exploration, and real-time community reviews.",
          images: [
            'assets/images/Cineplus-cap1.jpg',
            'assets/images/Cineplus-cap2.jpg'
          ],
          isMobile: true,
          urlMock: "app://cineplus.android",
          githubUrl: "https://github.com/nicoabaez/CinePlus-Proyecto",
          highlights: [
            "Native Android development in Kotlin with Clean Architecture and Jetpack components.",
            "Asynchronous consumption of REST APIs for movie catalogs.",
            "Real-time user authentication and NoSQL cloud database using Firebase Firestore."
          ],
          descriptionL: "Native Android mobile application built with Kotlin to discover in-theater movies, view cast details and trailers, and post real-time reviews. Features seamless public movie API integration and cloud storage via Firebase for authentication and user interactions."
        }
      ]
    }
  };

  get t() {
    return this.content[this.currentLang()];
  }
}
