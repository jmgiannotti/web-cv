import { Component, Input, inject } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatChip, MatChipAvatar, MatChipSet } from "@angular/material/chips";
import { MatDialog } from "@angular/material/dialog";
import { DialogComponent } from '../dialog/dialog.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    MatCardModule,
    MatChip,
    MatChipAvatar,
    MatChipSet,
    MatExpansionModule
  ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  ts = inject(TranslationService);
  private dialog = inject(MatDialog);

  @Input() chips: any[] = [];

  openDialog(proyect: any): void {
    this.dialog.open(DialogComponent, {
      data: proyect,
      maxWidth: '1050px',
      width: '92vw',
      panelClass: 'custom-project-dialog-panel'
    });
  }
}
