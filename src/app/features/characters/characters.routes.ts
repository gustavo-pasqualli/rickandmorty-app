import { Route } from '@angular/router';

export const charactersRoutes: Route[] = [
  {
    path: 'characters',
    loadComponent: () =>
      import('./characters-page/characters-page').then((c) => c.CharactersPage),
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./favorite-characters-page/favorite-characters-page').then((c) => c.FavoriteCharactersPage),
  },
  { path: '', pathMatch: 'full', redirectTo: 'characters' },
  { path: '**', redirectTo: 'characters' }
];
