import { Component, Input, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.css'
})
export class CurriculumComponent {
  ts = inject(TranslationService);
  @Input() chips: any[] = [];
}
