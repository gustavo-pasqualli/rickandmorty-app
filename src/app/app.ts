import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BackToTop } from '@Components/back-to-top/back-to-top';
import { Header } from '@Components/header/header';
import { LanguageSelect } from '@Components/language-select/language-select';
import { NavigationTabs } from '@Components/navigation-tabs/navigation-tabs';
import { FavoriteCharactersQuery } from '@State/favorite-characters';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    NavigationTabs,
    RouterLink,
    BackToTop,
    LanguageSelect
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rickandmorty-app');

  private favoriteCharactersQuery = inject(FavoriteCharactersQuery);

  favoritesCount = toSignal(
    this.favoriteCharactersQuery.select(s => (s.ids as number[]).length),
    { initialValue: 0 }
  );

  tabs = computed(() => ([
    { label: 'HOME', route: './characters',  icon: 'home' },
    { label: 'FAVORITES', route: './favorites', icon: 'favorite', count: this.favoritesCount() }
  ]));
}


