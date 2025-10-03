import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters',
  },
  {
    path: 'characters',
    loadChildren: () =>
      import('./features/characters/characters.routes').then((c) => c.charactersRoutes),
  },
];
