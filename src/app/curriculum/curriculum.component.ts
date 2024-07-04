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
  profiletxt = "With ease of teamwork, efficient communication, and discipline, practicing in every project I can undertake with my colleagues, always with the willingness to surpass myself, learn, and generate creative ideas to overcome the challenges that arise."
  @Input() chips: any; // error al poner []
}
