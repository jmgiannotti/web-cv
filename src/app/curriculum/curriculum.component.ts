import { Component, Input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatChip, MatChipAvatar, MatChipSet } from "@angular/material/chips";


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
  profileTxt = `Estudiante de Ingeniería en Informática con pasión por el aprendizaje continuo y la resolución de desafíos técnicos. Destaco por mi capacidad para trabajar en equipo, comunicación efectiva y disciplina, habilidades desarrolladas en proyectos colaborativos. Poseo un nivel avanzado de inglés, adquirido mediante estudios formales.`;

  educationList = [
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
  ];

  experience = {
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
  };

  skillCategories = [
    {
      category: 'Lenguajes',
      skills: ['Java', 'JavaScript', 'Golang', 'Kotlin', 'TypeScript']
    },
    {
      category: 'Frameworks & Librerías',
      skills: ['Angular', 'Vue.js', 'Spring Boot', 'Express', 'Node.js', 'Cypress']
    },
    {
      category: 'Bases de Datos',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Firebase']
    },
    {
      category: 'Herramientas & Metodologías',
      skills: ['Docker', 'REST APIs', 'Git / GitHub', 'Scrum / Agile', 'Swagger', 'Patrones de Diseño']
    }
  ];

  languages = [
    { name: 'Inglés', level: 'Avanzado', detail: 'Estudios formales' },
    { name: 'Español', level: 'Nativo', detail: 'Idioma materno' }
  ];

  @Input() chips: { title: string; img: string }[] = [];
}
