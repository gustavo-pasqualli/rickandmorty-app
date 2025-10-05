import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkeleton } from './list-skeleton';

describe('ListSkeleton', () => {
  let component: ListSkeleton;
  let fixture: ComponentFixture<ListSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSkeleton]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSkeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
