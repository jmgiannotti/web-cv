import { Component, inject, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ProjectData, TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  ts = inject(TranslationService);
  private dialog = inject(MatDialog);

  hoveredIndex = signal<number | null>(null);

  openDrawer(project: ProjectData, index: number): void {
    const isNarrow = typeof window !== 'undefined' && window.innerWidth < 640;
    this.dialog.open(DialogComponent, {
      data: { ...project, index: index + 1 },
      position: { right: '0', top: '0' },
      height: '100dvh',
      maxHeight: '100dvh',
      width: isNarrow ? '100vw' : 'min(720px, 94vw)',
      maxWidth: '100vw',
      panelClass: 'side-drawer-dialog-panel',
      backdropClass: 'side-drawer-backdrop',
      autoFocus: false
    });
  }
}

