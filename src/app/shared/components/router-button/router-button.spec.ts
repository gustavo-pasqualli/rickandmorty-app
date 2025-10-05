import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterButton } from './router-button';

describe('RouterButton', () => {
  let component: RouterButton;
  let fixture: ComponentFixture<RouterButton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterButton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouterButton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
