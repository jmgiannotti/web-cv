import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatChip, MatChipAvatar, MatChipSet} from "@angular/material/chips";
import {MatDialog} from "@angular/material/dialog";
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCardModule,
    MatChip,
    MatChipAvatar,
    MatChipSet
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @Input() chips: any;

  constructor(private dialog: MatDialog) { }

  txt = "Soy estudiante de ingenieria en informatica en la UCEMA, hice el terciario de analista de sistemas en la ort. Alli aprendi a trabajar en equipo, a realizar y gestionar un proyecto utilizando Scrum. El terciario me enseño a escribir codigo limpio, simple, haciendo incapie en seguir las buenas practicas. En los proyectos academicos he llegado a utilizar kotlin para una app mobile, Javascript para los frameworks de backend y frontend y Java para aprender los fundamentos de la POO. Acompañados de frameworks como Node y Vue. Por mi parte decidi primero sumar Spring para aprovechar mi conocimiento tecnico en java, despues quise sumar Golang por su versatilidad en su uso. Por ultimo me llamo la atencion Angular por ser un framework muy utilizado en la industria. A nivel personal realizo de manera federada voley, otros de mis hobbys son el armado de legos y el gaming"

  proyects =
    [{stack: ["VueJs", "Spring"], description: "Busqueda y reseña de libros", title: "Libreria Espiral", descriptionL: "La idea principal de esta app es practicar el MVC utilizando Spring y consumir un servicio, todo de manera asincrona. Aprender el manejo de request y como se mandan y reciben los datos en este framework. A nivel funcionalidad golpea al servicio"},
      {
        stack: ["VueJs", "NodeJs"],
        description: "Muestra en el mapa las estaciones meteorologicas y las lista en un dashboard lateral",
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
