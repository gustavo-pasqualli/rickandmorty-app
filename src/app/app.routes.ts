import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/characters/characters.routes').then((c) => c.charactersRoutes),
  },
];
