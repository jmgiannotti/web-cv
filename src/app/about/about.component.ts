import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
MatCardModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
   txt = "Gilgamesh y sus epoopeyas epicas trancurren durante el tiempo de las increibles y doradas epocas" +
     " en las que el sol brilla y se pone bajo una sola bandera de unidad"

  proyects = [{stack: "", description: "", title: ""},{stack: "", description: "", title: ""}]
}
