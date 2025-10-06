import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { PageTitle } from './page-title';

describe('PageTitle', () => {
let component: PageTitle;
  let fixture: ComponentFixture<PageTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PageTitle,
        TranslateModule.forRoot()
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
