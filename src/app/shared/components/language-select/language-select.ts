import { Component, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

type LangCode = 'en' | 'pt' | 'es';

@Component({
  selector: 'app-language-select',
  imports: [
  ],
  templateUrl: './language-select.html',
  styleUrl: './language-select.scss'
})
export class LanguageSelect {
  private translate = inject(TranslateService);

  current = signal<string>('en');

  storageKey = 'lang';
  languages: LangCode[] = [
    'pt', 'en', 'es'
  ]

  ngOnInit() {
    this.translate.addLangs(this.languages);
    this.translate.setFallbackLang('en');

    const saved = (localStorage.getItem(this.storageKey) || '').slice(0, 2) as LangCode;

    const browser = (this.translate.getBrowserLang() || '').slice(0, 2) as LangCode;

    const initial =
      (saved && this.languages.includes(saved)) ? saved :
      (browser && this.languages.includes(browser)) ? browser : 'en';

    this.changeLanguage(initial);
  }

  onChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const code = select.value;

    this.changeLanguage(code);
  }

  changeLanguage(code: string) {
    this.translate.use(code);
    this.current.set(code);
    localStorage.setItem(this.storageKey, code);
  }
}
