import {Component} from '@angular/core';
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
  profiletxt = "With ease of teamwork, efficient communication, and discipline, practicing in every project I can undertake with my colleagues, always with the willingness to surpass myself, learn, and generate creative ideas to overcome the challenges that arise."
  chips =
    [
      {
        title: 'Angular',
        img: 'https://img.icons8.com/?size=100&id=j9DnICNnlhGk&format=png&color=000000'
      },
      {
        title: 'NodeJs',
        img: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000'
      },
      {
        title: 'Spring',
        img: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000'
      },
      {
        title: 'VueJs',
        img: 'https://img.icons8.com/?size=100&id=BUnExfsRs3CW&format=png&color=000000'
      },
      {
        title: 'MongoDB',
        img: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000'
      },
      {
        title: 'MySQL',
        img: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000'
      },
      {
        title: 'Docker',
        img: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000'
      },

    ]
}
