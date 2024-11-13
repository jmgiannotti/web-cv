import {ChangeDetectorRef, Component, Inject, PLATFORM_ID} from '@angular/core';
import {NgxParticlesModule,NgParticlesService} from '@tsparticles/angular';
import { MoveDirection, OutMode, ISourceOptions, Container} from "@tsparticles/engine";
import {isPlatformBrowser} from "@angular/common";
import {timestamp} from "rxjs";



@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './particles-background.component.html',
  styleUrl: './particles-background.component.css'
})

export class ParticlesBackgroundComponent  {
  isBrowser: boolean;

  id = "tsparticles";

  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "#111717"
      }
    },
    particles: {
      number: {
        value: 100
      },
      color: {
        value: "#ffffff"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 0.5
      },
      size: {
        value: 3
      },
      move: {
        enable: true,
        speed: 1,
        direction: MoveDirection.none,
        outModes: {
          default: OutMode.bounce
        }
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        }
      }
    }
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly ngParticlesService: NgParticlesService,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  //Figura como no utilizado pero es necesario para el correcto funcionamiento

  async ngAfterViewInit(): Promise<void> {
    if (this.isBrowser) {
      await this.ngParticlesService.init(async (engine: any) => {
        const { loadFull } = await import('tsparticles');
        await loadFull(engine);
      });

      // Forzar detección de cambios para mostrar las partículas
      this.cdr.detectChanges();

    }

  }


}
