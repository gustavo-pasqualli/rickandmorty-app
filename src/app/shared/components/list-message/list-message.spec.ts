import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessage } from './list-message';

describe('ListMessage', () => {
  let component: ListMessage;
  let fixture: ComponentFixture<ListMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListMessage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMessage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
