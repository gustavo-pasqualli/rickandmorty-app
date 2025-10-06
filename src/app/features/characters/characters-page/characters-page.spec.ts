import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA, provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { FavoriteCharactersQuery, FavoriteCharactersService } from '@State/favorite-characters';
import { of } from 'rxjs';

import { CharacterService } from '../../../core/services/character.service';
import { CharactersPage } from './characters-page';

class CharacterServiceMock {


  getCharacters() {
    return of({
      results: [],
      info: { next: null }
    });
  }
}

class FavoriteCharactersQueryMock {
  select() {
    return of([]);
  }
}

class FavoriteCharactersServiceMock {
  toggle() {}
}

describe('CharactersPage', () => {
  let component: CharactersPage;
  let fixture: ComponentFixture<CharactersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CharactersPage,
        RouterTestingModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        provideZonelessChangeDetection(),
        { provide: CharacterService, useClass: CharacterServiceMock },
        { provide: FavoriteCharactersQuery, useClass: FavoriteCharactersQueryMock },
        { provide: FavoriteCharactersService, useClass: FavoriteCharactersServiceMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have form initialized', () => {
    expect(component.form).toBeDefined();
    expect(component.form instanceof FormGroup).toBeTrue();
  });
});
