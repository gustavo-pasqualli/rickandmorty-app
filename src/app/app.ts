import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe],
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


