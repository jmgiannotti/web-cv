import { Component, Inject, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import { MatButton } from "@angular/material/button";
import { CarouselComponent } from "../carousel/carousel.component";
import { TranslationService } from "../services/translation.service";

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle,
    CarouselComponent
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  ts = inject(TranslationService);
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
