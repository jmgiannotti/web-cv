import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatChip, MatChipAvatar, MatChipSet} from "@angular/material/chips";
import {MatDialog} from "@angular/material/dialog";
import { DialogComponent } from '../dialog/dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCardModule,
    MatChip,
    MatChipAvatar,
    MatChipSet,
    MatExpansionModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() chips: { title: string; img: string }[] = [];

  constructor(private dialog: MatDialog) { }

  educationContent: string = `Completé mis estudios terciarios como Analista de Sistemas en la ORT 👨‍🎓 y actualmente estoy cursando Ingeniería en Informática en la UCEMA 📚. Durante mi formación, adquirí experiencia en el trabajo en equipo, la gestión y el desarrollo de proyectos, aplicando metodologías ágiles como Scrum.`;
  experienceContent: string = `A lo largo de mis proyectos académicos, he colaborado en equipos fullstack, aplicando metodologías ágiles como Scrum para mejorar la organización y el desarrollo de proyectos. Durante estos proyectos, trabajé con tecnologías como Kotlin, en el desarrollo de una aplicación móvil; JavaScript, en frameworks de backend y frontend; y Java, donde consolidé mis fundamentos en Programación Orientada a Objetos (POO). También he explorado temas clave como modelos de negocio, creación de MVP y BPM, que me brindaron una comprensión más completa de los aspectos estratégicos y operativos del desarrollo de productos.`;
  learnedTechnologiesContent: string = `He trabajado con diversos frameworks, entre ellos Node.js y Vue.js. Inicialmente, me especialicé en Spring para capitalizar mi experiencia previa con Java. Más adelante, incorporé Golang a mis habilidades por su versatilidad y eficiencia. Recientemente, añadí Angular a mi stack, debido a su amplio uso en la industria para el desarrollo de aplicaciones web robustas.`;
  personalInterestsContent: string = `En mi tiempo libre, juego voleibol de manera federada, lo que me ha ayudado a desarrollar habilidades de trabajo en equipo y disciplina. También disfruto armar legos y soy un apasionado del gaming, actividades que me permiten explorar la creatividad y el pensamiento estratégico.`;


  proyects = [
    {
      title: "Cerro Catedral Bot",
      type: "Telegram Bot & Automation",
      stack: ["NodeJs", "Docker", "Puppeteer", "Telegram API"],
      description: "Bot automatizado que monitorea en tiempo real pistas y medios del Cerro Catedral con generación dinámica de mapas.",
      images: [
        'assets/images/Cerrobot-mapa.png',
        'assets/images/Cerrobot-telegram.png'
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
        'assets/images/RespirAR-cap1.png',
        'assets/images/RespirAR-cap2.png',
        'assets/images/RespirAR-cap3.png'
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
        'assets/images/Cineplus-cap1.png',
        'assets/images/Cineplus-cap2.png'
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
  ];

  openDialog(proyect: any): void {
    this.dialog.open(DialogComponent, {
      data: proyect,
      maxWidth: '1050px',
      width: '92vw',
      panelClass: 'custom-project-dialog-panel'
    });
  }



}
