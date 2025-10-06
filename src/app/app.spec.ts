import { Component, provideZonelessChangeDetection } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import {
  MissingTranslationHandler,
  TranslateCompiler,
  TranslateLoader,
  TranslateParser,
  TranslateService,
  TranslateStore,
} from '@ngx-translate/core';

import { App } from './app';

@Component({standalone: true, template: ''}) class DummyCharacters {}
@Component({standalone: true, template: ''}) class DummyFavorites {}

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [
        provideZonelessChangeDetection(),
        provideRouter([
          { path: 'characters', component: DummyCharacters },
          { path: 'favorites', component: DummyFavorites },
          { path: '', redirectTo: 'characters', pathMatch: 'full' },
        ]),
        { provide: TranslateLoader },
        TranslateService,
        TranslateCompiler,
        TranslateParser,
        MissingTranslationHandler,
        TranslateStore
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
