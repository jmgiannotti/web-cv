import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from "@angular/core";
@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselComponent {
  @Input() images: string[] = [];

}
