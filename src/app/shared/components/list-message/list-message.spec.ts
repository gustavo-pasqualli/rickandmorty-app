import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMessage } from './list-message';
import { provideZonelessChangeDetection } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

describe('ListMessage', () => {
  let component: ListMessage;
  let fixture: ComponentFixture<ListMessage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ListMessage,
        TranslateModule.forRoot()
      ],
      providers: [
        provideZonelessChangeDetection()
      ]
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
