import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCard } from './character-card';
import { provideZonelessChangeDetection } from '@angular/core';

describe('CharacterCard', () => {
  let component: CharacterCard;
  let fixture: ComponentFixture<CharacterCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCard],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
