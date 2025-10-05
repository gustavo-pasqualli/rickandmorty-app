import { Component, computed, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Header } from './shared/components/header/header';
import { NavigationTabs } from './shared/components/navigation-tabs/navigation-tabs';
import { FavoriteCharactersQuery } from './state/favorite-characters';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    NavigationTabs
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('rickandmorty-app');

  private translate = inject(TranslateService);
  private favoriteCharactersQuery = inject(FavoriteCharactersQuery);

  favoritesCount = toSignal(
    this.favoriteCharactersQuery.select(s => (s.ids as number[]).length),
    { initialValue: 0 }
  );

  tabs = computed(() => ([
    { label: 'HOME', route: './characters',  icon: 'home' },
    { label: 'FAVORITES', route: './favorites', icon: 'favorite', count: this.favoritesCount() }
  ]));

  constructor() {
    this.translate.addLangs(['en', 'pt', 'es']);
    this.translate.setFallbackLang('en');

    const browserLang = this.translate.getBrowserLang();

    this.translate.use(
      browserLang?.match(/en|pt|es/) ? browserLang : 'pt'
    );
  }


}


