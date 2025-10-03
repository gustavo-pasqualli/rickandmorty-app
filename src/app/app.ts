import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Header } from './shared/components/header/header';
import { NavigationTabs } from './shared/components/navigation-tabs/navigation-tabs';

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

  constructor() {
    this.translate.addLangs(['en', 'pt', 'es']);
    this.translate.setFallbackLang('en');

    const browserLang = this.translate.getBrowserLang();

    this.translate.use(
      browserLang?.match(/en|pt|es/) ? browserLang : 'pt'
    );
  }
}


