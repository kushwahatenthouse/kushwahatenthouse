import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSampleComponent } from './accordion-sample.component';

describe('AccordionSampleComponent', () => {
  let component: AccordionSampleComponent;
  let fixture: ComponentFixture<AccordionSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionSampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
