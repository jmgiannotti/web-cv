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
  chipsApp =
    [
      {
        title: 'Angular',
        img: 'https://img.icons8.com/?size=100&id=j9DnICNnlhGk&format=png&color=000000'
      },
      {
        title: 'NodeJs',
        img: 'https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000'
      },
      {
        title: 'Spring',
        img: 'https://img.icons8.com/?size=100&id=90519&format=png&color=000000'
      },
      {
        title: 'VueJs',
        img: 'https://img.icons8.com/?size=100&id=BUnExfsRs3CW&format=png&color=000000'
      },
      {
        title: 'MongoDB',
        img: 'https://img.icons8.com/?size=100&id=74402&format=png&color=000000'
      },
      {
        title: 'MySQL',
        img: 'https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000'
      },
      {
        title: 'Docker',
        img: 'https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000'
      },

    ]
}
