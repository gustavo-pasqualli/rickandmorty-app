import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { FavoriteCharactersPage } from './favorite-characters-page';

describe('FavoriteCharactersPage', () => {
  let component: FavoriteCharactersPage;
  let fixture: ComponentFixture<FavoriteCharactersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FavoriteCharactersPage,
        RouterTestingModule,
        TranslateModule.forRoot(),
      ],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteCharactersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
