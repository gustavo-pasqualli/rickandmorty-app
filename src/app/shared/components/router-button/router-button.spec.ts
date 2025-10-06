import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterButton } from './router-button';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

describe('RouterButton', () => {
  let component: RouterButton;
  let fixture: ComponentFixture<RouterButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterButton,
        TranslateModule.forRoot(),
        RouterLink
      ],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: new Map(),
              queryParamMap: new Map(),
              data: {},
              params: {},
              queryParams: {}
            },
            paramMap: of(new Map()),
            queryParamMap: of(new Map()),
            data: of({}),
            params: of({}),
            queryParams: of({})
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterButton);
    component = fixture.componentInstance;

    component.routerLink = '/characters';
    component.label = 'button.label';

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
