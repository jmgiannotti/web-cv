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

  profileTxt = "Estudiante de Ingeniería en Informática con pasión por el aprendizaje continuo y la resolución de desafíos técnicos." +
    " Destaco por mi capacidad para trabajar en equipo, comunicación efectiva y disciplina, habilidades desarrolladas en proyectos colaborativos." +
    " Poseo un nivel avanzado de inglés, adquirido mediante estudios formales."

  educationTxt = "Año 2021 - 2023 Finalizado - Terciario - Analista en Sistemas - Instituto Tecnológico de Educación Superior ORT"
  educacionTxt2 = "Año 2024 - 2027 (Estimado) - Universitario - Ingeniería en Informática - UCEMA"
  experienceTxt = "Junior Backend Developer | Xenio | 6 meses"
  experienceDetails = [
    "Desarrollo y mantenimiento de APIs REST utilizando Node.js y Express",
    "Trabajo con bases de datos PostgreSQL y MongoDB para la persistencia de datos",
    "Implementación de automatizaciones con Cypress y ejecución de pruebas manuales para el aseguramiento de la calidad",
    "Colaboración en equipos ágiles (Scrum)",
    "Uso de Git y Swagger, aplicando patrones de diseño básicos",
    "Enfoque en la calidad del código, estabilidad y mantenibilidad del servicio"
  ]
  languageTxt = "Inglés - Avanzado"
  @Input() chips: any; // error al poner [] (array vacio)
}
