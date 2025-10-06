import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'characters',
    loadComponent: () =>
      import('@Features/characters/characters-page/characters-page').then((c) => c.CharactersPage),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('@Features/characters/favorite-characters-page/favorite-characters-page').then((c) => c.FavoriteCharactersPage),
  },
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  { path: '**', redirectTo: 'characters' }
];
