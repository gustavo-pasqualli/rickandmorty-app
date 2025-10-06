import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTabs } from './navigation-tabs';
import { provideZonelessChangeDetection } from '@angular/core';

describe('NavigationTabs', () => {
  let component: NavigationTabs;
  let fixture: ComponentFixture<NavigationTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationTabs],
      providers: [provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavigationTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
