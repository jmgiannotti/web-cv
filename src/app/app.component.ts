import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {NavbarComponent} from "./navbar/navbar.component";
import {CurriculumComponent} from "./curriculum/curriculum.component";
import {AboutComponent} from "./about/about.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, MatTab, MatTabGroup, CurriculumComponent, AboutComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
}
