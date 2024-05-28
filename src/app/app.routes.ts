import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
