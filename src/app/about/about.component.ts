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
  @Input() chips: any;

  constructor(private dialog: MatDialog) { }

  educationContent: string = `Soy Analista de Sistemas, actualmente estoy cursando Ingeniería en Informática en la UCEMA. Durante mi formación, adquirí experiencia en el trabajo en equipo, la gestión y el desarrollo de proyectos, aplicando metodologías ágiles como Scrum.`;
  academicExperienceContent: string = `A lo largo de mis proyectos académicos, he colaborado en equipos fullstack, aplicando metodologías ágiles como Scrum para mejorar la organización y el desarrollo de proyectos. Durante estos proyectos, trabajé con tecnologías como Kotlin, en el desarrollo de una aplicación móvil; JavaScript, en frameworks de backend y frontend; y Java, donde consolidé mis fundamentos en Programación Orientada a Objetos (POO). También he explorado temas clave como modelos de negocio, creación de MVP y BPM, que me brindaron una comprensión más completa de los aspectos estratégicos y operativos del desarrollo de productos.`;
  learnedTechnologiesContent: string = `He trabajado con diversos frameworks, entre ellos Node.js y Vue.js. Inicialmente, me especialicé en Spring para capitalizar mi experiencia previa con Java. Más adelante, incorporé Golang a mis habilidades por su versatilidad y eficiencia. Recientemente, añadí Angular a mi stack, debido a su amplio uso en la industria para el desarrollo de aplicaciones web robustas.`;
  personalInterestsContent: string = `En mi tiempo libre, juego voleibol de manera federada, lo que me ha ayudado a desarrollar habilidades de trabajo en equipo y disciplina. También disfruto armar legos y soy un apasionado del gaming, actividades que me permiten explorar la creatividad y el pensamiento estratégico.`;


  proyects =
    [
      {
        stack: ["VueJs", "Spring"],
        description: "Busqueda y reseña de libros",
        images: ['assets/images/LibreriaEspiral-cap1.png', 'https://cdn.thewirecutter.com/wp-content/media/2022/03/elden-ring-2048px-0003.jpg?auto=webp&quality=75&width=1024', 'https://cdn.thewirecutter.com/wp-content/media/2022/03/elden-ring-2048px-0003.jpg?auto=webp&quality=75&width=1024'],
        title: "Libreria Espiral",
        descriptionL: "Librería Espiral es una aplicación pensada para la búsqueda y reseña de libros, similar a la experiencia de CinePlus, pero centrada en literatura. Desarrollada en Vue.js y Spring, este proyecto me permitió aprender a fondo el patrón MVC en Spring, realizando solicitudes y procesando datos de manera asíncrona. Aunque la app aún está en desarrollo, ya cuenta con funcionalidades clave para explorar y descubrir libros organizados por categorías."
      },
      {
        stack: ["VueJs", "NodeJs"],
        description: "Muestra en el mapa las estaciones meteorologicas y las lista en un dashboard lateral",
        images: ['assets/images/RespirAR-cap1.png', 'assets/images/RespirAR-cap2.png',  'assets/images/RespirAR-cap3.png'],
        title: "RespirAR",
        descriptionL: "Aplicación desarrollada para \"Ciudades del Futuro\", diseñada para visualizar estaciones meteorológicas en un mapa y listarlas en un panel lateral. El reto clave fue implementar el framework de IoT \"Fiware\", cumpliendo con un requisito exclusivo del cliente y adaptando el entorno de desarrollo a contenedores Docker."
      },
      {
        stack: ["Kotlin", "Firebase"],
        description: "App mobile que muestra peliculas, sus detalles y permite realizar comentarios",
        images: ['assets/images/Cineplus-cap1.png', 'assets/images/Cineplus-cap2.png'],
        title: "CinePlus",
        descriptionL: "Aplicación móvil para ver detalles de películas y dejar comentarios, con integración de una API de películas y almacenamiento en Firebase. Este proyecto ayudó a consolidar habilidades en arquitectura de aplicaciones móviles y almacenamiento de datos, tanto del usuario como de contenido relevante, en Firebase."


      }]

  openDialog(proyect: { stack: string[]; description: string; title: string }): void {
    this.dialog.open(DialogComponent, {
      data: proyect,
      maxWidth: '140vw',
      maxHeight: '140vh',
      width: '80vw',

    });
  }



}
