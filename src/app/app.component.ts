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
          if (entry.isIntersecting) this.setActive(entry.target.id);
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
    this.setActive(id);
    history.replaceState(null, '', `#${id}`);
  }

  private setActive(id: string): void {
    this.activeSection.set(id);
    this.centerIndexLink(id);
  }

  /**
   * On mobile the index is a horizontally scrolling bar; keep the active link visible.
   * Scrolls only the bar itself (never scrollIntoView, which would fight the page's smooth scroll).
   */
  private centerIndexLink(id: string): void {
    const nav = document.querySelector<HTMLElement>('.index-nav');
    if (!nav || nav.scrollWidth <= nav.clientWidth) return;
    const link = nav.querySelector<HTMLElement>(`a[href="#${id}"]`);
    if (!link) return;
    const left = link.offsetLeft - (nav.clientWidth - link.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }
}
