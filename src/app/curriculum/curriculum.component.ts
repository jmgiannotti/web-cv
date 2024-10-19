import {Component, Input} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatChip, MatChipAvatar, MatChipSet} from "@angular/material/chips";


@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [
    MatCardModule,
    MatChipAvatar,
    MatChip,
    MatChipSet,
  ],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {

  profileTxt = "Con facilidad para trabajar en equipo, comunicación eficiente y disciplinado, practicando en cada proyecto que pude realizar con mis compañeros." +
    " Siempre con la predisposición de superarme, aprender y generar ideas creativas para la resolución de los desafíos que se presenten."




  educationTxt = "Analista en sistemas - Instituto ORT terciario - Finalizado - Año 2023"
  educacionTxt2 = "Ingeniero en informatica - UCEMA - En curso - Año 2024"
  experienceTxt = "Junior backend developer - Xenio - Freelance"
  languageTxt = "Ingles - Intermedio"
  @Input() chips: any; // error al poner [] (array vacio)
}
