import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [  { path: '', component: AppComponent, data: { title: 'Home' } },
  { path: 'list', component: AppComponent, data: { title: 'List' } },
  { path: 'form', component: AppComponent, data: { title: 'Form' } }];
