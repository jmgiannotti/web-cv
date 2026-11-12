import { Component, Input, inject } from '@angular/core';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ts = inject(TranslationService);
  @Input() chips: any[] = [];
}
