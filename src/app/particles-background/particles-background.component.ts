import { ChangeDetectorRef, Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { NgxParticlesModule, NgParticlesService } from '@tsparticles/angular';
import { MoveDirection, OutMode, ISourceOptions } from "@tsparticles/engine";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: 'app-particles-background',
  standalone: true,
  imports: [NgxParticlesModule],
  templateUrl: './particles-background.component.html',
  styleUrl: './particles-background.component.css'
})
export class ParticlesBackgroundComponent {
  isBrowser: boolean;

  id = "tsparticles";

  particlesOptions: ISourceOptions = {
    background: {
      color: {
        value: "#090d16"
      }
    },
    particles: {
      number: {
        value: 80
      },
      color: {
        value: "#38bdf8"
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: { min: 0.1, max: 0.4 }
      },
      size: {
        value: { min: 1, max: 2.5 }
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: MoveDirection.none,
        outModes: {
          default: OutMode.bounce
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: false
        },
        resize: {
          enable: true
        }
      }
    }
  };

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private readonly ngParticlesService: NgParticlesService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit(): Promise<void> {
    if (this.isBrowser) {
      this.ngZone.runOutsideAngular(async () => {
        await this.ngParticlesService.init(async (engine: any) => {
          const { loadFull } = await import('tsparticles');
          await loadFull(engine);
        });

        this.ngZone.run(() => {
          this.cdr.detectChanges();
        });
      });
    }
  }
}
