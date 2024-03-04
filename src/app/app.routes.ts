import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/layOut/layOut.component').then((m) => m.LayOutComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
