import { AfterViewInit, Component, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ParticlesBackgroundComponent } from './particles-background/particles-background.component';
import { NavKey, TranslationService } from './services/translation.service';

interface PageSection {
  id: string;
  num: string;
  key: NavKey;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CurriculumComponent, AboutComponent, ProjectsComponent, ParticlesBackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit, OnDestroy {
  title = 'web-cv';
  ts = inject(TranslationService);
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  contactInfo = {
    name: 'Juan Martín Giannotti Calens',
    firstName: 'Juan Martín',
    lastName: 'Giannotti',
    secondLastName: 'Calens',
    shortName: 'Juan M. Giannotti',
    email: 'juanmartingiannotti@gmail.com',
    phone: '+(54) 911 59481529',
    phoneClean: '5491159481529',
    github: 'https://github.com/jmgiannotti',
    githubUser: '@jmgiannotti',
  };

  /** Order here defines the numbered index and must match the section ids rendered by the children. */
  sections: PageSection[] = [
    { id: 'perfil', num: '01', key: 'profile' },
    { id: 'experiencia', num: '02', key: 'experience' },
    { id: 'proyectos', num: '03', key: 'projects' },
    { id: 'stack', num: '04', key: 'stack' },
    { id: 'formacion', num: '05', key: 'education' },
    { id: 'sobre-mi', num: '06', key: 'about' },
  ];

  activeSection = signal('perfil');

  marquee = [
    'Angular', 'Node.js', 'Spring Boot', 'Vue.js', 'TypeScript', 'Java',
    'PostgreSQL', 'MongoDB', 'MySQL', 'Docker', 'Kotlin', 'Firebase'
  ];

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId) || typeof IntersectionObserver === 'undefined') return;

    this.observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeSection.set(entry.target.id);
        }
      },
      // A thin band around 40% of the viewport height decides the active section
      { rootMargin: '-40% 0px -55% 0px' }
    );

    for (const s of this.sections) {
      const el = document.getElementById(s.id);
      if (el) this.observer.observe(el);
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  goTo(event: Event, id: string): void {
    event.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    this.activeSection.set(id);
    history.replaceState(null, '', `#${id}`);
  }
}
