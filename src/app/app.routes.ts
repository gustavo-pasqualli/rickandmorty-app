import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'characters',
    loadComponent: () =>
      import('./features/characters/characters-page/characters-page').then((c) => c.CharactersPage),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./features/characters/favorite-characters-page/favorite-characters-page').then((c) => c.FavoriteCharactersPage),
  },
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  { path: '**', redirectTo: 'characters' }
];
