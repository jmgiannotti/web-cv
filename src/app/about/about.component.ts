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

  educationContent: string = `Soy estudiante de Ingeniería en Informática en la UCEMA y tengo un título terciario en Análisis de Sistemas de la ORT.
                              Durante mi formación, adquirí experiencia trabajando en equipo, gestionando y desarrollando proyectos utilizando metodologías ágiles como Scrum.`;
  academicExperienceContent: string = `En mis proyectos académicos he trabajado con diversas tecnologías, como Kotlin para el desarrollo de una aplicación móvil,
JavaScript para frameworks tanto de backend como de frontend, y Java para consolidar los fundamentos de la Programación Orientada a Objetos (POO).`;
  learnedTechnologiesContent: string = `He trabajado con diversos frameworks, como Node.js y Vue.js. Inicialmente, decidí especializarme en Spring para aprovechar mi experiencia previa con Java.
Posteriormente, aprendí Golang debido a su versatilidad y eficiencia. Más recientemente, he incorporado Angular a mi stack de tecnologías, dado que es ampliamente utilizado en la industria para el desarrollo de aplicaciones web robustas.`;
  personalInterestsContent: string = `En mi tiempo libre, juego voleibol de manera federada, lo que me ha permitido desarrollar habilidades de trabajo en equipo y disciplina.
Además, disfruto del armado de legos y soy un apasionado del gaming, que me permite explorar la creatividad y el pensamiento estratégico.`;


  proyects =
    [
      {
        stack: ["VueJs", "Spring"],
        description: "Busqueda y reseña de libros",
        images: ['assets/images/LibreriaEspiral-cap.png', 'https://cdn.thewirecutter.com/wp-content/media/2022/03/elden-ring-2048px-0003.jpg?auto=webp&quality=75&width=1024', 'https://cdn.thewirecutter.com/wp-content/media/2022/03/elden-ring-2048px-0003.jpg?auto=webp&quality=75&width=1024'],
        title: "Libreria Espiral",
        descriptionL: "La idea principal de esta app es practicar el MVC utilizando Spring y consumir un servicio, todo de manera asincrona. Aprender el manejo de request y como se mandan y reciben los datos en este framework. A nivel funcionalidad golpea al servicio"},
      {
        stack: ["VueJs", "NodeJs"],
        description: "Muestra en el mapa las estaciones meteorologicas y las lista en un dashboard lateral",
        images: ['assets/images/RespirAR-cap.png'],
        title: "RespirAR",
        descriptionL: "La idea principal de esta app es practicar el MVC utilizando Spring y consumir un servicio, todo de manera asincrona. Aprender el manejo de request y como se mandan y reciben los datos en este framework. A nivel funcionalidad golpea al servicio"
      }]

  openDialog(proyect: { stack: string[]; description: string; title: string }): void {
    this.dialog.open(DialogComponent, {
      data: proyect,
      maxWidth: '75vw',
      maxHeight: '75vh',
      width: '75vw',
      height: '75vh'
    });
  }



}
