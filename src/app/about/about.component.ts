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

  txt = "Gilgamesh y sus epoopeyas epicas trancurren durante el tiempo de las increibles y doradas epocas" +
    " en las que el sol brilla y se pone bajo una sola bandera de unidad"

  proyects =
    [{stack: ["VueJs", "Spring"], description: "Busqueda y reseña de libros", title: "Libreria Espiral", descriptionL: "La idea principal de esta app es practicar el MVC utilizando Spring y consumir un servicio, todo de manera asincrona. Aprender el manejo de request y como se mandan y reciben los datos en este framework. A nivel funcionalidad golpea al servicio"},
      {
        stack: ["VueJs", "NodeJs"],
        description: "Muestra en el mapa las estaciones meteorologicas, utiliza el ecosistema de fiware para obtener los datos de estas",
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
