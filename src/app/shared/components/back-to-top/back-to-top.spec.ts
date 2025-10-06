import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTop } from './back-to-top';
import { provideZonelessChangeDetection } from '@angular/core';

describe('BackToTop', () => {
  let component: BackToTop;
  let fixture: ComponentFixture<BackToTop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackToTop],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackToTop);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
