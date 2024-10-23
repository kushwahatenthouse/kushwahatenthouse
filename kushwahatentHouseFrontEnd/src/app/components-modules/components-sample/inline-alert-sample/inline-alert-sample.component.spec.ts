import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineAlertSampleComponent } from './inline-alert-sample.component';

describe('InlineAlertSampleComponent', () => {
  let component: InlineAlertSampleComponent;
  let fixture: ComponentFixture<InlineAlertSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InlineAlertSampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineAlertSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
